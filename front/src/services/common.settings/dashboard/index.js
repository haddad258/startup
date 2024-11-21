import api from '../../Api/api';
import { ApisCommon } from '../../Api/configCommon';



const getDataCountingsTables = async (filerId,filerAttr)  => {
    try {
        const result = await api.get(ApisCommon.api_get_Kpi_countings_tables,{
            filerAttr:filerAttr,
            filerId:filerId

        });
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
    
};


const dashboardCountings = {
    getDataCountingsTables,
};

export default dashboardCountings;