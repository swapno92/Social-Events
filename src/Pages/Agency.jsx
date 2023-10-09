// import React from 'react';
import { FcHome } from 'react-icons/fc';
import { GiPartyPopper } from 'react-icons/gi';
import { TfiWrite } from 'react-icons/tfi';
import { TiMessages } from 'react-icons/ti';

const Agency = () => {
    return (
        <>
        <div className="  mb-8 bg-gray-50 text-center pt-8  mx-4">
            <h1 className='md:text-5xl text-3xl font-semibold font-serif mt-4'
                data-aos="zoom-in-down"
            ><span className='text-yellow-500'>Hello! </span>We Are an Event Planning Agency</h1>
            <p className='mt-12 lg:px-80 md:px-10 px-2 text-base font-semibold'
                data-aos="zoom-in-down"
            >As the premier event planning company in the area, we know that it’s not “one size fits all”. Each event and client is unique and we believe our services should be as well. We know that it should be “Can I hire a planner?” not “Can I afford one?”.</p>
            <div className='flex flex-wrap px-3 sm:gap-3 space-y-3 items-center justify-evenly mt-16'
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
            >
                <div className=' flex flex-col items-center'>
                    <FcHome className='text-6xl text-red-400'></FcHome>
                    <h3 className='mt-4 text-lg font-medium font-serif'>Find the perfect <br /> venue for free</h3>
                </div>
                <div className=' flex flex-col items-center'>
                    <TiMessages className='text-6xl text-red-400'></TiMessages>
                    <h3 className='mt-4 text-lg font-medium font-serif'>Connect with the<br /> best vendor</h3>
                </div>
                <div className=' flex flex-col items-center'>
                    <TfiWrite className='text-6xl text-red-400'></TfiWrite>
                    <h3 className='mt-4 text-lg font-medium font-serif'>Let us help you <br /> with the event</h3>
                </div>
                <div className=' flex flex-col items-center'>
                    <GiPartyPopper className='text-6xl text-red-400'></GiPartyPopper>
                    <h3 className='mt-4 text-lg font-medium font-serif'>Enjoy the party <br /> with your friends</h3>
                </div>
            </div>
            <div className='flex  items-center justify-evenly  mt-6  px-24'
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
            >
                <div className='bg-yellow-400 px-3 py-1 rounded-full text-white font-bold '>1</div>
                <hr className=' w-40  border border-y-gray-400' />
                <div className='bg-yellow-400 px-3 py-1 rounded-full text-white font-bold '>2</div>
                <hr className=' w-40  border border-y-gray-400' />
                <div className='bg-yellow-400 px-3 py-1 rounded-full text-white font-bold '>3</div>
                <hr className=' w-40  border border-y-gray-400' />
                <div className='bg-yellow-400 px-3 py-1 rounded-full text-white font-bold '>4</div>
            </div>
        </div>
        </>
    );
};

export default Agency;