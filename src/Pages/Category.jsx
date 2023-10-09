// import React from 'react';

import { Link } from "react-router-dom";

const Category = ({ category }) => {
    const { id, img, name, price, description } = category
    // console.log(id);
    return (
        //   
        <div className=" space-y-2 py-3 shadow-2xl rounded-lg bg-rose-50"
            data-aos="zoom-in"
        >
            <div className=" flex flex-col items-center ">
                <img className="w-72 h-52 rounded-lg" src={img} alt="" />
            </div>
            <div className="w-80  mx-auto space-y-2 ">
                <h2 className="text-2xl font-bold text-center">{name}</h2>
                <p className="font-semibold text-2xl ml-4">Price: {price} $</p>
                <p className="px-3 font-semibold">{description.slice(0, 180)}.....</p>
                <div className=" text-center"><button className="px-6 py-1 rounded-lg btn-accent "><Link to={`/category/${id}`}>Details</Link></button></div>
            </div>
        </div>

    );
};

export default Category;