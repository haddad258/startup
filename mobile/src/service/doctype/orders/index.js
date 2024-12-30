

import api from '../../Api/api';
import { Apis } from '../../Api/config';

const getOrderCustomer = async () => {
    try {
        const result = await api.get(Apis.api_OrderCustomer);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
const addOrderCustomer = async (status) => {
    try {
        const result = await api.post(Apis.api_OrderCustomer, status);

        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
const updateOrderCustomer = async (data) => {
    try {
        const result = await api.put(Apis.api_OrderCustomer+data.id, data);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};



const OrderCustomerFun = {
    getOrderCustomer,
    addOrderCustomer,
    updateOrderCustomer,
};

export default OrderCustomerFun;


