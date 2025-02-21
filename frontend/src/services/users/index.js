import api from "../Api/api";
import { Apis } from "../Api/config";
import { NotificationManager } from "react-notifications";

// Function to get all users
export const getUsers = async () => {
    try {
        const response = await api.get(Apis.api_users);
        return response.data;  // Return the response data
    } catch (error) {
        NotificationManager.error("Error fetching users!");  // Show error notification
        throw error;  // Rethrow error to be handled by the calling component
    }
};

// Function to get a user by ID
export const getUserById = async (id) => {
    try {
        const response = await api.get(`${Apis.api_users}/${id}`);
        return response.data;
    } catch (error) {
        NotificationManager.error(`Error fetching user with ID: ${id}`);  // Show error notification
        throw error;
    }
};

// Function to update a user
export const updateUser = async (id, data) => {
    try {
        const response = await api.put(`${Apis.api_updateUser}${id}`, data);
        return response.data;
    } catch (error) {
        NotificationManager.error(`Error updating user with ID: ${id}`);  // Show error notification
        throw error;
    }
};