'use client';
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="text-[#607B96] border-b border-gray-600">
            <div className="md:flex">
                <div className={'md:flex justify-start items-end'}>
                    <div className="flex flex-row justify-between">
                        <Link className={'text-xs tracking-widest leading-normal pr-8 pl-16 border-r border-gray-600 py-1'} href="/">matthias-dive</Link>
                        <div className="hidden md:flex">
                            <div className={'border-r border-gray-600'}>
                                <Link className={'text-xs tracking-widest leading-normal px-8 py-1'} href="/about">_about</Link>
                            </div>
                            <div className={'border-r border-gray-600'}>
                                <Link className={'text-xs tracking-widest leading-normal px-8 py-2'} href="/projects">_projects</Link>
                            </div>
                            <div className={'border-r border-gray-600 justify-self-end'}>
                                <Link className={'text-xs tracking-widest leading-normal px-8 py-2'} href="/contact">_contact-me</Link>
                            </div>
                        </div>

                        <div className="md:hidden flex flex-row-reverse ml-2">
                            <button
                                onClick={toggleMenu}
                                className="block text-white hover:text-gray-200 focus:text-gray-200 focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="#607B96"
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

                    {isOpen && (
                        <div className="md:hidden flex flex-col items-start">
                            <ul className={'flex flex-col'}>
                                <Link className={'text-xs tracking-widest leading-normal border-y border-gray-600'} href="/about">_about-me</Link>
                                <Link className={'text-xs tracking-widest leading-normal border-b-0 border-gray-600'} href="/projects">_projects</Link>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}