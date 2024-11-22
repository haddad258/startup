import api from '../../Api/api';
import { Apis } from '../../Api/config';
const getcustomers = async (filter) => {
    try {
        const result = await api.get(Apis.api_customers + filter);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.log(error.response.data);
        return null;
    }
};
const addcustomers = async (status) => {
    try {
        const result = await api.post(Apis.api_customers, status);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
const updatecustomers = async (data) => {
    try {
        const result = await api.put(Apis.api_customers + data.id, data);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};



const customersFun = {
    getcustomers,
    addcustomers,
    updatecustomers,
};

export default customersFun;


