import api from '../../Api/api';
import { Apis } from '../../Api/config';
const getorders = async (filter) => {
    try {
        console.log((Apis.api_orders + filter))
        const result = await api.get(Apis.api_orders + filter);
        return result.data.error ? null : result.data;
    } catch (error) {

        return null;
    }
};
const addorders = async (status) => {
    try {
        console.log(Apis.api_orders)
        const result = await api.post(Apis.api_orders, status);
        console.log("result", result)
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error.response?.data?._server_messages);
        console.error('Error creating item:', error.response?.data || error.message);
        return null;
    }
};
const updateorders = async (uri, data) => {
    try {
        console.log((Apis.api_orders + uri))
        console.log(data)
        const result = await api.put(Apis.api_orders + uri, {
            "notes": "Updated delivery date as per client's request",
             "status": "Cancelled",
            "items": [
                {
                    "item_code": "art0002",
                    "qty": 104,
                    "rate": 180,
                },
               
            ]
        });
        console.log(result.data)
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error.response.data);
        console.error(error);
        return null;
    }
};



const ordersFun = {
    getorders,
    addorders,
    updateorders,
};

export default ordersFun;


