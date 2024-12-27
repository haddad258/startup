const API_URL = "http://192.168.1.28:8010";
const API_URLPublic = API_URL + "/public/";

const Apis = {
  UserLoginAPI: `${API_URL}/public/api/customers/config/`,
  Api_RegisterCustomer: `${API_URL}/public/api/customers/config/`,


  API_Advertising: `${API_URL}/public/api/advertising/`,
  API_Articles: `${API_URL}/public/api/data/apps/list/articles`,
  API_ArticlesFilter: `${API_URL}/public/api/data/apps/list/filterby/`,
  API_Services: `${API_URL}/public/api/data/apps/list/services`,
  API_Discount: `${API_URL}/public/api/discounts/discounts/list/active`,
  

  API_DataApps: `${API_URL}/public/api/data/apps/config/`,
  API_Publications: `${API_URL}/public/publications/details/blog`,
  ////////////////////////////////////////////
  Api_CustomerOrders: `${API_URL}/public/api/orders/`,
  Api_CustomerOrdersDetails: `${API_URL}/public/api/details/orders/`,

  




};
export { API_URL, Apis, API_URLPublic };
