import axios from 'axios';
import api from '../../Api/api';
import { Apis } from '../../Api/config';
import { UserLogin } from '../../index';
const getpurchaseInvoces = async (filter) => {
    try {
        const result = await api.get(Apis.api_purchaseInvoces +filter);
        return result.data.error ? null : result.data;
    } catch (error) {
        
        return null;
    }
};
const addpurchaseInvoces = async (status) => {
    try {
        const result = await api.post(Apis.api_purchaseInvoces,  status);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error.response?.data?._server_messages);
        console.error('Error creating item:', error.response?.data || error.message);
        return null;
    }
};
const updatepurchaseInvoces = async (data) => {
    try {
        const result = await api.put(Apis.api_purchaseInvoces + data.id, data);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};



const purchaseInvocesFun = {
    getpurchaseInvoces,
    addpurchaseInvoces,
    updatepurchaseInvoces,
};

export default purchaseInvocesFun;


