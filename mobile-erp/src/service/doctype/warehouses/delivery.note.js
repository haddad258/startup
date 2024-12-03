import api from '../../Api/api';
import { Apis } from '../../Api/config';
const getdeliverynotes = async (filter) => {
    try {
        const result = await api.get(Apis.api_deliverynotes + filter);
        return result.data.error ? null : result.data;
    } catch (error) {
        return null;
    }
};
const adddeliverynotes = async (status) => {
    try {
        const result = await api.post(Apis.api_deliverynotes, status);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
const updatedeliverynotes = async (data) => {
    try {
        const result = await api.put(Apis.api_deliverynotes + data.id, data);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};



const deliverynotesFun = {
    getdeliverynotes,
    adddeliverynotes,
    updatedeliverynotes,
};

export default deliverynotesFun;


