import Link from "next/link";
import React from "react";
import Image from "next/image";

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 h-16 inline-flex drop-shadow-lg items-center justify-between bg-transparent">
      <li className="list-none font-bold text-lg cursor-pointer ml-4">
        <Link href="/">
          <span className="text-xl flex items-center">
            <figure className="mr-4 transform hover:rotate-360 transition-transform duration-500 bg-black">
              <Image
                src="/icons/AndrewNoBG.jpg"
                width="60"
                height="60"
                alt="That's a me!"
              />
            </figure>
            {"Andrew".split("").map((letter, index) => {
              return (
                <span
                  key={index}
                  className="font-mono transition-all duration-500 hover:duration-100 text-red-50"
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
            <a className="text-white inline-flex mr-5 hover:bg-white hover:border-gray-300 hover:text-black">
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a className="text-white inline-flex mr-5 hover:bg-white hover:border-gray-300 hover:text-black">
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="text-white inline-flex mr-5 hover:bg-white hover:border-gray-300 hover:text-black">
              About Me
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
