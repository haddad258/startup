
  import React, { useEffect, useState } from 'react';
  import {
      CRow,
      CCol,
      CCard,
      CCardHeader,
      CCardBody,
  } from '@coreui/react';
  import { settingsTransactions } from 'src/services/SupperSettings/index';
  import GenericTable from 'src/components/Generic.Table';
//   import TransactionsC from './Transactions'
  import i18n from 'src/i18n';
  const Transactions = () => {
      const [List, setList] = useState([]);
  
      const fetchTransactions = async () => {
          try {
              const list = await settingsTransactions.getTransactionsOrders();
              if (list) {
                  setList(list?.data);
              }
          } catch (error) {
              console.error('Error fetching admin list:', error);
          }
      };
      useEffect(() => {
          fetchTransactions();
      }, []);
  
      const columns = [
          //{ label: '#', field: 'index' },
          { label: i18n.t('intentLabel'), field: 'intent' },
          { label: i18n.t('stateLabel'), field: 'state' },
          { label: i18n.t('payer_statusLabel'), field: 'payer_status' },
          { label: i18n.t('amount_totalLabel'), field: 'amount_total' },
          { label: i18n.t('invoice_numberLabel'), field: 'invoice_number' },
          { label: i18n.t('payment_linksLabel'), field: 'payment_links' },
          { label: i18n.t('sale_linksLabel'), field: 'sale_links' },
          
        //   {
        //       label:  i18n.t('actionLabel'),
        //       field: 'actions',
        //       render: (item) => <TransactionsC refresh={()=>fetchTransactions()} selectedTransactions={item} />,
        //   },
      ];
  
      return (
          <CCard className="mb-4">
              <CCardHeader>
                  <CRow className="align-items-center">
                      <CCol md="6" xs="12">
                          <strong>   { i18n.t('TransactionsTableTitle')}</strong>
                      </CCol>
                      {/* <CCol md="6" xs="12" className="text-md-end mt-md-0 mt-3">
                          <TransactionsC refresh={()=>fetchTransactions()} />
                      </CCol> */}
                  </CRow>
              </CCardHeader>
              <CCardBody>
                  <CRow>
                      <CCol xs="12">
                          <CCard className="mb-4">
                              <CCardHeader>
                          <strong>{ i18n.t('TransactionsList')}</strong>
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
  
  export default Transactions;
  
  