
import api from '../../Api/api';
import createNotification from 'src/components/Handle.Error/notifications';
import { ApiSupperSettings } from '../../Api/config';

const getSubscription = async () => {
    try {
        const result = await api.get(ApiSupperSettings.api_Subscription);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const addSubscription = async (status) => {
    try {
        const result = await api.post(ApiSupperSettings.api_Subscription, status);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const updateSubscription = async (data) => {
    try {
        const result = await api.put(ApiSupperSettings.api_Subscription+data.id, data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};



const SubscriptionFun = {
    getSubscription,
    addSubscription,
    updateSubscription,
};

export default SubscriptionFun;


