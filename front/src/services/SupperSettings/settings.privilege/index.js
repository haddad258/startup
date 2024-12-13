import api from '../../Api/api';
import createNotification from 'src/components/Handle.Error/notifications';
import { ApiSupperSettings } from '../../Api/config';

const getPrivilege = async () => {
    try {
        const result = await api.get(ApiSupperSettings.api_Privilege);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const addPrivilege = async (status) => {
    try {
        const result = await api.post(ApiSupperSettings.api_Privilege, status);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        console.log(error)
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const updatePrivilege = async (data) => {
    try {
        const result = await api.put(`${ApiSupperSettings.api_Privilege_update}${data.id}`, data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};



const AdminFun = {
    getPrivilege,
    addPrivilege,
    updatePrivilege,
};

export default AdminFun;
