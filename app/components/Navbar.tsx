'use client';
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-900 text-white border border-gray-600">
            <div className="container mx-auto md:flex justify-start items-end space-x-8">
                <div className="flex flex-row justify-between"> {/* Conteneur commun pour matthias-dive et le bouton hamburger */}
                    <Link className="" href="/">matthias-dive</Link>

                    {/* Bouton du menu hamburger pour les petits écrans */}
                    <div className="md:hidden flex flex-row-reverse ml-2"> {/* Ajout de ml-2 pour l'espacement */}
                        <button
                            onClick={toggleMenu}
                            className="block text-white hover:text-gray-200 focus:text-gray-200 focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Affiche les liens de navigation en mode bureau (écran > 768px) */}
                <div className="hidden md:flex border-x border-gray-600">
                    <div className={'border-r border-gray-600 px-8'}>
                        <Link className={''} href="/about">_about</Link>
                    </div>
                    <div className={'border-gray-600 px-8'}>
                        <Link href="/projects">_projects</Link>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden flex flex-col items-end">
                        <ul>
                            <Link href="/about">_about-me</Link>
                            {/* Ajoutez d'autres liens ici si nécessaire */}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}