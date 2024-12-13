import api from '../../Api/api';
import createNotification from 'src/components/Handle.Error/notifications';
import { ApisCommon } from '../../Api/configCommon';


const updateTableStatus = async (data) => {
    try {
        const result = await api.put(ApisCommon.api_update_status_row,data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const getFilterData = async (filerId,entity,filerAttr)  => {
    try {
        const result = await api.post(ApisCommon.api_get_filer_row,{
            entity:entity,
            filerAttr:filerAttr,
            filerId:filerId
        });
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};

const CommonEntity = {
    updateTableStatus,
    getFilterData
};

export default CommonEntity;
