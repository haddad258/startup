import api from '../../Api/api';
import { Apis } from '../../Api/config';
const getstockEntry = async (filter) => {
    try {
        const result = await api.get(Apis.api_stockEntry + filter);
        return result.data.error ? null : result.data;
    } catch (error) {
        return null;
    }
};
const addstockEntry = async (status) => {
    try {
        const result = await api.post(Apis.api_stockEntry, status);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
const updatestockEntry = async (data) => {
    try {
        const result = await api.put(Apis.api_stockEntry + data.id, data);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};



const stockEntryFun = {
    getstockEntry,
    addstockEntry,
    updatestockEntry,
};

export default stockEntryFun;


