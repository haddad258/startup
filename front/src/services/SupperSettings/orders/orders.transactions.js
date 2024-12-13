
import api from '../../Api/api';
import createNotification from 'src/components/Handle.Error/notifications';
import { ApiSupperSettings } from '../../Api/config';

const getTransactionsOrders = async () => {
    try {
        const result = await api.get(ApiSupperSettings.api_TransactionsOrders);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const addTransactionsOrders = async (data) => {
    try {
        const result = await api.post(ApiSupperSettings.api_TransactionsOrders, data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const updateTransactionsOrders = async (data) => {
    try {
        const result = await api.put(ApiSupperSettings.api_TransactionsOrders+data.id, data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};



const TransactionsOrdersFun = {
    getTransactionsOrders,
    addTransactionsOrders,
    updateTransactionsOrders,
};

export default TransactionsOrdersFun;


