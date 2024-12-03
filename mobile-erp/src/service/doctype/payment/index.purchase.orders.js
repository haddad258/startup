import axios from 'axios';
import api from '../../Api/api';
import { Apis } from '../../Api/config';
import { UserLogin } from '../../index';
const getpurchaseOrders = async (filter) => {
    try {
        const result = await api.get(Apis.api_purchaseOrders +filter);
        return result.data.error ? null : result.data;
    } catch (error) {
        
        return null;
    }
};
const addpurchaseOrders = async (status) => {
    try {
        const result = await api.post(Apis.api_purchaseOrders,  status);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error.response?.data?._server_messages);
        console.error('Error creating item:', error.response?.data || error.message);
        return null;
    }
};
const updatepurchaseOrders = async (data) => {
    try {
        const result = await api.put(Apis.api_purchaseOrders + data.id, data);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};



const purchaseOrdersFun = {
    getpurchaseOrders,
    addpurchaseOrders,
    updatepurchaseOrders,
};

export default purchaseOrdersFun;


