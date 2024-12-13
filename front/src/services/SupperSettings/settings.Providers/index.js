
  import api from '../../Api/api';
import createNotification from 'src/components/Handle.Error/notifications';
  import { ApiSupperSettings } from '../../Api/config';
  
  const getProviders = async () => {
      try {
          const result = await api.get(ApiSupperSettings.api_Providers);
          return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
      } catch (error) {
          createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
          return null;
      }
  };
  const addProviders = async (status) => {
      try {
          const result = await api.post(ApiSupperSettings.api_Providers, status);
          return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
      } catch (error) {
          createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
          return null;
      }
  };
  const updateProviders = async (data) => {
      try {
          const result = await api.put(ApiSupperSettings.api_Providers+data.id, data);
          return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
      } catch (error) {
          createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
          return null;
      }
  };
  
  const updateProvidersCridentials = async (data,id) => {
    try {
        const result = await api.put(ApiSupperSettings.api_Providers+"update/password/"+id, data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};


  
  const ProvidersFun = {
      getProviders,
      addProviders,
      updateProviders,
      updateProvidersCridentials
  };
  
  export default ProvidersFun;
  

  