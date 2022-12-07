import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthProvider } from './contexts/Auth/AuthProvider';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="355281383315-bvmsuaot9i2n9s0nta1ffm40uqmv1l25.apps.googleusercontent.com">
    <AuthProvider>
    <App />
    </AuthProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
)
