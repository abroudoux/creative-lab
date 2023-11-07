import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


export default function About() {

    return (

        <section id="about" className="px-20 py-44 max-w-6xl">

            <h2 className="text-5xl pb-12 font-semibold">Découvrez Dawn, le jeu de cartes du futur</h2>

            <p className="text-lg pb-6">
                Entrez dans une nouvelle ère du divertissement. Dawn est une véritable révolution technologique au service de l'élégance et du plaisir.
            </p>
            <p className="text-lg pb-6">
                Chaque carte est équipée d'un écran d'une finesse exceptionnelle capable de changer d'apparence en un instant. Grâce à une technologie de pointe, vos cartes prenent vies, s'adaptant à vos choix de jeux.
            </p>

            <p className="text-lg pb-6">
                Pour une soirée Uno effervescente, une partie de poker enflammée ou une séance de belote entre amis : tout est possible avec Dawn. Plus besoin de mutiplier les jeux de cartes.
            </p>

            <p className="text-lg pb-6">
                Dawn repose sur des fondements solides. Impossible de tricher grâce à notre technologie avancée. Chaque carte est conçue pour garantir l'équité et l'intégrité du jeu, quelque soit le jeu auqeul vous jouez.
                Que vous soyez un joueur professionnel ou un novice, Dawn vous assure des parties honnêtes et équitables.
            </p>

            <ul className="flex-row-center">
                <li className="p-4 pl-0">
                    <a href="#" className="btn-purple-icon">
                        Commander
                        <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </li>
            </ul>

        </section>

    )

}