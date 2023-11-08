import React, { FC } from "react";

import "../style/card.scss";


type CardProps = {
    title: string;
    price : string;
    caracteristiques : string[];
};

const Card : FC<CardProps> = ( props ) => {

    return (

        <div className=" flex flex-col items-start">
            <div className="card h-96 w-full flex-row-center-center border-gradient p-0.5 rounded-lg">
                <div className="h-full w-80 flex justify-start items-end py-2 px-3 bg-grey-dark rounded-lg">
                    <h3 className="text-base font-normal text-grey-light">
                        { props.title }
                    </h3>
                </div>
            </div>
            <p className="text-purple font-bold mt-4 text-2xl">{ props.price }</p>
            <p className="text-white text-xl font-normal mt-3">Ce coffret contient :</p>
            <ul>
                {props.caracteristiques.map((caracteristique, index) => (
                    <li key={index} className="text-grey-light font-light">{caracteristique}</li>
                ))}
            </ul>
        </div>

    )
}


export default Card;
