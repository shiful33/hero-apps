import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import ProductDetails from "../Pages/ProductDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('./heroApps.json'),
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
    ]
  },
      /* {
        path: "*",
        element: <ErrorPage />,
      }, */
  
]);

export default router;