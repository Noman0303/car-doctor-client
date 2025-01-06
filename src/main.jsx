import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Routes/Routes.jsx';


import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Providers/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer/>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
