import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
        <section className="">
            <div
                key={project}
                className="ae-blog-card hover:scale-105 relative mb-32 lg:mb-20 w-11/12 flex-1 m-5"
            >
                <div>
                    <div className="shadow h-64 rounded-full relative">
                        <Link href={`${github}`} className="href">
                            <a>
                                <Image
                                    src={img}
                                    alt="STUFF"
                                    className="h-full w-full rounded"
                                    layout="fill"
                                    priority
                                    data-mdb-ripple="true"
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="p-6 w-11/12 mx-auto -mt-24 bg-gray-900 rounded-3xl z-20 relative mb-4 text-center">
                        <Link href={`${deployUrl}`} className="hover:underline">
                            <a className="uppercase text-sm text-lime-500 text-center pb-3 bg-transparent">
                                {project}
                            </a>
                        </Link>
                        <p className="text-lg text-white text-center pb-3">
                            {desc}
                        </p>
                        <h3 className="text-sm text-white text-center"></h3>
                        <section className="text-white flex flex-wrap flex-row text-2xl w-full">
                            {childArr.map((children, index) => {
                                return (
                                    <section
                                        key={index}
                                        className="inline-flex hover:scale-90"
                                    >
                                        {children}
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
