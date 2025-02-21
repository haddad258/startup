import { useRoutes, Navigate } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes({ isAuthenticated }) {
  console.log('isAuthenticated',isAuthenticated);
  return useRoutes([
    AuthenticationRoutes, // Routes de connexion
    isAuthenticated ? MainRoutes : { path: '/', element: <Navigate to="/login" replace /> },
    { path: '*', element: <Navigate to="/login" replace /> } // Redirige toute route non définie vers le login
  ]);
}