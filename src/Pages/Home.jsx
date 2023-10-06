// import React from 'react';

import Banner from "./Banner";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className=" mt-4">
            <Banner></Banner>
            <section className="my-4  grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 py-4 px-3 gap-6">
                <div className=" space-y-2 py-3 shadow-2xl rounded-lg">
                    <div className=" flex flex-col items-center ">
                        <img className="w-72 rounded-lg" src="s.jpg" alt="" />
                    </div>
                    <div className="w-72  mx-auto space-y-2">
                        <h2 className="text-2xl font-bold text-center">weading name</h2>
                        <p className="font-bold text-2xl ml-4">Price: $</p>
                        <p className="px-3 font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius hic amet consequatur velit nisi modi minima natus ea earum est?</p>
                        <div className=" text-center"><button className="px-6 py-1 rounded-lg btn-accent ">Details</button></div>
                    </div>
                </div>
                <div className=" space-y-2 py-3 shadow-2xl rounded-lg">
                    <div className=" flex flex-col items-center ">
                        <img className="w-72 rounded-lg" src="s.jpg" alt="" />
                    </div>
                    <div className="w-72  mx-auto space-y-2">
                        <h2 className="text-2xl font-bold text-center">weading name</h2>
                        <p className="font-bold text-2xl ml-4">Price: $</p>
                        <p className="px-3 font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius hic amet consequatur velit nisi modi minima natus ea earum est?</p>
                        <div className=" text-center"><button className="px-6 py-1 rounded-lg btn-accent ">Details</button></div>
                    </div>
                </div>
                <div className=" space-y-2 py-3 shadow-2xl rounded-lg">
                    <div className=" flex flex-col items-center ">
                        <img className="w-72 rounded-lg" src="s.jpg" alt="" />
                    </div>
                    <div className="w-72  mx-auto space-y-2">
                        <h2 className="text-2xl font-bold text-center">weading name</h2>
                        <p className="font-bold text-2xl ml-4">Price: $</p>
                        <p className="px-3 font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius hic amet consequatur velit nisi modi minima natus ea earum est?</p>
                        <div className=" text-center"><button className="px-6 py-1 rounded-lg btn-accent ">Details</button></div>
                    </div>
                </div>
                <div className=" space-y-2 py-3 shadow-2xl rounded-lg">
                    <div className=" flex flex-col items-center ">
                        <img className="w-72 rounded-lg" src="s.jpg" alt="" />
                    </div>
                    <div className="w-72  mx-auto space-y-2">
                        <h2 className="text-2xl font-bold text-center">weading name</h2>
                        <p className="font-bold text-2xl ml-4">Price: $</p>
                        <p className="px-3 font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius hic amet consequatur velit nisi modi minima natus ea earum est?</p>
                        <div className=" text-center"><button className="px-6 py-1 rounded-lg btn-accent ">Details</button></div>
                    </div>
                </div>
                <div className=" space-y-2 py-3 shadow-2xl rounded-lg">
                    <div className=" flex flex-col items-center ">
                        <img className="w-72 rounded-lg" src="s.jpg" alt="" />
                    </div>
                    <div className="w-72  mx-auto space-y-2">
                        <h2 className="text-2xl font-bold text-center">weading name</h2>
                        <p className="font-bold text-2xl ml-4">Price: $</p>
                        <p className="px-3 font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius hic amet consequatur velit nisi modi minima natus ea earum est?</p>
                        <div className=" text-center"><button className="px-6 py-1 rounded-lg btn-accent ">Details</button></div>
                    </div>
                </div>
                <div className=" space-y-2 py-3 shadow-2xl rounded-lg">
                    <div className=" flex flex-col items-center ">
                        <img className="w-72 rounded-lg" src="s.jpg" alt="" />
                    </div>
                    <div className="w-72  mx-auto space-y-2">
                        <h2 className="text-2xl font-bold text-center">weading name</h2>
                        <p className="font-bold text-2xl ml-4">Price: $</p>
                        <p className="px-3 font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius hic amet consequatur velit nisi modi minima natus ea earum est?</p>
                        <div className=" text-center"><button className="px-6 py-1 rounded-lg btn-accent ">Details</button></div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Home;