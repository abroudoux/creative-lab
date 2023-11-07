import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "../style/components/herobanner.scss";



export default function HeroBanner() {

    return (

        <section className="py-32 px-16 flex-row-center-between">

            <div className="w-2/4 h-auto flex flex-col gap-2">
                <p className="text-4xl font-light">dawn</p>
                <h1 className="text-8xl font-semibold pb-10">Les cartes nouvelle génération</h1>
                <ul className="flex-row-center">
                    <li className="p-4">
                        <a href="#about" className="btn-purple-icon">
                            Discover
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </li>
                    <li className="p-4">
                        <a href="#products" className="btn-white">
                            Produits
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <h1 className="text-7xl">Hero Banner</h1>
            </div>

        </section>

    );
};