// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";

const Root = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;