import axios from 'axios';
import api from '../../Api/api';
import { Apis } from '../../Api/config';
import { UserLogin } from '../../index';
const getpayments = async (filter) => {
    try {
        const result = await api.get(Apis.api_payments +filter);
        return result.data.error ? null : result.data;
    } catch (error) {
        
        return null;
    }
};
const addpayments = async (status) => {
    try {
        const result = await api.post(Apis.api_payments,  status);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error.response?.data?._server_messages);
        console.error('Error creating item:', error.response?.data || error.message);
        return null;
    }
};
const updatepayments = async (data) => {
    try {
        const result = await api.put(Apis.api_payments + data.id, data);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};



const paymentsFun = {
    getpayments,
    addpayments,
    updatepayments,
};

export default paymentsFun;


