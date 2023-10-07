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
                element: <CardDetails></CardDetails>,
                loader: ()=>fetch('/events.json')
            },
            {
                path: '/clients',
                element: <Clients></Clients>
            },
            {
                path: '/photos',
                element: <Photos></Photos>
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