import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";


type HeaderLiProps = {
    path : string;
    name : string;
};

const HeaderLi : FC<HeaderLiProps> = ( props ) => {

    const location = useLocation();

    return (

        <li className={`p-4 text-lg ${location.pathname === props.path ? "active" : ""}`}>
            <a href={ props.path }>
                { props.name }
            </a>
        </li>

    )
};


export default HeaderLi;
