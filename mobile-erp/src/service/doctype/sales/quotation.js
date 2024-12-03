import axios from 'axios';
import api from '../../Api/api';
import { Apis } from '../../Api/config';
import { UserLogin } from '../../index';
const getquotations = async (filter) => {
    try {
        const result = await api.get(Apis.api_quotations +filter);
        return result.data.error ? null : result.data;
    } catch (error) {
        
        return null;
    }
};
const addquotations = async (status) => {
    try {
        const result = await api.post(Apis.api_quotations,  status);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error.response?.data?._server_messages);
        console.error('Error creating item:', error.response?.data || error.message);
        return null;
    }
};
const updatequotations = async (data) => {
    try {
        const result = await api.put(Apis.api_quotations + data.id, data);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};



const quotationsFun = {
    getquotations,
    addquotations,
    updatequotations,
};

export default quotationsFun;


