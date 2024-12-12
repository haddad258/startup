import axios from 'axios';
import api from '../../Api/api';
import { Apis } from '../../Api/config';
import { UserLogin } from '../../index';
const getarticles = async (filter) => {
    try {
        const result = await api.get(Apis.api_articles +filter);
        return result.data.error ? null : result.data;
    } catch (error) {
        
        return null;
    }
};
const addarticles = async (status) => {
    try {
        const result = await api.post(Apis.api_articles,  status);
        console.log(Apis.api_articles,status)
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error.response?.data?._server_messages);
        console.error('Error creating item:', error.response?.data || error.message);
        return null;
    }
};
const updatearticles = async (data) => {
    try {
        const result = await api.put(Apis.api_articles + data.id, data);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

const getarticlesBarcode = async (filter) => {
    try {
        console.log(Apis.api_articlesBarcode)
        const result = await api.post(Apis.api_articlesBarcode ,filter);
        console.log(result.data)
        return result.data.error ? null : result.data;
    } catch (error) {
        
        return null;
    }
};

const articlesFun = {
    getarticles,
    addarticles,
    updatearticles,
    getarticlesBarcode
};

export default articlesFun;


