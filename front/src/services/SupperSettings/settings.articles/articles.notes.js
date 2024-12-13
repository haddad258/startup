
import api from '../../Api/api';
import createNotification from 'src/components/Handle.Error/notifications';
import { ApiSupperSettings } from '../../Api/config';

const getArticlesNote = async () => {
    try {
        const result = await api.get(ApiSupperSettings.api_ArticlesNote);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const addArticlesNote = async (status) => {
    try {
        const result = await api.post(ApiSupperSettings.api_ArticlesNote, status);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const updateArticlesNote = async (data) => {
    try {
        const result = await api.put(ApiSupperSettings.api_ArticlesNote+data.id, data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};



const ArticlesNoteFun = {
    getArticlesNote,
    addArticlesNote,
    updateArticlesNote,
};

export default ArticlesNoteFun;


