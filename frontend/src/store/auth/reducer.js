import * as actionTypes from './actions';

const initialState = {
  user: JSON.parse(localStorage.getItem('@access_user')) || null,  // 🔥 Récupérer l'utilisateur du localStorage
  isAuthenticated: !!localStorage.getItem('@access_token'), // 🔥 Vérifier si le token existe
  token: localStorage.getItem('@access_token') || null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT: {
      const { isAuthenticated, user } = action.payload;
      return { ...state, isAuthenticated, isInitialised: true, user };
    }
    case actionTypes.LOGIN: {
      const { user } = action.payload;
      return { ...state, isAuthenticated: true, user };
    }
    case actionTypes.LOGOUT: {
      return { ...state, isAuthenticated: false, user: null };
    }
    case actionTypes.REGISTER: {
      const { user } = action.payload;
      return { ...state, isAuthenticated: true, user };
    }
    default:
      return state;
  }
};

export default authReducer;