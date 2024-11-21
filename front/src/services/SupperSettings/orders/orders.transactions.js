
import api from '../../Api/api';
import { ApiSupperSettings } from '../../Api/config';

const getTransactionsOrders = async () => {
    try {
        const result = await api.get(ApiSupperSettings.api_TransactionsOrders);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
const addTransactionsOrders = async (data) => {
    try {
        const result = await api.post(ApiSupperSettings.api_TransactionsOrders, data);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
const updateTransactionsOrders = async (data) => {
    try {
        const result = await api.put(ApiSupperSettings.api_TransactionsOrders+data.id, data);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};



const TransactionsOrdersFun = {
    getTransactionsOrders,
    addTransactionsOrders,
    updateTransactionsOrders,
};

export default TransactionsOrdersFun;


