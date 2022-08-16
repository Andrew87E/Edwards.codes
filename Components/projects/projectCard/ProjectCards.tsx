import React, { useState } from "react";
import Image from "next/image";
import { URL, Url } from "url";

type ProjectProps = {
  project: string;
  desc: string;
  github?: string;
  deploy: {
    url?: string | Url;
    alt?: string | Url;
  };
  img: string;
  children?: JSX.Element | JSX.Element[];
};

export const ProjectCards = ({
  project,
  desc,
  github,
  deploy: { url, alt },
  img,
  children,
}: ProjectProps) => {
  return (
    <section className="inline-flex flex-wrap ae-project-card">
      {/* 1st card */}
      <div className="transform transition duration-500 hover:scale-105 flex justify-center bg-black m-10">
        <div className="rounded-lg shadow-lg bg-black max-w-sm">
          <a
            href={github}
            rel="noopener noreferrer"
            target="_blank"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="bg-black"
          >
            <Image
              className=" rounded-t-lg bg-black"
              src={img}
              height="250"
              width="400"
              alt="My Project"
            />
          </a>
          <div className="p-6 bg-black">
            <h5 className="text-gray-900 text-xl font-medium mb-2 bg-transparent">
              {project}
            </h5>
            <p className="text-gray-700 text-base mb-4 bg-transparent">
              {desc}
            </p>
          {children}
          </div>
        </div>
      </div>
    </section>
  );
};
