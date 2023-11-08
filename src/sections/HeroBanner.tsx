import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Spline from '@splinetool/react-spline';


export default function HeroBanner() {

    return (

        <section className="px-20 py-36 flex-row-center-between">

            <div className="w-2/4 h-auto py-6 flex flex-col gap-2">
                {/* <span className="text-4xl text-grey-light font-extralight title">dawn</span> */}
                <h1 className="text-8xl font-bold">Les cartes nouvelle génération</h1>
                <p className="text-lg text-grey-light font-light mt-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio totam sit consequatur alias voluptatum.</p>
                <ul className="flex-row-center mt-10">
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

            <div className="w-full h-full max-h-[50vh] min-h-[50vh] bg-black flex-row-center-center">
                <Spline scene="https://prod.spline.design/nnJ2flysz6CEwEX1/scene.splinecode"/>
            </div>

        </section>

    );
};