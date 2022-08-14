import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {routes} from "../../../data/global"
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Name } from "./name";


export const MobileMenu = ({currentPage}: any) => {
const [showMenu, setShowMenu] = useState(false)

    return (
        <>
        <Name />

        {showMenu ?
        <ul className="list-none inline-block mt-80 ae-mobile-menu border-t border-b">
        {
            routes.map((item, index)=>{
              return (
                <li
                key={index}
                className={`mr-5 hover:border-gray-300 transition-all duration-700 hover:duration-100 hover:scale-105 h-10 p-1 align-center
                ${
                  currentPage === item.title
                  ? "text-lime-500 hover:text-white border-b"
                  : "opacity-70 hover:opacity-100 transition-opacity text-white hover:text-lime-500"
                }`}
                >
                  <Link href={item.path}>{item.title}</Link>
                </li>
                )
            })
        }
        </ul>
        : null}
        </>
    )
}


