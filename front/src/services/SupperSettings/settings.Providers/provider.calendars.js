
import api from '../../Api/api';
import createNotification from 'src/components/Handle.Error/notifications';
import { ApiSupperSettings } from '../../Api/config';

const getProviderCalendar = async () => {
    try {
        const result = await api.get(ApiSupperSettings.api_ProviderCalendar);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const addProviderCalendar = async (status) => {
    try {
        const result = await api.post(ApiSupperSettings.api_ProviderCalendar, status);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const updateProviderCalendar = async (data) => {
    try {
        const result = await api.put(ApiSupperSettings.api_ProviderCalendar+data.id, data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};



const ProviderCalendarFun = {
    getProviderCalendar,
    addProviderCalendar,
    updateProviderCalendar,
};

export default ProviderCalendarFun;


