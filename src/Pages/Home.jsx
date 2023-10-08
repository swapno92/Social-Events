// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Category from "./Category";
import Footer from "./Footer";
import Agency from "./Agency";
import ServicesPlus from "./ServicesPlus";

const Home = () => {
    const categories = useLoaderData()
    // console.log(categories);
    return (
        <div className=" mt-4">
            <Banner></Banner>
            <section className="my-4   py-4 px-3 ">
                <h1 className="text-center my-8 text-5xl font-serif font-bold">Our Services</h1>
                <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-10">
                    {
                        categories.map(category =>
                            <Category
                                key={category.id}
                                category={category}
                            ></Category>)
                    }
                </div>
            </section>
            <Agency></Agency>
            <ServicesPlus></ServicesPlus>
            <Footer></Footer>

        </div>
    );
};

export default Home;