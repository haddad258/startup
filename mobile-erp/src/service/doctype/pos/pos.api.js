import api from '../../Api/api';
import { Apis } from '../../Api/config';
const getpos = async (filter) => {
    try {
        console.log((Apis.api_pos +filter))
        const result = await api.get(Apis.api_pos +filter);
        console.log(result)
        return result.data.error ? null : result.data;
    } catch (error) {
        
        return null;
    }
};
const addpos = async (status) => {
    try {
        const result = await api.post(Apis.api_pos,  status);
        console.log(result.data)
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error.response?.data?._server_messages);
        console.error('Error creating item:', error.response?.data || error.message);
        return null;
    }
};
const updatepos = async (data) => {
    try {
        const result = await api.put(Apis.api_pos + data.id, data);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};



const posFun = {
    getpos,
    addpos,
    updatepos,
};

export default posFun;


