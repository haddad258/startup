
  import api from '../../Api/api';
import createNotification from 'src/components/Handle.Error/notifications';
  import { ApiSupperSettings } from '../../Api/config';
  
  const getCustomers = async () => {
      try {
          const result = await api.get(ApiSupperSettings.api_Customers);
          return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
      } catch (error) {
          createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
          return null;
      }
  };
  const addCustomers = async (status) => {
      try {
          const result = await api.post(ApiSupperSettings.api_Customers, status);
          return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
      } catch (error) {
          createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
          return null;
      }
  };
  const updateCustomers = async (data) => {
      try {
          const result = await api.put(ApiSupperSettings.api_Customers+data.id, data);
          return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
      } catch (error) {
          createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
          return null;
      }
  };
  
  const updateCustomersCridentials = async (data,id) => {
    try {
        const result = await api.put(ApiSupperSettings.api_Customers+"update/password/"+id, data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const getCustomersImages = async (id) => {
    try {
        const result = await api.get(ApiSupperSettings.api_CustomersImages+id);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};

const getPaymentCardsCustomers = async (id) => {
    try {
        const result = await api.get(ApiSupperSettings.api_PaymentCardsCustomers+id);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
const getOrdersByCustomers = async (id) => {
    try {
        const result = await api.get(ApiSupperSettings.api_OrdersCustomers+id);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
  const CustomersFun = {
      getCustomers,
      addCustomers,
      updateCustomers,
      updateCustomersCridentials,
      getCustomersImages,
      getPaymentCardsCustomers,
      getOrdersByCustomers
  };
  
  export default CustomersFun;
  

  