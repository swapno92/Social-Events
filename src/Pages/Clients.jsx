// import React from 'react';

import Footer from "./Footer";

const Clients = () => {
    return (
        <>

            <div className=" mx-auto my-5 px-10 py-10 space-y-6 bg-slate-100">
                <h2 className="text-5xl font-bold font-serif text-center">Testimonials</h2>
                <h4 className="font-semibold text-gray-400 text-lg text-center">~ Happy Clients About Us ~</h4>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1j gap-12 px-10">

                    <div className=" text-center py-10 flex flex-col gap-8 rounded-lg shadow-2xl"
                    data-aos="flip-down"
                    >
                        <h2 className="text-2xl font-semibold font-serif px-3">Perfect decoration and perfect buffet for my little sister's birthday party!</h2>
                        <div className="flex items-center text-center justify-center gap-3">
                            <img className="w-12 h-12 rounded-full" src="/client-1.jpg" alt="" />
                            <h2 className="font-semibold">Jane Sanders</h2>
                        </div>
                    </div>

                    <div className=" text-center py-10 flex flex-col gap-8 rounded-lg shadow-2xl"
                    data-aos="flip-down"
                    >
                        <h2 className="text-2xl font-semibold font-serif px-3">I invited these event planner to arrange a bachelor party for my best friend!</h2>
                        <div className="flex items-center text-center justify-center gap-3">
                            <img className="w-12 h-12 rounded-full" src="/client-2.jpg" alt="" />
                            <h2 className="font-semibold">john show</h2>
                        </div>
                    </div>

                    <div className=" text-center py-10 flex flex-col gap-8 rounded-lg shadow-2xl"
                    data-aos="flip-down"
                    >
                        <h2 className="text-2xl font-semibold font-serif px-5">Look no further! You are in the right place to plan your event celebration.</h2>
                        <div className="flex items-center text-center justify-center gap-3">
                            <img className="w-12 h-12 rounded-full" src="/client-3.jpg" alt="" />
                            <h2 className="font-semibold">Linda Movrizza</h2>
                        </div>
                    </div>

                    <div className=" text-center py-10 flex flex-col gap-8 rounded-lg shadow-2xl"
                    data-aos="flip-down"
                    >
                        <h2 className="text-2xl font-semibold font-serif px-3">My family and I are beyond happy to have them plan our wedding day.</h2>
                        <div className="flex items-center text-center justify-center gap-3">
                            <img className="w-12 h-12 rounded-full" src="/client-4.jpg" alt="" />
                            <h2 className="font-semibold">Gessica Mann</h2>
                        </div>
                    </div>

                    <div className=" text-center py-10 flex flex-col gap-8 rounded-lg shadow-2xl"
                    data-aos="flip-down"
                    >
                        <h2 className="text-2xl font-semibold font-serif px-3">Perfect decoration and perfect buffet for my little sister's birthday party!</h2>
                        <div className="flex items-center text-center justify-center gap-3">
                            <img className="w-12 h-12 rounded-full" src="/client-5.jpg" alt="" />
                            <h2 className="font-semibold">Hene Hliue</h2>
                        </div>
                    </div>

                    <div className=" text-center py-10 flex flex-col gap-8 rounded-lg shadow-2xl"
                    data-aos="flip-down"
                    >
                        <h2 className="text-2xl font-semibold font-serif px-3">My family and I are beyond happy to have them plan our wedding day.</h2>
                        <div className="flex items-center text-center justify-center gap-3">
                            <img className="w-12 h-12 rounded-full" src="/client-6.jpg" alt="" />
                            <h2 className="font-semibold">Labia moha</h2>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Clients;