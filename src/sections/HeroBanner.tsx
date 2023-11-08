import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Spline from '@splinetool/react-spline';


export default function HeroBanner() {

    return (

        <section className="px-20 py-44 flex-row-center-between">

            <div className="w-2/4 h-auto py-6 flex flex-col gap-2">
                <span className="text-4xl text-grey-light font-extralight title">dawn</span>
                <h1 className="text-8xl font-semibold pb-10">Les cartes nouvelle génération</h1>
                <ul className="flex-row-center">
                    <li className="p-4 pl-0">
                        <a href="#about" className="btn-purple-icon">
                            Découvrir
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </li>
                    <li className="p-4">
                        <a href="#products" className="btn-black">
                            Produits
                        </a>
                    </li>
                </ul>
            </div>

            <div className="w-full h-full bg-white flex-row-center-center">
                <Spline scene="https://prod.spline.design/nnJ2flysz6CEwEX1/scene.splinecode"/>
            </div>

        </section>

    );
};