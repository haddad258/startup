
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
import { cilListFilter,  } from '@coreui/icons';
import { settingsOrders } from 'src/services/SupperSettings/index';
import GenericTable from 'src/components/Generic.Table';
import OrdersDetailsC from '../orders.details/OrdersDetails'

import PropTypes from 'prop-types';
import i18n from 'src/i18n';



const OrderDetailsIndexsC = ({ refresh, selectedOrderDetailsIndexs }) => {
    const [visible, setVisible] = useState(false);

    const [OrderDetailsIndex, setOrderDetailsIndex] = useState([]);
  
    const fetchOrders = async () => {
        try {
            const list = await settingsOrders.getOrdersById(selectedOrderDetailsIndexs.id);
            if (list) {
                setOrderDetailsIndex(list?.data);
                setVisible(!visible);
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };
   


    const columns = [
        { label: '#', field: 'index' },
        { label: i18n.t('priceInputLabel'), field: 'price' },
        { label: i18n.t('quantityLabel'), field: 'quantity' },
        { label: i18n.t('providerLabel'), field: 'providerId' },
        
        {
            label:  i18n.t('actionLabel'),
            field: 'actions',
            render: (item) => <OrdersDetailsC refresh={()=>fetchOrders()} selectedOrdersDetails={item} />,
        },
    ];

    return (
        <>
            <CButton  style={{backgroundColor:"#1eea46"}} onClick={() => fetchOrders() }>
                <CIcon icon={cilListFilter} />
            </CButton>

            <CModal
                alignment="center"
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="VerticallyCenteredExample"
                size="xl"
            >
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle id="LiveDemoExampleLabel">{ i18n.t('OrdersDetailsList')}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                <CCardBody>
                <CCard className="mb-4">
              <CCardHeader>
                  <CRow className="align-items-center">
                      <CCol md="6" xs="12">
                          <strong>   { i18n.t('OrdersDetailsTableIndex')}</strong>
                      </CCol>
                      
                  </CRow>
              </CCardHeader>
              <CCardBody>
                  <CRow>
                      <CCol xs="12">
                          <CCard className="mb-4">
                              <CCardHeader>
                          <strong>{ i18n.t('OrdersDetailsList')}</strong>
                              </CCardHeader>
                              <CCardBody>
                                      <GenericTable columns={columns} data={OrderDetailsIndex} />
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

OrderDetailsIndexsC.propTypes = {
    refresh: PropTypes.func.isRequired,
    selectedOrderDetailsIndexs: PropTypes.object,
};

export default OrderDetailsIndexsC;

