import api from '../../Api/api';
import { Apis } from '../../Api/config';
const getwarehouses = async (filter) => {
    try {
        const result = await api.get(Apis.api_warehouses + filter);
        return result.data.error ? null : result.data;
    } catch (error) {
        return null;
    }
};
const addwarehouses = async (status) => {
    try {
        const result = await api.post(Apis.api_warehouses, status);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
const updatewarehouses = async (data) => {
    try {
        const result = await api.put(Apis.api_warehouses + data.id, data);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};



const warehousesFun = {
    getwarehouses,
    addwarehouses,
    updatewarehouses,
};

export default warehousesFun;


