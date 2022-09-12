import React from "react";
import Image from "next/image";

export const Github = () => {
    return (
        <div className="fixed right-0 bottom-0 md:bottom-0 w-36 md:w-64 md:right-0 text-center sm:text-right sm:-mt-12 z-50">
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
    );
};
