
import api from '../../Api/api';
import createNotification from 'src/components/Handle.Error/notifications';
import { ApiSupperSettings } from '../../Api/config';

const getOrdersDetails = async () => {
    try {
        const result = await api.get(ApiSupperSettings.api_OrdersDetails);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const addOrdersDetails = async (status) => {
    try {
        const result = await api.post(ApiSupperSettings.api_OrdersDetails, status);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const updateOrdersDetails = async (data) => {
    try {
        const result = await api.put(ApiSupperSettings.api_OrdersDetails+data.id, data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};



const OrdersDetailsFun = {
    getOrdersDetails,
    addOrdersDetails,
    updateOrdersDetails,
};

export default OrdersDetailsFun;


