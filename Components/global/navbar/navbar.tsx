import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {routes} from "../../../data/global"

type width = number

export const Navbar = ({currentPage}: any) => {

// create a second component with block style
// make button show second component 
// make button appear on links disapear


  return (
    <>
        <div className="list-none font-bold text-lg">
          <Link href="/">
            <span className="text-xl flex items-center">
              <figure className="cursor-pointer transform hover:scale-75 transition-transform duration-500 bg-transparent mt-4 p-1">
                <Image
                  src="/icons/portfolio-logo.svg"
                  width="80"
                  height="60"
                  alt="That's a me!" />
              </figure>
              {"Andrew".split("").map((letter, index) => {
                return (
                  <span
                    key={index}
                    className="cursor-pointer font-mono transition-all duration-700 hover:duration-100 hover:scale-125 hover:translate-y-1 hover:text-lime-500 text-white"
                  >
                    {letter}
                  </span>
                );
              })}
            </span>
          </Link>
        </div>

        <ul className="nav-menu inline-flex mr-4 flex-wrap ae-nav-links">
          {
            routes.map((item, index)=>{
              return (
                <li
                key={index}
                className={`mr-5 hover:border-gray-300 transition-all duration-700 hover:duration-100 hover:scale-125 ${
                  currentPage === item.title
                  ? "opacity-100 text-lime-500 hover:text-white"
                  : "opacity-40 hover:opacity-100 transition-opacity text-white hover:text-lime-500"
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


