import { settingsConfigApps } from 'src/services/SupperSettings';

/**
 * Fetch data from the specified endpoint.
 *
 * @param {string} endpoint - The endpoint to fetch data from.
 * @returns {Promise<Array>} - A promise that resolves to the fetched data array.
 */
const fetchData = async (endpoint) => {
    try {
        const response = await settingsConfigApps.getConfigApps(endpoint);
        return response ? response.data : [];
    } catch (error) {
        console.error('Error fetching admin list:', error);
        return [];
    }
};

export default fetchData;
