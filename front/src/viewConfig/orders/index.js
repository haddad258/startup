
import React, { useEffect, useState } from 'react';
import {
    CRow,
    CCol,
    CCard,
    CCardHeader,
    CCardBody,
} from '@coreui/react';
import { settingsOrders } from 'src/services/SupperSettings/index';
import GenericTable from 'src/components/Generic.Table';
import OrdersC from './orders.create/Orders'
import i18n from 'src/i18n';
import OrderDetailsIndexsC from './orders.details/order.Details.Index';
import OrderDetailsTransactionsC from './order.transactions/order.Details.Transactions';
const Orders = () => {
    const [List, setList] = useState([]);

    const fetchOrders = async () => {
        try {
            const list = await settingsOrders.getOrders();
            if (list) {
                setList(list?.data);
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };
    useEffect(() => {
        fetchOrders();
    }, []);

    const columns = [
        { label: '#', field: 'index' },
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

        
        {
            label: i18n.t('actionLabel'),
            field: 'actions',
            render: (item) => <OrdersC refresh={() => fetchOrders()} selectedOrders={item} />,
        },
    ];

    return (
        <CCard className="mb-4">
            <CCardHeader>
                <CRow className="align-items-center">
                    <CCol md="6" xs="12">
                        <strong>   {i18n.t('OrdersTableTitle')}</strong>
                    </CCol>
                   
                </CRow>
            </CCardHeader>
            <CCardBody>
                <CRow>
                    <CCol xs="12">
                        <CCard className="mb-4">
                            <CCardHeader>
                                <strong>{i18n.t('OrdersList')}</strong>
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

export default Orders;

