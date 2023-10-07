// import React from 'react';

import { Link } from "react-router-dom";

const Category = ({category}) => {
    const {id, img,name,price,description} = category
// console.log(id);
    return (
        //   <section className="my-4  grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 py-4 px-3 gap-10">
                <div className=" space-y-2 py-3 shadow-2xl rounded-lg ">
                    <div className=" flex flex-col items-center ">
                        <img className="w-72 h-52 rounded-lg" src={img} alt="" />
                    </div>
                    <div className="w-80  mx-auto space-y-2 ">
                        <h2 className="text-2xl font-bold text-center">{name}</h2>
                        <p className="font-semibold text-2xl ml-4">Price: {price} $</p>
                        <p className="px-3 font-semibold">{description.slice(0 ,180)}.....</p>
                        <div className=" text-center"><button className="px-6 py-1 rounded-lg btn-accent "><Link to={`/category/${id}`}>Details</Link></button></div>
                    </div>
                </div>

            // </section> 
    );
};

export default Category;