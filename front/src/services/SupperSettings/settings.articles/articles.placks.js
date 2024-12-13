import api from '../../Api/api';
import createNotification from 'src/components/Handle.Error/notifications';
import { ApiSupperSettings } from '../../Api/config';

const getArticlesPlack = async () => {
    try {
        const result = await api.get(ApiSupperSettings.api_ArticlesPlack);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const addArticlesPlack = async (status) => {
    try {
        const result = await api.post(ApiSupperSettings.api_ArticlesPlack, status);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const updateArticlesPlack = async (data) => {
    try {
        const result = await api.put(ApiSupperSettings.api_ArticlesPlack+data.id, data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};



const ArticlesPlackFun = {
    getArticlesPlack,
    addArticlesPlack,
    updateArticlesPlack,
};

export default ArticlesPlackFun;


