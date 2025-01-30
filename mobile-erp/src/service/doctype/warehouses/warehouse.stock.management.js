import api from '../../Api/api';
import { API_Stock_Management } from '../../Api/config';

const getarticlesOnStock = async (filter) => {
    try {
        console.log("Apis",API_Stock_Management.fortest +filter)
        const result = await api.get(API_Stock_Management.fortest +filter);
        console.log("result")
        return result.data.error ? null : result.data;
    } catch (error) {
        
        return null;
    }
};


const stockEntryFun = {
    getarticlesOnStock
};

export default stockEntryFun;