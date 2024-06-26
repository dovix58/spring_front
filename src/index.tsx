import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from "./Layout";
import {createBrowserRouter, RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>
    }
]);
ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

