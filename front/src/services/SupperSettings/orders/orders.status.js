
import api from '../../Api/api';
import createNotification from 'src/components/Handle.Error/notifications';
import { ApiSupperSettings } from '../../Api/config';

const getStatusOrders = async () => {
    try {
        const result = await api.get(ApiSupperSettings.api_StatusOrders);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const addStatusOrders = async (status) => {
    try {
        const result = await api.post(ApiSupperSettings.api_StatusOrders, status);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const updateStatusOrders = async (data) => {
    try {
        const result = await api.put(ApiSupperSettings.api_StatusOrders+data.id, data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};



const StatusOrdersFun = {
    getStatusOrders,
    addStatusOrders,
    updateStatusOrders,
};

export default StatusOrdersFun;


