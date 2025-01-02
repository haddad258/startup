import api from '../../Api/api';
import { Apis } from '../../Api/config';
const getcustomers = async (filter) => {
    try {
        console.log("Apis.api_customers",Apis.api_customers)
        const result = await api.get(Apis.api_customers+filter );
        return result.data.error ? null : result.data;
    } catch (error) {
        
        return null;
    }
};
const addcustomers = async (data) => {
    try {
        const result = await api.post(Apis.api_customers, data);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error.response.data);
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


