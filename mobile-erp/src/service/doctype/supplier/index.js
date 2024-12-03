import axios from 'axios';
import api from '../../Api/api';
import { Apis } from '../../Api/config';
import { UserLogin } from '../../index';
const getsuppliers = async (filter) => {
    try {
        const result = await api.get(Apis.api_suppliers +filter);
        return result.data.error ? null : result.data;
    } catch (error) {
        
        return null;
    }
};
const addsuppliers = async (status) => {
    try {
        const result = await api.post(Apis.api_suppliers,  status);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error.response?.data?._server_messages);
        console.error('Error creating item:', error.response?.data || error.message);
        return null;
    }
};
const updatesuppliers = async (data) => {
    try {
        const result = await api.put(Apis.api_suppliers + data.id, data);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};



const suppliersFun = {
    getsuppliers,
    addsuppliers,
    updatesuppliers,
};

export default suppliersFun;


