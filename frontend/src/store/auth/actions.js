// Action Types
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const INIT = 'INIT';
export const REGISTER = 'REGISTER';

// Action for user login
export const login = (user) => ({
  type: LOGIN,
  payload: { user }
});

// Action for user logout
export const logout = () => ({
  type: LOGOUT,
});

// Action to initialize the user and authentication state
export const init = (isAuthenticated, user) => ({
  type: INIT,
  payload: { isAuthenticated, user }
});

// Action for user registration
export const register = (user) => ({
  type: REGISTER,
  payload: { user }
});