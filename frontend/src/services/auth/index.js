import { useNavigate } from "react-router-dom";
import api from "../Api/api";
import { Apis } from "../Api/config";
import { setToken, removeToken, getToken } from "./jwt";
import { toast } from "react-toastify";  // Importation de toast

// Fonction de connexion
const login = async (data) => {
    try {
        let response = await api.post(Apis.UserLoginAPI, data);
        // console.log("Réponse API Login:", response);
        if (response.error) {
            toast.error(response.error);  // Remplace NotificationManager.error
            return null;
        }
        setToken(response.data.token);
        return response.data;
    } catch (error) {
        toast.error("Erreur de connexion !");  // Remplace NotificationManager.error
        return null;
    }
};

// Fonction de déconnexion
const logout = () => {
    removeToken();
    const navigate = useNavigate();
    navigate('/login');
};

// Fonction de vérification du token
const checkAuth = () => {
    const token = getToken(); // Récupérer le token
    console.log("Token récupéré:", token);
    if (!token) return false;
    // Ici tu peux ajouter des vérifications pour valider si le token est valide
    return true;
};

var LoginService = {
    login,
    logout,
    checkAuth
};

export default LoginService;