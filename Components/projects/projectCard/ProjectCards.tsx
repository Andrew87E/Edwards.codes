import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";

type ProjectProps = {
    project: string;
    desc: string;
    github?: string;
    deployUrl?: string;
    alt: string;
    img: string;
    children?: JSX.Element | JSX.Element[];
};

export const ProjectCards = ({
    project,
    desc,
    github,
    deployUrl,
    img,
    alt,
    children,
}: ProjectProps) => {
    const childArr: any[] = [];
    childArr.push(children);
    return (
        <section className="w-10/12 md:w-96 m-5">
            <div
                key={project}
                className="ae-blog-card hover:scale-105 relative mb-20 flex-1 m-5 w-full"
            >
                <div>
                    <div className="h-64 relative w-full border rounded-3xl border-lime-600">
                        <Link href={`${deployUrl}`} className="href">
                            <a target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={img}
                                    alt="Github Link with Image"
                                    layout="fill"
                                    priority
                                    data-mdb-ripple="true"
                                    className="rounded-3xl border"
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="p-6 w-11/12 mx-auto -mt-24 bg-gray-900 rounded-3xl z-20 relative mb-4 text-center">
                        <Link
                            href={`${github}`}
                            className="hover:underline w-full"
                        >
                            <a
                                className="uppercase text-sm text-lime-500 text-center pb-3 bg-transparent inline-flex hover:underline hover:scale-95"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiOutlineGithub className="justify-start h-5 w-4 mr-4" />
                                {project}
                                <AiOutlineGithub className="justify-start h-5 w-4 ml-4" />
                            </a>
                        </Link>
                        <p className="text-lg text-white text-center pb-3 h-20">
                            {desc}
                        </p>
                        <h3 className="text-sm text-white text-center"></h3>
                        <section className="text-white flex flex-wrap flex-row text-2xl w-full">
                            {childArr.map((chirrens, index) => {
                                return (
                                    <section
                                        key={index}
                                        className="inline-flex"
                                    >
                                        {chirrens}
                                    </section>
                                );
                            })}
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
};
