import api from '../../Api/api';
import createNotification from 'src/components/Handle.Error/notifications';
import { ApiSupperSettings } from '../../Api/config';

const getUsersAdmin = async () => {
    try {
        const result = await api.get(ApiSupperSettings.api_UsersAdmin);
        return result.data.error ? console.log("result.data.error") : result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
const addUsersAdmin = async (status) => {
    try {
        const result = await api.post(ApiSupperSettings.api_UsersAdmin, status);
        return result.data.error ? createNotification("error","test","test") : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        console.log(error.response.data);
        return null;
    }
};
const updateUsersAdmin = async (data) => {
    try {
        const result = await api.put(`${ApiSupperSettings.api_UsersAdmin_update}${data.id}`, data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const updateUsersAdminPassword = async (data,id) => {
    try {
        const result = await api.put(`${ApiSupperSettings.api_UsersAdmin_update +"update/password/" }${id}`, data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};


const AdminFun = {
    getUsersAdmin,
    addUsersAdmin,
    updateUsersAdmin,
    updateUsersAdminPassword
};

export default AdminFun;
