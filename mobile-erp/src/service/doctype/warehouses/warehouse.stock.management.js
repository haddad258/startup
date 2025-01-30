import api from '../../Api/api';
import { API_Stock_Management } from '../../Api/config';

const getarticlesOnStock = async (filter) => {
    try {
        const result = await api.get(API_Stock_Management.api_articles_warehouse +filter);
        return result.data.error ? null : result.data;
    } catch (error) {
        
        return null;
    }
};
const getarticlesPrices = async (filter) => {
    try {
        const result = await api.get(API_Stock_Management.api_Pricearticles_warehouse +filter);
        return result.data.error ? null : result.data;
    } catch (error) {
        
        return null;
    }
};
const filterArticlesOnStock = async (filter) => {
    try {
        console.log("filterArticlesOnStock",filter )
        console.log("filterArticlesOnStock",API_Stock_Management.api_articles_filter  )
        const result = await api.post(API_Stock_Management.api_articles_filter ,filter);
        console.log("ehhhher",result)
        return result.data.error ? null : result.data;
    } catch (error) {
        
        return null;
    }
};


const stockEntryFun = {
    getarticlesOnStock,
    getarticlesPrices,
    filterArticlesOnStock,
};

export default stockEntryFun;