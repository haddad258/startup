
import React, { useState } from 'react';
import {
    CButton,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CCardBody,
    CRow,
    CCol,
    CCard,
    CCardHeader
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilCreditCard } from '@coreui/icons';
import { settingsCustomers } from 'src/services/SupperSettings';
import PropTypes from 'prop-types';
import i18n from 'src/i18n';
import GenericTable from 'src/components/Generic.Table';
import StatusRow from 'src/components/module.common/status.row';
import PaymentCardsC from './PaymentCards'



const PaymentCardsCustomersC = ({  selectedPaymentCardsCustomers }) => {
    const [visible, setVisible] = useState(false);

    const [PaymentCardsCustomers, setPaymentCardsCustomers] = useState([]);

    const fetchPaymentCards = async () => {
        try {
            const list = await settingsCustomers.getPaymentCardsCustomers(selectedPaymentCardsCustomers.id);
            if (list) {
                setPaymentCardsCustomers(list?.data);
                setVisible(!visible)
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };
    const columns = [
        { label: '#', field: 'index' },
        { label: i18n.t('cardholderNameLabel'), field: 'cardholder_name' },
        { label: i18n.t('cardNumberLabel'), field: 'card_number_token' },
        { label: i18n.t('expirationDateLabel'), field: 'expiration_date' },
        { label: i18n.t('cardTypeLabel'), field: 'card_type' },
        { label: i18n.t('cardemailLabel'), field: 'card_email' },

        {
            label: i18n.t('actionLabel'),
            field: 'actions',
            render: (item) =>
                <>
                    <PaymentCardsC refresh={() => fetchPaymentCards()} selectedPaymentCards={item} />
                    <StatusRow refresh={() => fetchPaymentCards()} status={item.status} data={"paymentcards"} entityName={i18n.t('PaymentCardsList')} id={item.id} />
                </>
        },
    ];

    return (
        <>
            <CButton style={{backgroundColor:"#04564f"}} onClick={() =>  fetchPaymentCards()}>
                <CIcon  style={{color:"#FFF"}}icon={cilCreditCard} />
            </CButton>

            <CModal
                alignment="center"
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="VerticallyCenteredExample"
                size="xl"
            >
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle id="LiveDemoExampleLabel">{i18n.t('ListPaymentCardsCustomersTitle')}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CRow>
                        <CCol xs="12">
                            <CCard className="mb-4">
                                <CCardHeader>
                                    <strong>{i18n.t('PaymentCardsList')}</strong>
                                </CCardHeader>
                                <CCardBody>
                                    <GenericTable columns={columns} data={PaymentCardsCustomers} />
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => setVisible(false)}>
                            {i18n.t('closeButton')}
                        </CButton>
                    </CModalFooter>
                </CModalBody>
            </CModal>
        </>
    );
};

PaymentCardsCustomersC.propTypes = {
   
    selectedPaymentCardsCustomers: PropTypes.object,
};

export default PaymentCardsCustomersC;

