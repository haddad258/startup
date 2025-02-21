import React, { useContext, useEffect } from 'react';

// material-ui
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// third-party
import { useDispatch, useSelector } from 'react-redux';

// project import
import theme from 'themes';
import Routes from 'routes/index';
import NavigationScroll from './NavigationScroll';
import { Navigate, useLocation, useNavigate } from 'react-router';
// make sure `login` is imported correctly
import { init, login } from 'store/auth/actions';
import { AuthContext } from 'context/AuthProvider';
// ==============================|| APP ||============================== //

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const customization = useSelector((state) => state.customization);

  useEffect(() => {
    // 🔥 Recharger les données de l'authentification
    const storedUser = JSON.parse(localStorage.getItem('@access_user'));
    const storedToken = localStorage.getItem('@access_token');

    if (storedUser && storedToken) {
      dispatch(login({ user: storedUser, token: storedToken }));
    }
  }, [dispatch]);

  useEffect(() => {
    console.log('isAuthenticated:', isAuthenticated);

    if (isAuthenticated) {
      if (location.pathname === '/' || location.pathname === '/login') {
        navigate('/dashboard/default', { replace: true });
      }
    } else {
      if (location.pathname === '/' || location.pathname !== '/login') {
        navigate('/login', { replace: true });
      }
    }
  }, [isAuthenticated, location.pathname, navigate]);

  return (
    <NavigationScroll>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme(customization)}>
          <CssBaseline />
          <Routes isAuthenticated={isAuthenticated} user={user} />
        </ThemeProvider>
      </StyledEngineProvider>
    </NavigationScroll>
  );
};

export default App;
