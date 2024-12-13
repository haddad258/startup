import api from '../../Api/api';
import createNotification from 'src/components/Handle.Error/notifications';
import { ApiSupperSettings } from '../../Api/config';

const getArticlesDiscount = async () => {
    try {
        const result = await api.get(ApiSupperSettings.api_ArticlesDiscount);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const addArticlesDiscount = async (status) => {
    try {
        const result = await api.post(ApiSupperSettings.api_ArticlesDiscount, status);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const updateArticlesDiscount = async (data) => {
    try {
        const result = await api.put(ApiSupperSettings.api_ArticlesDiscount+data.id, data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};



const ArticlesDiscountFun = {
    getArticlesDiscount,
    addArticlesDiscount,
    updateArticlesDiscount,
};

export default ArticlesDiscountFun;


