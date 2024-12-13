
import api from '../../Api/api';
import createNotification from 'src/components/Handle.Error/notifications';
import { ApiProviderSettings } from '../../Api/config';

const getProviderAdvertisements = async () => {
    try {
        const result = await api.get(ApiProviderSettings.api_ProviderAdvertisements);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const addProviderAdvertisements = async (status) => {
    try {
        const result = await api.post(ApiProviderSettings.api_ProviderAdvertisements, status);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const updateProviderAdvertisements = async (data) => {
    try {
        const result = await api.put(ApiProviderSettings.api_ProviderAdvertisements+data.id, data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};



const ProviderAdvertisementsFun = {
    getProviderAdvertisements,
    addProviderAdvertisements,
    updateProviderAdvertisements,
};

export default ProviderAdvertisementsFun;


