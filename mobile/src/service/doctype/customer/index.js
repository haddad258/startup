
import api from '../../Api/api';
import { Apis } from '../../Api/config';
const getCustomers = async () => {
    try {
        const result = await api.get(Apis.Api_RegisterCustomer);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
const addCustomers = async (status) => {
    try {
        console.log(Apis.Api_RegisterCustomer)
        const result = await api.post(Apis.Api_RegisterCustomer, status);
        console.log(result)
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
const updateCustomers = async (data) => {
    try {
        const result = await api.put(Apis.Api_RegisterCustomer+data.id, data);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};



const CustomersFun = {
    getCustomers,
    addCustomers,
    updateCustomers,
};

export default CustomersFun;


