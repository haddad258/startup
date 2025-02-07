import api from '../../Api/api';
import { Apis } from '../../Api/config';
const getorders = async (filter) => {
    try {
        const result = await api.get(Apis.api_orders + filter);
        return result.data.error ? null : result.data;
    } catch (error) {

        return null;
    }
};
const addorders = async (status) => {
    try {
        const result = await api.post(Apis.api_orders, status);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error.response?.data?._server_messages);
        console.error('Error creating item:', error.response?.data || error.message);
        return null;
    }
};
const updateorders = async (uri, data) => {
    try {
        console.log((Apis.api_orders + uri,data))
        const result = await api.put(Apis.api_orders + uri,data);
        console.log('result',result.data)
        return result.data.error ? null : result.data;
    } catch (error) {
        return null;
    }
};
const createPaymentEntry = async ( data) => {
    try {
        const result = await api.post(Apis.api_payments ,data);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error.response.data);
        console.error(error);
        return null;
    }
};



const ordersFun = {
    getorders,
    addorders,
    updateorders,
    createPaymentEntry
};

export default ordersFun;


