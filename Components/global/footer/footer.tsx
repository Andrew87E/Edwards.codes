import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoMailRead } from "react-icons/go";
import { AiOutlineFilePdf, AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

export const Footer: React.FC = () => {
    return (
        <footer className="text-center bg-transparent text-white left-0 bottom-0 right-0 relative bg-transparent">
            <div className="justify-center px-6 pt-6">
                <div className="flex justify-center mb-1">
                    <a
                        href="mailto: Andrew@Edwards.codes"
                        type="button"
                        className="rounded-full border-2 border-white text-white leading-normal uppercase hover:scale-110 hover:border-green-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
                        rel="noopener noreferrer"
                    >
                        <GoMailRead
                            className="w-3 h-full mx-auto ae-links"
                            color="lime"
                        />
                    </a>

                    <a
                        href="https://drive.google.com/file/d/1KDNsl_mDoWQWa548MLfAKpN2ikbqBwj7/view?usp=sharing/"
                        type="button"
                        className="rounded-full border-2 border-white text-white leading-normal uppercase hover:scale-110 hover:border-green-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
                        rel="noopener noreferrer"
                    >
                        <AiOutlineFilePdf
                            className="w-3 h-full mx-auto ae-links"
                            color="lime"
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/andrew-edwards-34a927a5/"
                        type="button"
                        className="rounded-full border-2 border-white text-white leading-normal uppercase hover:scale-110 hover:border-green-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
                        rel="noopener noreferrer"
                    >
                        <BsLinkedin
                            className="w-3 h-full mx-auto ae-links"
                            color="lime"
                        />
                    </a>

                    <a
                        href="https://github.com/andrew87e"
                        type="button"
                        className="rounded-full border-2 border-white text-white leading-normal uppercase hover:scale-110 hover:border-green-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
                    >
                        <AiFillGithub
                            className="w-3 h-full mx-auto ae-links"
                            color="lime"
                        />
                    </a>
                </div>
            </div>

            <div className="text-center p-4">
                © 2022 Made with{" "}
                <Link
                    href="/"
                    className="text-red-500 transition-all duration-700 hover:duration-100 hover:scale-75"
                >
                    ❤
                </Link>{" "}
                by:
                <a
                    className="text-white hover:text-green-500"
                    href="https://github.com/andrew87e"
                >
                    {" "}
                    {"Andrew Edwards".split("").map((letter, index) => {
                        return (
                            <span
                                key={index}
                                className="font-mono transition-all duration-700 hover:duration-100 hover:scale-125 hover:text-lime-500 text-white"
                            >
                                {letter}
                            </span>
                        );
                    })}
                </a>
                <div className="absolute right-1 bottom-10 md:bottom-0 w-24 md:w-64 md:right-0 text-center sm:text-right sm:-mt-12 ">
                    <a
                        className="w-auto inline-flex items-center sm:w-auto font-bold flex-shrink hover:scale-90 border-gray-800 text-xs text-lime-500 border px-4 py-2 rounded-3xl cursor-pointer"
                        href="https://github.com/Andrew87E/Edwards.codes"
                        target="_blank"
                        rel="nooreferrer noreferrer"
                    >
                        <Image
                            src="/icons/github-icon.svg"
                            width={16}
                            height={16}
                            alt="Github Icon"
                        />
                        <span className="ml-2">View Source Code </span>
                    </a>
                </div>
            </div>
        </footer>
    );
};
