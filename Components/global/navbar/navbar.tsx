import Link from "next/link";
import React from "react";
import Image from "next/image";

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 h-16 inline-flex drop-shadow-lg items-center justify-between bg-transparent">
      <li className="list-none font-bold text-lg cursor-pointer">
        <Link href="/">
          <span className="text-xl flex items-center">
            <figure className="transform hover:scale-75 transition-transform duration-500 bg-black mt-4 p-1">
              <Image
                src="/icons/portfolio-logo.svg"
                width="80"
                height="60"
                alt="That's a me!"
              />
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
      </li>
      {/* Links */}
      <ul className="inline-flex mr-4 flex-wrap">
        <li>
          <Link href="/">
            <a className="text-white inline-flex mr-5 hover:border-gray-300 hover:text-lime-500">
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a className="text-white inline-flex mr-5 hover:border-gray-300 hover:text-lime-500">
              Projects
            </a>
          </Link>
          <Link href="/blog">
            <a className="text-white inline-flex mr-5 hover:border-gray-300 hover:text-lime-500">
              Blog
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="text-white inline-flex mr-5 hover:border-gray-300 hover:text-lime-500">
              About Me
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
