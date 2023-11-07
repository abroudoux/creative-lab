import React, { FC } from "react";


type HeaderLiProps = {
    path : string;
    name : string;
};

const HeaderLi : FC<HeaderLiProps> = ( props ) => {

    return (

        <li className="p-4 text-lg">
            <a href={ props.path }>
                { props.name }
            </a>
        </li>

    )
};


export default HeaderLi;
