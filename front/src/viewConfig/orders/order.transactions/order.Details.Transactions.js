
import React, { useState,  } from 'react';
import {
    CButton,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CCardBody,
    CCol,
    CCard,
    CCardHeader,
    CRow

} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {  cilTransfer,  } from '@coreui/icons';
import { settingsOrders } from 'src/services/SupperSettings/index';
import GenericTable from 'src/components/Generic.Table';

import PropTypes from 'prop-types';
import i18n from 'src/i18n';



const OrderDetailsTransactionsC = ({ refresh, selectedOrderDetailsTransactions }) => {
    const [visible, setVisible] = useState(false);

    const [OrderDetailsTransaction, setOrderDetailsTransaction] = useState([]);
  
    const fetchOrders = async () => {
        try {
            const list = await settingsOrders.getOrdersByIdTransactions(selectedOrderDetailsTransactions.id);
            if (list) {
                setOrderDetailsTransaction(list?.data);
                setVisible(!visible);
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };
   


    const columns = [
        { label: '#', field: 'index' },
        { label: i18n.t('intentLabel'), field: 'intent' },
        { label: i18n.t('stateLabel'), field: 'state' },
        { label: i18n.t('payer_statusLabel'), field: 'payer_status' },
        { label: i18n.t('amount_totalLabel'), field: 'amount_total' },
        { label: i18n.t('invoice_numberLabel'), field: 'invoice_number' },
        { label: i18n.t('payment_linksLabel'), field: 'payment_links' },
        { label: i18n.t('sale_linksLabel'), field: 'sale_links' },
    ];

    return (
        <>
            <CButton  style={{backgroundColor:"#dbea1e"}} onClick={() => fetchOrders() }>
                <CIcon icon={cilTransfer} />
            </CButton>

            <CModal
                alignment="center"
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="VerticallyCenteredExample"
                size="xl"
            >
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle id="LiveDemoExampleLabel">{ i18n.t('OrdersDetailsTableTransaction')}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                <CCardBody>
                <CCard className="mb-4">
              <CCardHeader>
                  <CRow className="align-items-center">
                      <CCol md="6" xs="12">
                          <strong>   { i18n.t('OrdersDetailsTableTransaction')}</strong>
                      </CCol>
                      
                  </CRow>
              </CCardHeader>
              <CCardBody>
                  <CRow>
                      <CCol xs="12">
                          <CCard className="mb-4">
                              <CCardHeader>
                          <strong>{ i18n.t('OrdersDetailsTableTransaction')}</strong>
                              </CCardHeader>
                              <CCardBody>
                                      <GenericTable columns={columns} data={OrderDetailsTransaction} />
                              </CCardBody>
                          </CCard>
                      </CCol>
                  </CRow>
              </CCardBody>
          </CCard>
              </CCardBody>
                        <CModalFooter>
                            <CButton color="secondary" onClick={() => setVisible(false)}>
                            {i18n.t('closeButton')}
                            </CButton>
                            <CButton color="primary" type="submit" >{i18n.t('saveButton')}</CButton>
                        </CModalFooter>
                </CModalBody>
            </CModal>
        </>
    );
};

OrderDetailsTransactionsC.propTypes = {
    refresh: PropTypes.func.isRequired,
    selectedOrderDetailsTransactions: PropTypes.object,
};

export default OrderDetailsTransactionsC;

