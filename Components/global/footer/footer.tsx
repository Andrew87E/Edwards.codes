import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoMailRead } from "react-icons/go";
import { AiOutlineFilePdf, AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { Hover } from "../../skills/Hover";

export const Footer: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <footer className="text-center bg-transparent text-white left-0 bottom-0 right-0 relative">
            <div className="justify-center px-6 pt-6">
                <div className="flex justify-center mb-1">
                    <a
                        href="mailto: Andrew@Edwards.codes"
                        type="button"
                        className="rounded-full border-2 border-white text-white leading-normal uppercase hover:scale-110 hover:border-green-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1 justify-center"
                        rel="noopener noreferrer"
                        target="_blank"
                        id="email"
                        data-tip
                        data-for="email"
                    >
                        <GoMailRead
                            className="w-4 h-full mx-auto ae-links"
                            color="lime"
                        />
                    </a>
                    {isMounted && (
                        <Hover
                            backgroundColor="#3EB143"
                            textColor="black"
                            id="email"
                            name="Send an Email"
                        />
                    )}

                    <a
                        href="https://drive.google.com/file/d/1V-FB3ul7itm1nOFTeuD4GIbM540A16Q2/view?usp=sharing"
                        type="button"
                        className="rounded-full border-2 border-white text-white leading-normal uppercase hover:scale-110 hover:border-green-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1 justify-center"
                        rel="noopener noreferrer"
                        target="_blank"
                        id="resume"
                        data-tip
                        data-for="resume"
                    >
                        <AiOutlineFilePdf
                            className="w-4 h-full mx-auto ae-links"
                            color="lime"
                        />
                    </a>
                    {isMounted && (
                        <Hover
                            backgroundColor="#3EB143"
                            textColor="black"
                            id="resume"
                            name="Resume"
                        />
                    )}

                    <a
                        href="https://www.linkedin.com/in/andrew-edwards-34a927a5/"
                        type="button"
                        className="rounded-full border-2 border-white text-white leading-normal uppercase hover:scale-110 hover:border-green-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1 justify-center"
                        rel="noopener noreferrer"
                        target="_blank"
                        id="linkedin"
                        data-tip
                        data-for="linkedin"
                    >
                        <BsLinkedin
                            className="w-4 h-full mx-auto ae-links"
                            color="lime"
                        />
                    </a>
                    {isMounted && (
                        <Hover
                            backgroundColor="#3EB143"
                            textColor="black"
                            id="linkedin"
                            name="LinkedIn"
                        />
                    )}

                    <a
                        href="https://github.com/andrew87e"
                        type="button"
                        className="rounded-full border-2 border-white text-white leading-normal uppercase hover:scale-110 hover:border-green-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1 justify-center"
                        rel="noopener noreferrer"
                        target="_blank"
                        id="github"
                        data-tip
                        data-for="github"
                    >
                        <AiFillGithub
                            className="w-4 h-full mx-auto ae-links"
                            color="lime"
                        />
                    </a>
                    {isMounted && (
                        <Hover
                            backgroundColor="#3EB143"
                            textColor="black"
                            id="github"
                            name="GitHub"
                        />
                    )}
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
            </div>
        </footer>
    );
};
