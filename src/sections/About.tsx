import React from "react";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/20/solid";
import { faDiceD20, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@radix-ui/react-select";


export default function About() {

    return (

        <section id="about">

            <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
                    <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-purple-borders [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
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
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <h2 className="mt-2 text-4xl text-white font-bold tracking-tight sm:text-4xl">Découvrez Dawn, le jeu de cartes du futur</h2>
                                <p className="mt-6 text-lg leading-8 text-grey-light">
                                    Entrez dans une nouvelle ère du divertissement. Dawn est une véritable révolution technologique au service de l'élégance et du plaisir.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="ml-12 mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                            alt=""
                        />
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 lg:max-w-lg">
                                <ul role="list" className="space-y-8 text-grey-light">
                                    <li className="flex gap-x-3">
                                        <FontAwesomeIcon icon={faRocket} className="mt-1 h-5 w-5 flex-none text-white" aria-hidden="true"/>
                                        <span>
                                            <strong className="text-white font-normal">Une technologie de pointe.</strong> Chaque carte est équipée d'un écran d'une finesse exceptionnelle capable de changer d'apparence en un instant. Grâce à une technologie avancée, vos cartes prenent vies, s'adaptant à vos choix de jeux.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <FontAwesomeIcon icon={faDiceD20} className="mt-1 h-5 w-5 flex-none text-white" aria-hidden="true"/>
                                        <span>
                                            <strong className="text-white font-normal">Le privilège du jeu.</strong> Avec nos cartes animées, le jeu devient une expérience sensorielle. Dawn offre une polyvalence sans précédent, rassemblant tous les jeux en un seul paquet de cartes.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-white" aria-hidden="true"/>
                                        <span>
                                            <strong className="text-white font-normal">Triche impossible.</strong> Chaque carte est conçue pour garantir l'équité et l'intégrité du jeu, quelque soit le jeu auqeul vous jouez. Que vous soyez un joueur professionnel ou un novice, Dawn vous assure des parties honnêtes et équitables.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )

}