
import api from '../../Api/api';
import createNotification from 'src/components/Handle.Error/notifications';
import { ApiSupperSettings } from '../../Api/config';

const getConfigApps = async (uri) => {
    try {
        const result = await api.get(ApiSupperSettings.api_ConfigApps+uri);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const addConfigApps = async (data,uri) => {
    try {
        const result = await api.post(ApiSupperSettings.api_ConfigApps+uri, data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const updateConfigApps = async (data,uri) => {
    try {
        const result = await api.put(ApiSupperSettings.api_ConfigApps+uri, data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};



const ConfigAppsFun = {
    getConfigApps,
    addConfigApps,
    updateConfigApps,
};

export default ConfigAppsFun;


