import React from 'react';
import {
    CCard,
    CCardHeader,
    CCardBody,
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell,
    CButton,
} from '@coreui/react';
import { useSelector } from 'react-redux';
import { settingsOrders } from 'src/services/SupperSettings';

const CurrentOrder = () => {
    const cartReducer = useSelector((state) => state.cartReducer);
    const onPrintOrder = async () => {
        try {
            console.error('print this');
        } catch (error) {
            console.error('Error fetching admin list:', error);
            return null;
        }
    };
    const onCompleteOrder = async () => {
        try {
            const list = await settingsOrders.addOrders({
                ...cartReducer,
                orderDetails: Object.values(cartReducer.products),
            });
            return list?.data;
        } catch (error) {
            console.error('Error fetching order list:', error);
            return null;
        }
    };
    return (
        <CCard>
            <CCardHeader>
                <strong>Order Summary</strong>
            </CCardHeader>
            <CCardBody>
                <CTable>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell>Item</CTableHeaderCell>
                            <CTableHeaderCell>Price</CTableHeaderCell>
                            <CTableHeaderCell>Quantity</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {Object.values(cartReducer.products).map((item, index) => (
                            <CTableRow key={index}>
                                <CTableDataCell>{item.product?.name}</CTableDataCell>
                                <CTableDataCell>
                                    ${item.product?.price}
                                </CTableDataCell>
                                <CTableDataCell>
                                    {item.quantity}
                                </CTableDataCell>
                            </CTableRow>
                        ))}
                    </CTableBody>
                </CTable>
                <p>
                    <strong>Total: ${cartReducer?.total}</strong>
                </p>
                <CButton
                    color="success"
                    onClick={()=>onCompleteOrder()}
                    className="me-2"
                >
                    Complete Order
                </CButton>
                <CButton color="secondary" onClick={()=>onPrintOrder()}>
                    Print Order
                </CButton>
            </CCardBody>
        </CCard>
    );
};



export default CurrentOrder;
