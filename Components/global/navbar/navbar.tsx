import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiMenu, FiX } from 'react-icons/fi';
import useWindowDimensions from '../useWindowDimensions/windowDimensions'


export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [click, setClick] = React.useState(false);
  const { width, height } = useWindowDimensions();
  
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

useEffect(()=>{
  console.log(width, height)
})


  return (
    <nav className="fixed top-0 right-0 left-0 h-16 inline-flex drop-shadow-lg items-center justify-between bg-transparent ae-nav">
        <div className="list-none font-bold text-lg cursor-pointer">
          <Link href="/">
            <span className="text-xl flex items-center">
              <figure className="transform hover:scale-75 transition-transform duration-500 bg-transparent mt-4 p-1">
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
                    className="font-mono transition-all duration-700 hover:duration-100 hover:scale-125 hover:text-lime-500 text-white"
                  >
                    {letter}
                  </span>
                );
              })}
            </span>
          </Link>
        </div>
        
        <>
        <ul className={click ? "ae-nav-menu active" : "nav-menu inline-flex mr-4 flex-wrap ae-nav-links"}>
            <li>
              <Link href="/">
                <a className="text-white inline-flex mr-5 hover:border-gray-300 hover:text-lime-500 transition-all duration-700 hover:duration-100 hover:scale-125">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a className="text-white inline-flex mr-5 hover:border-gray-300 hover:text-lime-500 transition-all duration-700 hover:duration-100 hover:scale-125">
                  Projects
                </a>
              </Link>
              <Link href="/blog">
                <a className="text-white inline-flex mr-5 hover:border-gray-300 hover:text-lime-500 transition-all duration-700 hover:duration-100 hover:scale-125">
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="text-white inline-flex mr-5 hover:border-gray-300 hover:text-lime-500 transition-all duration-700 hover:duration-100 hover:scale-125">
                  About Me
                </a>
              </Link>
            </li>
          </ul>
          </>
      
        <button className="ae-nav-btn">XXX</button>
    </nav>
  );
};


