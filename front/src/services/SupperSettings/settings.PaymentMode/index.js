
  import api from '../../Api/api';
import createNotification from 'src/components/Handle.Error/notifications';
  import { ApiSupperSettings } from '../../Api/config';
  
  const getPaymentModes = async () => {
      try {
          const result = await api.get(ApiSupperSettings.api_PaymentModes);
          return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
      } catch (error) {
          createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
          return null;
      }
  };
  const addPaymentModes = async (status) => {
      try {
          const result = await api.post(ApiSupperSettings.api_PaymentModes, status);
          return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
      } catch (error) {
          createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
          return null;
      }
  };
  const updatePaymentModes = async (data) => {
      try {
          const result = await api.put(ApiSupperSettings.api_PaymentModes+data.id, data);
          return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
      } catch (error) {
          createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
          return null;
      }
  };
  
  const updatePaymentModesCridentials = async (data,id) => {
    try {
        const result = await api.put(ApiSupperSettings.api_PaymentModes+"update/password/"+id, data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};


  
  const PaymentModesFun = {
      getPaymentModes,
      addPaymentModes,
      updatePaymentModes,
      updatePaymentModesCridentials
  };
  
  export default PaymentModesFun;
  

  