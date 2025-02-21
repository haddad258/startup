// Function to set the token
export const setToken = (token) => {
    localStorage.setItem("@access_token", token);
};

// Function to retrieve the token
export const getToken = () => {
    return localStorage.getItem("@access_token");
};

// Function to delete the token
export const removeToken = () => {
    localStorage.removeItem("@access_token");
};