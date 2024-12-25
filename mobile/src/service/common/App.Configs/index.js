import api from '../../Api/api';
import { Apis } from '../../Api/config';
const getcommonDoctypes = async (filter) => {
    try {
        const result = await api.get(Apis.api_commonDoctypes +filter);
        return result.data.error ? null : result.data;
    } catch (error) {
        
        return null;
    }
};



const commonDoctypesFun = {
    getcommonDoctypes,
};

export default commonDoctypesFun;


