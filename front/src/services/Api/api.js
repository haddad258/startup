
import axios from 'axios';
import { API_URL } from './config';
import createNotification from 'src/components/Handle.Error/notifications';

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

apiClient.interceptors.request.use(
    config => {
        const token = localStorage.getItem('@accessToken');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
            config.headers['x-access-token'] = token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            // Handle unauthorized access (e.g., token expiration)
            createNotification("error", "Unauthorized access", "Token might be expired.");
            setTimeout(() => {
                // Perform cleanup actions after the timeout
                localStorage.removeItem('@accessToken');
                localStorage.removeItem('@accessUser');
                delete axios.defaults.headers.common['Authorization'];
        
                // Redirect to login page
                window.location.href = '/login';
            }, 1500);

        }
        return Promise.reject(error);
    }
);

export default apiClient;
