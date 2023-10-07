// import React from 'react';

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";



const CardDetails = () => {
    const cards = useLoaderData()
    const { id } = useParams()
    // console.log(id);

    const [card, setCard] = useState([])

    useEffect(() => {
        const findCard = cards?.find(card => card.id == id)
        setCard(findCard)
    }, [])

    // console.log(card);

    return (
        <div className="rounded p-8 shadow-inner ">
            <h2 className="text-3xl text-center font-bold underline italic">{card.name}</h2>
            <img src={card.img} alt="" className="w-3/5 h-[60vh] mx-auto rounded-lg shadow-2xl my-6" />
            <p className=" font-semibold text-justify w-3/5 mx-auto "><span className="underline font-bold">Details:</span> {card.description}</p>

        </div>
    );
};

export default CardDetails;