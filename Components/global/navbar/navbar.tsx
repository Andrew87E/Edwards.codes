import Link from "next/link";
import React, { useState, useEffect } from "react";
import {routes} from "../../../data/global"
import { Name } from "./name";


export const Navbar = ({currentPage}: any) => {

// create a second component with block style
// make button show second component 
// make button appear on links disapear

  return (
    <>
  <Name />
        <ul className="nav-menu inline-flex mr-4 flex-wrap ae-nav-links">
          {
            routes.map((item, index)=>{
              return (
                <li
                key={index}
                className={`mr-5 hover:border-gray-300 transition-all duration-700 hover:duration-100 hover:scale-125 ${
                  currentPage === item.title
                  ? "text-lime-500 hover:text-white"
                  : "opacity-70 hover:opacity-100 transition-opacity text-white hover:text-white "
                }`}
                >
                  <Link href={item.path}>{item.title}</Link>
                </li>
                )
            })
          }
          </ul>
    </>
  );
};


