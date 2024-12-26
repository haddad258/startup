const API_URL = "http://192.168.1.17:8009";
const API_URLPublic = API_URL + "/public/";

const Apis = {
  UserLoginAPI: `${API_URL}/public/api/customers/config/`,
  Api_RegisterCustomer: `${API_URL}/public/api/customers/config/`,
  api_commonDoctypes: `${API_URL}/api/mobile/config/apps/`,
  ////////////////////////////////////////////

  API_Articles: `${API_URL}/api/mobile/configs/articles`,
  API_ArticlesFiltred: `${API_URL}/api/mobile/entity/filtered`,
  API_Articles_recommend: `${API_URL}/api/mobile/discounts/articles/recommend`,
  API_Articles_Discount: `${API_URL}/api/mobile/discounts/articles/disounts`,
  
  ////////////////////////////////////////////


  API_Advertising: `${API_URL}/public/api/advertising/`,
  API_ArticlesFilter: `${API_URL}/public/api/data/apps/list/filterby/`,
  API_Services: `${API_URL}/public/api/data/apps/list/services`,
  API_Discount: `${API_URL}/public/api/discounts/discounts/list/active`,
  

  API_Publications: `${API_URL}/public/publications/details/blog`,
  ////////////////////////////////////////////
  Api_CustomerOrders: `${API_URL}/public/api/orders/`,
  Api_CustomerOrdersDetails: `${API_URL}/public/api/details/orders/`,

  




};
export { API_URL, Apis, API_URLPublic };
