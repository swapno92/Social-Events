// import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Photos from "../Pages/Photos";
import Clients from "../Pages/Clients";
import CardDetails from "../Pages/CardDetails";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "../Pages/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/events.json')
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
                loader: ()=>fetch('/events.json')
            },
            {
                path: '/clients',
                element: <PrivateRoute><Clients></Clients></PrivateRoute>
            },
            {
                path: '/photos',
                element: <PrivateRoute><Photos></Photos></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])


export default router;