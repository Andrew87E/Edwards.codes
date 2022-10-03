import Link from "next/link";
import React, { useState, useEffect } from "react";
import { routes } from "../../../data/global";
import { HiOutlineX } from "react-icons/hi";
import { RiMenu3Line } from "react-icons/ri";
import { Name } from "./name";

export const MobileMenu = ({ currentPage }: any) => {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        return function cleanup() {
            document.body.style.overflow = "";
        };
    }, []);

    const handleClick = () => {
        setShowMenu((current) => !current);
    };

    return (
        <>
            <Name />
            <button
                className="mr-4 text-3xl transition-transform duration-200"
                onClick={handleClick}
            >
                {showMenu ? (
                    <HiOutlineX color="white" />
                ) : (
                    <RiMenu3Line color="white" />
                )}
            </button>

            {showMenu ? (
                <ul className="list-none inline-block fixed right-0 top-16 ae-mobile-menu border-t border-b w-36 h-52 bg-black">
                    {/* // use position not mt */}
                    {routes.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className={`mr-8 text-2xl hover:border-gray-300 transition-all duration-700 hover:duration-100 hover:scale-105 h-10 p-1 align-center
                ${
                    currentPage === item.title
                        ? "text-lime-500 hover:text-white border-b"
                        : "opacity-70 hover:opacity-100 transition-opacity text-white hover:text-lime-500"
                }`}
                            >
                                <Link href={item.path}>{item.title}</Link>
                            </li>
                        );
                    })}
                </ul>
            ) : null}
        </>
    );
};
