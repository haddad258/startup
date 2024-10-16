const API_URL = process.env.REACT_APP_API_URL;
const API_URLPublic = API_URL+"/public/";
const Apis = {
  UserLoginAPI: `${API_URL}/api/root/login`,
  UserLoginEmployeAPI: `${API_URL}/api/root/employe/login`,
  api_updatecridentials: `${API_URL}/api/root/update/credentials`,

};
const ApiSupperSettings = {

  api_UsersAdmin: `${API_URL}/api/users/admin`,
  api_UsersAdmin_update: `${API_URL}/api/users/admin/`,
  api_Privilege: `${API_URL}/api/privileges/list`,
  api_Privilege_update: `${API_URL}/api/privileges/list/`,
  api_PaymentModes: `${API_URL}/api/config/apps/settings/start/`,
  ////////////////////////////////////////////////////////////////////////////////////////
  api_settingsApps: `${API_URL}/api/config/module/settings/app/`,
  api_settingsArticles: `${API_URL}/api/articles/config/module/settings/app/`,
  api_settingsServices: `${API_URL}/api/services/config/module/settings/app/`,
  
  API_ArticlesFilter: `${API_URL}/api/articles/config/module/settings/app/filterby/`,
  
  
  api_Customers: `${API_URL}/api/customers/config/settings/app/`,
  api_Orders: `${API_URL}/api/orders/module/pos/index/`,

  

  api_ImagesConfigs: `${API_URL}/upload/images/upload`,
  
  

};

export { API_URL, Apis, ApiSupperSettings ,API_URLPublic };