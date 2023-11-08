import React, { FC } from "react";

import "../style/card.scss";


type CardProps = {
    img ? : string;
    alt ? : string;
    title : string;
    price : string;
    caracteristiques : string[];
};

const Card : FC<CardProps> = ( props ) => {

    return (

        <div className="flex flex-col items-start">
            <h3 className="text-3xl mb-3 font-semibold text-white">{ props.title }</h3>
            <div className="card h-auto w-full flex-row-center-center border-gradient p-0.5 rounded-lg">
                <div className="h-full w-80 flex justify-start items-end bg-grey-dark rounded-lg">
                    <img src={ props.img } alt={ props.alt } className="cover"/>

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
