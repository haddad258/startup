
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
import {  cilDescription } from '@coreui/icons';
import { settingsCustomers } from 'src/services/SupperSettings';
import PropTypes from 'prop-types';
import i18n from 'src/i18n';
import GenericTable from 'src/components/Generic.Table';
import OrderDetailsIndexsC from 'src/viewConfig/orders/orders.details/order.Details.Index';
import OrderDetailsTransactionsC from 'src/viewConfig/orders/order.transactions/order.Details.Transactions';



const OrdersCustomersList = ({  selectedOrdersCustomers }) => {
    const [VisibleOrders, setVisibleOrders] = useState(false);

    const [OrdersCustomers, setOrdersCustomers] = useState([]);

    const fetchOrders = async () => {
        try {
            const list = await settingsCustomers.getOrdersByCustomers(selectedOrdersCustomers.id);
            if (list) {
                setOrdersCustomers(list?.data);
                setVisibleOrders(!VisibleOrders)
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };
    const columns = [
        //{ label: '#', field: 'index' },
        { label: i18n.t('ordernumberInputLabel'), field: 'order_number' },
        { label: i18n.t('priceInputLabel'), field: 'price' },
        { label: i18n.t('quantityLabel'), field: 'quantity' },
        { label: i18n.t('providerLabel'), field: 'provider' },


        {
            label: i18n.t('OrdersDetailsLabel'),
            field: 'actions',
            render: (item) => <OrderDetailsIndexsC refresh={() => fetchOrders()} selectedOrderDetailsIndexs={item} />,
        },
        {
            label: i18n.t('OrdersDetailsTransactions'),
            field: 'actions',
            render: (item) => <OrderDetailsTransactionsC refresh={() => fetchOrders()} selectedOrderDetailsTransactions={item} />,
        },

      
    ];
    return (
        <>
            <CButton style={{backgroundColor:"#211eea"}} onClick={() =>  fetchOrders()}>
                <CIcon  style={{color:"#FFF"}} icon={cilDescription} />
            </CButton>

            <CModal
                alignment="center"
                visible={VisibleOrders}
                onClose={() => setVisibleOrders(false)}
                aria-labelledby="VerticallyCenteredExample"
                size="xl"
            >
                <CModalHeader onClose={() => setVisibleOrders(false)}>
                    <CModalTitle id="LiveDemoExampleLabel">{i18n.t('ListOrdersCustomersTitle')}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CRow>
                        <CCol xs="12">
                            <CCard className="mb-4">
                                <CCardHeader>
                                    <strong>{i18n.t('OrdersList')}</strong>
                                </CCardHeader>
                                <CCardBody>
                                    <GenericTable columns={columns} data={OrdersCustomers} />
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => setVisibleOrders(false)}>
                            {i18n.t('closeButton')}
                        </CButton>
                    </CModalFooter>
                </CModalBody>
            </CModal>
        </>
    );
};

OrdersCustomersList.propTypes = {
   
    selectedOrdersCustomers: PropTypes.object,
};

export default OrdersCustomersList;

