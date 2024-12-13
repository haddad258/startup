import api from '../../Api/api';
import createNotification from 'src/components/Handle.Error/notifications';
import { ApiSupperSettings } from '../../Api/config';

const getArticlesProvider = async () => {
    try {
        const result = await api.get(ApiSupperSettings.api_ArticlesProvider);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const addArticlesProvider = async (status) => {
    try {
        const result = await api.post(ApiSupperSettings.api_ArticlesProvider, status);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const updateArticlesProvider = async (data) => {
    try {
        const result = await api.put(ApiSupperSettings.api_ArticlesProvider+data.id, data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};



const ArticlesProviderFun = {
    getArticlesProvider,
    addArticlesProvider,
    updateArticlesProvider,
};

export default ArticlesProviderFun;


