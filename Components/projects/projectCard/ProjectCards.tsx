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
                    <div className="shadow h-64 rounded-full relative w-full">
                        <Link href={`${deployUrl}`} className="href">
                            <a>
                                <Image
                                    src={img}
                                    alt="Github Link with Image"
                                    layout="fill"
                                    priority
                                    data-mdb-ripple="true"
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="p-6 w-11/12 mx-auto -mt-24 bg-gray-900 rounded-3xl z-20 relative mb-4 text-center">
                        <Link href={`${github}`} className="hover:underline">
                            <a className="uppercase text-sm text-lime-500 text-center pb-3 bg-transparent">
                                {project}
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
                                        className="inline-flex hover:scale-90"
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
