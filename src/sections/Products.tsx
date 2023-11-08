import React from "react";

import Card from "../components/Card";

import CoffretRoi from "../../public/assets/coffret-roi.png";
import CoffretDame from "../../public/assets/coffret-dame.png"


export default function Products() {

    return (

        <section id="products" className="px-20 py-44 relative isolate overflow-hidden">

                <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
                    <svg
                    className="absolute left-[max(50%,25rem)] top-24 h-[64rem] w-[128rem] -translate-x-1/2 stroke-purple-borders [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true">
                        <defs>
                            <pattern
                                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                                width={200}
                                height={200}
                                x="50%"
                                y={-1}
                                patternUnits="userSpaceOnUse">
                                <path d="M100 200V.5M.5 .5H200" fill="#1E1523" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-black-purple">
                            <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}/>
                        </svg>
                        <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                    </svg>
                </div>

            <h2 className="text-4xl text-white font-bold">Nos Produits</h2>

            <p className="mt-6 text-lg leading-8 text-grey-light">
                Exporez la diversité des jeux proposés par <strong className="text-white font-medium">Dawn </strong> au travers de 3 coffrets concus pour vos soirées
            </p>

            <div className="w-full flex-row-start-between mt-16">
                    <Card title="Valet de Trèfle" price="99,95€" caracteristiques={["Jeu de 52 cartes", "Boitier sécurisé", "Personnalisation des cartes via l'application",]}/>
                    <Card img={ CoffretDame } alt="Coffret Roi de Cœur"  title="Dame de Cœur" price="249,99€" caracteristiques={["Jeu de 52 cartes", "Boitier sécurisé", "Personnalisation des cartes via l'application", "250 jeux de cartes uniques"]}/>
                    <Card img={ CoffretRoi } alt="Coffret Roi de Pic" title="Roi de Pic" price="699,99€" caracteristiques={["Jeu de 52 cartes", "Boitier sécurisé", "Personnalisation des cartes via l'application", "250 jeux de cartes uniques", "Tapis de carte personnalisable", "500 jetons de joker numériques", "2 dés numériques", "4 pions holographiques"]}/>
                </div>

        </section>

    )

}