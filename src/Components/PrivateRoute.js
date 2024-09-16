import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>; // Oturum bilgisi yüklenirken
  }

  if (!user) {
    return <Navigate to="/login" />; // Kullanıcı yoksa giriş sayfasına yönlendirme
  }

  return children; // Kullanıcı varsa admin panelini göster
};

export default PrivateRoute;
