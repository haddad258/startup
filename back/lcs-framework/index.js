
  import api from '../../Api/api';
  import { ApiConfigJob } from '../../Api/config.job';
  
  const getOrderCustomer = async () => {
      try {
          const result = await api.get(ApiConfigJob.api_OrderCustomer);
          return result.data.error ? null : result.data;
      } catch (error) {
          console.error(error);
          return null;
      }
  };
  const addOrderCustomer = async (status) => {
      try {
          const result = await api.post(ApiConfigJob.api_OrderCustomer, status);
          return result.data.error ? null : result.data;
      } catch (error) {
          console.error(error);
          return null;
      }
  };
  const updateOrderCustomer = async (data) => {
      try {
          const result = await api.put(ApiConfigJob.api_OrderCustomer+data.id, data);
          return result.data.error ? null : result.data;
      } catch (error) {
          console.error(error);
          return null;
      }
  };
  
  
  
  const OrderCustomerFun = {
      getOrderCustomer,
      addOrderCustomer,
      updateOrderCustomer,
  };
  
  export default OrderCustomerFun;
  

  