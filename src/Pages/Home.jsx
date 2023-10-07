// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Category from "./Category";

const Home = () => {
    const categories = useLoaderData()
    // console.log(categories);
    return (
        <div className=" mt-4">
            <Banner></Banner>
            <section className="my-4  grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 py-4 px-3 gap-10">
                {
                    categories.map(category =>
                        <Category
                            key={category.id}
                            category={category}
                        ></Category>)
                }
            </section>

        </div>
    );
};

export default Home;