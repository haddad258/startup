
import api from '../../Api/api';
import createNotification from 'src/components/Handle.Error/notifications';
import { ApiSupperSettings } from '../../Api/config';

const getOrders = async () => {
    try {
        const result = await api.get(ApiSupperSettings.api_Orders);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const addOrders = async (status) => {
    try {
        const result = await api.post(ApiSupperSettings.api_Orders, status);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const updateOrders = async (data,id) => {
    try {
        const result = await api.put(ApiSupperSettings.api_Orders + id, data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};

const getOrdersById = async (id) => {
    try {
        const result = await api.get(ApiSupperSettings.api_Orders+id);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const getOrdersByIdTransactions = async (id) => {
    try {
        const result = await api.get(ApiSupperSettings.api_OrdersByIdTransactions+id);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const OrdersFun = {
    getOrders,
    addOrders,
    updateOrders,
    getOrdersById,
    getOrdersByIdTransactions
};

export default OrdersFun;


