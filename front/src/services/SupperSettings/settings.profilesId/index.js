
  import api from '../../Api/api';
  import { ApiSupperSettings } from '../../Api/config';
  
  const getProfilesIds = async () => {
      try {
          const result = await api.get(ApiSupperSettings.api_ProfilesIds);
          return result.data.error ? null : result.data;
      } catch (error) {
          console.error(error);
          return null;
      }
  };
  const addProfilesIds = async (status) => {
      try {
          const result = await api.post(ApiSupperSettings.api_ProfilesIds, status);
          return result.data.error ? null : result.data;
      } catch (error) {
          console.error(error);
          return null;
      }
  };
  const updateProfilesIds = async (data) => {
      try {
          const result = await api.put(ApiSupperSettings.api_ProfilesIds+data.id, data);
          return result.data.error ? null : result.data;
      } catch (error) {
          console.error(error);
          return null;
      }
  };
  
  const getProfilesIdCryptes = async (id) => {
    try {
        const result = await api.get(ApiSupperSettings.api_ProfilesIdCryptes+id);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
const addProfilesIdCryptes = async (status) => {
    try {
        const result = await api.post(ApiSupperSettings.api_ProfilesIdCryptes, status);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
const updateProfilesIdCryptes = async (data) => {
    try {
        const result = await api.put(ApiSupperSettings.api_ProfilesIdCryptes+data.id, data);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};








  
  const ProfilesIdsFun = {
      getProfilesIds,
      addProfilesIds,
      updateProfilesIds,
      getProfilesIdCryptes,
      addProfilesIdCryptes,
      updateProfilesIdCryptes,
  };
  
  export default ProfilesIdsFun;
  

  