
  import api from '../../Api/api';
import createNotification from 'src/components/Handle.Error/notifications';
  import { ApiSupperSettings } from '../../Api/config';
  
  const getPlacks = async () => {
      try {
          const result = await api.get(ApiSupperSettings.api_Placks);
          return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
      } catch (error) {
          createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
          return null;
      }
  };
  const addPlacks = async (status) => {
      try {
          const result = await api.post(ApiSupperSettings.api_Placks, status);
          return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
      } catch (error) {
          createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
          return null;
      }
  };
  const updatePlacks = async (data) => {
      try {
          const result = await api.put(ApiSupperSettings.api_Placks+data.id, data);
          return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
      } catch (error) {
          createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
          return null;
      }
  };
  
  const updatePlacksCridentials = async (data,id) => {
    try {
        const result = await api.put(ApiSupperSettings.api_Placks+"update/password/"+id, data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};


  
  const PlacksFun = {
      getPlacks,
      addPlacks,
      updatePlacks,
      updatePlacksCridentials
  };
  
  export default PlacksFun;
  

  