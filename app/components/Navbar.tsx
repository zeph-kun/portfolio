'use client'
import Link from "next/link";
import React, {useState} from "react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
            <Link href="/">matthias-dive</Link>
            <div className="flex flex-col items-end md:hidden">
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
                {isOpen && (
                    <div className="mt-2">
                        <ul>
                            <Link href={'/about'}>_about-me</Link>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}