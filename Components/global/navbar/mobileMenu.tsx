import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";


export const MobileMenu: React.FC = () => {


    return (
        <>
        <ul className="visible md:invisible">
            <li>
                <Link href="/">
                    <a className="w-full h-12 pb-5 border border-white">
                    Home
                    </a>
                  </Link>
            </li>

            <li>
                 <Link href="/projects">
                     <a className="w-full h-12 pb-5 border border-white">
                     Projects
                     </a>
                 </Link>
            </li>

            <li>
                <Link href="/blog">
                    <a className="w-full h-12 pb-5 border border-white">
                    Blog
                    </a>
                </Link>
            </li>

            <li>
                <Link href="/about">
                <a className="w-full h-12 pb-5 border border-white">
                About Me
                </a>
                </Link>
            </li>
        </ul>
        </>
    )
}


