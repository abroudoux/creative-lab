import { faGithub, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


export default function Footer() {

    return (

        <footer className="w-full p-12 flex-col-center-between border-t-[0.5px]">

            <a href="/" className="text-3xl w-full font-normal title">dawn</a>

            <div className="flex-row-center-between mt-12">

                <ul className="flex-row-center-center">
                    <a className="text-xl hover:bg-white hover:text-black hover:cursor-pointer hover:border-white border-2 py-5 px-6 rounded-s-lg">
                        <li>
                            <FontAwesomeIcon icon={faGithub}/>
                        </li>
                    </a>
                    <a className="text-xl hover:bg-white hover:text-black hover:cursor-pointer hover:border-white border-y-2 py-5 px-6">
                        <li>
                            <FontAwesomeIcon icon={faYoutube}/>
                        </li>
                    </a>
                    <a className="text-xl hover:bg-white hover:text-black hover:cursor-pointer hover:border-white border-2 py-5 px-6 rounded-e-lg">
                        <li>
                            <FontAwesomeIcon icon={faInstagram}/>
                        </li>
                    </a>
                </ul>

                <a href="#" className="text-2xl rounded-lg py-5 px-6 bg-white text-black flex-col-center-center hover:cursor-pointer">
                    <FontAwesomeIcon icon={faArrowUp}/>
                </a>

            </div>

        </footer>

    );
};