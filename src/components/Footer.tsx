import { faGithub, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


export default function Footer() {

    return (

        <footer className="w-full p-12 flex-row-center-between border-t-[0.5px]">

            <div className="flex flex-col gap-6">
                <a href="/" className="text-3xl font-normal title">dawn</a>
                <ul className="flex-row-center-center">
                    <a className="text-4xl hover:bg-white hover:text-black hover:cursor-pointer hover:border-white border-2 p-6 rounded-s-lg">
                        <li>
                            <FontAwesomeIcon icon={faGithub}/>
                        </li>
                    </a>
                    <a className="text-4xl hover:bg-white hover:text-black hover:cursor-pointer hover:border-white border-y-2 p-6">
                        <li>
                            <FontAwesomeIcon icon={faYoutube}/>
                        </li>
                    </a>
                    <a className="text-4xl hover:bg-white hover:text-black hover:cursor-pointer hover:border-white border-2 p-6 rounded-e-lg">
                        <li>
                            <FontAwesomeIcon icon={faInstagram}/>
                        </li>
                    </a>
                </ul>
            </div>

            <div className="rounded-lg w-16 h-16 bg-white text-black flex-col-center-center">
                <a href="#" className="text-2xl">
                    <FontAwesomeIcon icon={faArrowUp}/>
                </a>
            </div>

        </footer>

    );
};