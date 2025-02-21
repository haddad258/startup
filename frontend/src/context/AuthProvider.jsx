import React, { createContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import LoginService from '../services/auth';  // Importer LoginService
import { login as loginAction, logout as logoutAction, init as initAction } from '../store/auth/actions';
import axios from 'axios';

const initialState = {
  user: null,
  isInitialised: false,
  isAuthenticated: false
};

const setSession = (accessToken, accessUser) => {
  return new Promise((resolve) => {
    if (accessToken) {
      localStorage.setItem('@access_token', accessToken);
      localStorage.setItem('@access_user', accessUser);
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      localStorage.removeItem('@access_token');
      localStorage.removeItem('@access_user');
      delete axios.defaults.headers.common.Authorization;
    }
    resolve();
  });
};

const AuthContext = createContext({
  ...initialState,
  method: 'JWT',
  login: () => { },
  logout: () => { },
  checklogin: () => { },
});

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [state, setState] = useReducer((state, action) => ({ ...state, ...action }), initialState);

  const login = async (email, password) => {
    console.log("🔹 AuthProvider -> login() appelé avec :", email, password);
    const response = await LoginService.login({ email, password });
    console.log("🔹 Réponse API login:", response);
    if (response) {
      await setSession(response.token, JSON.stringify(response.user));
      dispatch(loginAction(response.user));
      console.log('Token dans localStorage:', localStorage.getItem('@access_token'));
      console.log('User dans localStorage:', localStorage.getItem('@access_user'));
      // 🔥 Forcer la mise à jour du state immédiatement
      dispatch(initAction(true, response.user));

      console.log("✅ Login réussi, token stocké, isAuthenticated mis à jour.");
      return true;
    }
    console.log("❌ Login échoué, pas de token reçu.");
    return false;
  };

  const logout = () => {
    LoginService.logout();
    dispatch(logoutAction());
  };

  const checklogin = () => {
    return LoginService.checkAuth();
  };

  useEffect(() => {
    const user = localStorage.getItem('@access_user');
    const token = localStorage.getItem('@access_token');
    if (token && user) {
      dispatch(initAction(true, JSON.parse(user)));
    } else {
      dispatch(initAction(false, null));
    }
  }, [dispatch]);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'JWT',
        login,
        logout,
        checklogin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
};

export { AuthContext };
