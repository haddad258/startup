import api from '../../Api/api';
import createNotification from 'src/components/Handle.Error/notifications';
import { ApisCommon } from '../../Api/configCommon';



const getDataCountingsTables = async ()  => {
    try {
        const result = await api.get(ApisCommon.api_get_Kpi_countings_tables);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
    
};


const dashboardCountings = {
    getDataCountingsTables,
};

export default dashboardCountings;