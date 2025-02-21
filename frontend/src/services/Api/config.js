const API_URL = import.meta.env.VITE_API_URL;

export const Apis = {
    UserLoginAPI: `${API_URL}/api/root/login`,
    UserLoginEmployeAPI: `${API_URL}/api/root/employe/login`,
    api_updateCredentials: `${API_URL}/api/root/update/credentials`,
    api_users: `${API_URL}/api/users`,
    api_updateUser: `${API_URL}/api/users/update/`,
    api_roles: `${API_URL}/api/roles`,
};