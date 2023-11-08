import React, { useEffect, useState } from "react";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../public/assets/logo.png";

import HeaderLi from "./HeaderLi";


export default function Header() {

    return (

        <header id="/" className="w-full h-auto py-2 px-10 fixed backdrop-blur-sm border-b-[0.5px] border-grey-light flex-row-center-between z-50">
            <a href="#">
                <img src={ logo } alt="" className="w-36"/>
            </a>
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