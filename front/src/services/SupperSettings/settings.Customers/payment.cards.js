
import api from '../../Api/api';
import createNotification from 'src/components/Handle.Error/notifications';
import { ApiSupperSettings } from '../../Api/config';

const getPaymentCards = async () => {
    try {
        const result = await api.get(ApiSupperSettings.api_PaymentCards);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const addPaymentCards = async (status) => {
    try {
        const result = await api.post(ApiSupperSettings.api_PaymentCards, status);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const updatePaymentCards = async (data) => {
    try {
        const result = await api.put(ApiSupperSettings.api_PaymentCards+data.id, data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};



const PaymentCardsFun = {
    getPaymentCards,
    addPaymentCards,
    updatePaymentCards,
};

export default PaymentCardsFun;


