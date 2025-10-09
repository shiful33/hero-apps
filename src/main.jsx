import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./Routes/Routes";
import "./index.css";
import InstallProvider from "./Context/InstallContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';





createRoot(document.getElementById('root')).render (
  <StrictMode>
      <InstallProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={2000} />
    </InstallProvider>
  </StrictMode>,
)
