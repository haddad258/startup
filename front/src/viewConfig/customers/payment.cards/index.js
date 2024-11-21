
import React, { useEffect, useState } from 'react';
import {
    CRow,
    CCol,
    CCard,
    CCardHeader,
    CCardBody,
} from '@coreui/react';
import { settingsPaymentCards } from 'src/services/SupperSettings/index';
import GenericTable from 'src/components/Generic.Table';
import PaymentCardsC from './PaymentCards'
import i18n from 'src/i18n';
import StatusRow from 'src/components/module.common/status.row';
const PaymentCards = () => {
    const [List, setList] = useState([]);

    const fetchPaymentCards = async () => {
        try {
            const list = await settingsPaymentCards.getPaymentCards();
            if (list) {
                setList(list?.data);
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };
    useEffect(() => {
        fetchPaymentCards();
    }, []);

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
        <CCard className="mb-4">
            <CCardHeader>
                <CRow className="align-items-center">
                    <CCol md="6" xs="12">
                        <strong>   {i18n.t('PaymentCardsTableTitle')}</strong>
                    </CCol>
                    <CCol md="6" xs="12" className="text-md-end mt-md-0 mt-3">
                        <PaymentCardsC refresh={() => fetchPaymentCards()} />
                    </CCol>
                </CRow>
            </CCardHeader>
            <CCardBody>
                <CRow>
                    <CCol xs="12">
                        <CCard className="mb-4">
                            <CCardHeader>
                                <strong>{i18n.t('PaymentCardsList')}</strong>
                            </CCardHeader>
                            <CCardBody>
                                <GenericTable columns={columns} data={List} />
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>
    );
};

export default PaymentCards;

