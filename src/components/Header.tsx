import React from "react";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import HeaderLi from "./HeaderLi";


export default function Header() {

    return (

        <header id="/" className="w-full h-auto py-3 px-10 fixed backdrop-blur-md flex-row-center-between">
            <a href="#"><div className="h-14 w-14 rounded-full bg-white"></div></a>
            <nav>
                <ul className="flex-row-center-center">
                    <HeaderLi path="#" name="Accueil"/>
                    <HeaderLi path="#about" name="À propos"/>
                    <HeaderLi path="#products" name="Produits"/>
                </ul>
            </nav>
            <div>
                <a href="https://github.com/abroudoux/creative-lab" target="_blank" className="btn-white-icon text-xl">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </div>
        </header>
    )
}