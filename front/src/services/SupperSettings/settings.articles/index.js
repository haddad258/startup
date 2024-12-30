
  import api from '../../Api/api';
import createNotification from 'src/components/Handle.Error/notifications';
  import { ApiSupperSettings } from '../../Api/config';
  
  const getArticles = async () => {
      try {
          const result = await api.get(ApiSupperSettings.api_Articles);
          return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
      } catch (error) {
          createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
          return null;
      }
  };
  const getFilterArticles = async (data) => {
    console.log(data)
    try {
        const result = await api.post(ApiSupperSettings.api_ArticlesFilter,data);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};
  const addArticles = async (status) => {
      try {
          const result = await api.post(ApiSupperSettings.api_Articles, status);
          return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
      } catch (error) {
          createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
          return null;
      }
  };
  const updateArticles = async (data,id) => {
      try {
          const result = await api.put(ApiSupperSettings.api_Articles+id, data);
          return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
      } catch (error) {
          createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
          return null;
      }
  };
  
  const getArticlesImages = async (id) => {
    try {
        const result = await api.get(ApiSupperSettings.api_ArticlesImages+id);
        return result.data.error ?createNotification("error",JSON.stringify(result?.data?.error),JSON.stringify(result?.data?.error)) : result.data;
    } catch (error) {
        createNotification("error",JSON.stringify(error?.response?.data),JSON.stringify(error?.response?.data))
        return null;
    }
};


  
  const ArticlesFun = {
      getArticles,
      addArticles,
      updateArticles,
      getArticlesImages,
      getFilterArticles
      
  };
  
  export default ArticlesFun;
  

  