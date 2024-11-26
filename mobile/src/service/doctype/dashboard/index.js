import axios from 'axios';
import api from '../../Api/api';
import { Apis } from '../../Api/config';
const getDashboard = async () => {
    try {
        console.log(Apis.api_Dashboard )
        const result = await api.get(Apis.api_Dashboard);
        console.log(result)
        return result.data.error ? null : result.data;
    } catch (error) {
        
        return null;
    }
};




const suppliersFun = {
    getDashboard
};

export default suppliersFun;


