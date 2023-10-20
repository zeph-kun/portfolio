'use client'

import Link from "next/link";
import React from "react";
import {AiFillGithub} from "react-icons/ai";

export default function Footer() {
    return (
        <div className={'flex justify-between text-[#607B96] border-t border-gray-600'}>
            <div className={'border-r border-gray-600'}>
                <p className={'text-xs tracking-widest leading-normal px-8 py-2 '}>find me in :</p>
            </div>
            <a target={"_blank"} href={'https://github.com/zeph-kun'} className={'flex space-x-2 px-2 py-2 border-l border-gray-600'}>
                <AiFillGithub/>
                <p className={'text-xs tracking-widest leading-normal'}>@zeph-kun</p>
            </a>

        </div>
    )
}