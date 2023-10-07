// import React from 'react';

import Footer from "./Footer";

const Photos = () => {

    const photos = <>
        <div className=" h-96 mx-auto p-4 rounded-lg shadow-2xl">
            <img className="h-full rounded" src="https://i.ibb.co/tPBR58d/1.jpg" alt="" />
        </div>
        <div className=" h-96 mx-auto p-4 rounded-lg shadow-2xl">
            <img className="h-full rounded" src="https://i.ibb.co/KXNk9Jz/2.jpg" alt="" />
        </div>
        <div className=" h-96 mx-auto p-4 rounded-lg shadow-2xl">
            <img className="h-full rounded" src="https://i.ibb.co/8BLjwBV/3.jpg" alt="" />
        </div>
        <div className=" h-96 mx-auto p-4 rounded-lg shadow-2xl">
            <img className="h-full rounded" src="https://i.ibb.co/7Wh8StX/4.jpg" alt="" />
        </div>
        <div className=" h-96 mx-auto p-4 rounded-lg shadow-2xl">
            <img className="h-full rounded" src="https://i.ibb.co/wBB4VxG/5.jpg" alt="" />
        </div>
        <div className=" h-96 mx-auto p-4 rounded-lg shadow-2xl">
            <img className="h-full rounded" src="https://i.ibb.co/LJGG62j/6.jpg" alt="" />
        </div>
        <div className=" h-96 mx-auto p-4 rounded-lg shadow-2xl">
            <img className="h-full rounded" src="https://i.ibb.co/c1cqRTx/7.jpg" alt="" />
        </div>
        <div className=" h-96 mx-auto p-4 rounded-lg shadow-2xl">
            <img className="h-full rounded" src="https://i.ibb.co/DKyHVq8/8.jpg" alt="" />
        </div>
        <div className=" h-96 mx-auto p-4 rounded-lg shadow-2xl">
            <img className="h-full rounded" src="https://i.ibb.co/mS0GBGJ/9.jpg" alt="" />
        </div>
        <div className=" h-96 mx-auto p-4 rounded-lg shadow-2xl">
            <img className="h-full rounded" src="https://i.ibb.co/crLsgmN/10.jpg" alt="" />
        </div>
        <div className=" h-96 mx-auto p-4 rounded-lg shadow-2xl">
            <img className="h-full rounded" src="https://i.ibb.co/849TLqg/11.jpg" alt="" />
        </div>
        <div className=" h-96 mx-auto p-4 rounded-lg shadow-2xl">
            <img className="h-full rounded" src="https://i.ibb.co/DfCLbMK/12.jpg" alt="" />
        </div>
        <div className=" h-96 mx-auto p-4 rounded-lg shadow-2xl">
            <img className="h-full rounded" src="https://i.ibb.co/Hd4Xf0v/13.jpg" alt="" />
        </div>
        <div className=" h-96 mx-auto p-4 rounded-lg shadow-2xl">
            <img className="h-full rounded" src="https://i.ibb.co/86K7bj0/14.jpg" alt="" />
        </div>
        <div className=" h-96 mx-auto p-4 rounded-lg shadow-2xl">
            <img className="h-full rounded" src="https://i.ibb.co/pwmfhkw/15.png" alt="" />
        </div>
        <div className=" h-96 mx-auto p-4 rounded-lg shadow-2xl">
            <img className="h-full rounded" src="https://i.ibb.co/wpHFtYB/16.jpg" alt="" />
        </div>
    </>
    return (
        <>
            <h2 className="text-3xl font-bold font-serif italic text-center my-5">Our Event Photography</h2>
            <div className="mb-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
                {photos}
            </div>
            <Footer></Footer>
        </>
    );
};

export default Photos;