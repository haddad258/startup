import api from '../../Api/api';
import { Apis } from '../../Api/config';
const getArticles = async () => {
    try {
        const result = await api.get(Apis.API_Articles );
        return result.data.error ? null : result.data;
    } catch (error) {
        
        return null;
    }
};
const getArticlesRecommended = async () => {
    try {
        const result = await api.get(Apis.API_Articles_recommend );
        return result.data.error ? null : result.data;
    } catch (error) {
        
        return null;
    }
};
const getArticlesDiscounted = async () => {
    try {
        const result = await api.get(Apis.API_Articles_Discount );
        return result.data.error ? null : result.data;
    } catch (error) {
        
        return null;
    }
};

const ArticlesFun = {
    getArticles,
    getArticlesRecommended,
    getArticlesDiscounted
};

export default ArticlesFun;


