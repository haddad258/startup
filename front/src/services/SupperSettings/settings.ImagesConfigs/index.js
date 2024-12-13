
import api from '../../Api/api.content';
import createNotification from 'src/components/Handle.Error/notifications';
import { ApiSupperSettings } from '../../Api/config';

const getImagesConfigs = async (entity) => {
    try {
        const result = await api.get(ApiSupperSettings.api_ImagesConfigs+entity);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const addImagesConfigs = async (data) => {
    try {
        const result = await api.post(ApiSupperSettings.api_ImagesConfigs, data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const updateImagesConfigs = async (data,entity) => {
    try {
        const result = await api.put(ApiSupperSettings.api_ImagesConfigs+entity+data.id, data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const addImagesConfigsMultiples = async (data) => {
    try {
        const result = await api.post(ApiSupperSettings.api_ImagesConfigsMutiples, data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};


const ImagesConfigsFun = {
    getImagesConfigs,
    addImagesConfigs,
    updateImagesConfigs,
    addImagesConfigsMultiples
};

export default ImagesConfigsFun;


