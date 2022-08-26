import React from "react";
import { BetterLetters } from "../letters/betterletters";

type Props = {};

export const Contact = (props: Props) => {
    return (
        <div className=" border h-96 mt-28 flex block flex-wrap">
            <article className="w-full justify-center text-center text-5xl ">
                <h1 className="text-lime-500">Drop me a line!</h1>
            </article>
            <section className="justify-center w-full border-lime-600 text-center block text-white">
                <div className="py-6 px-6 lg:px-8">
                    <h3 className="mb-10 text-center font-medium text-white dark:text-white">
                        <BetterLetters 
                        words="Drop me a line!"
                        />
                    </h3>
                    <form className="space-y-6" action="#">
                        <label
                            htmlFor="Author"
                            className="inline-block text-sm font-medium text-gray-200 "
                        >
                            {"Author".split("").map((letter, index) => {
                                return (
                                    <span
                                        key={index}
                                        className="cursor-default transition-all duration-700 hover:duration-100 hover:scale-125 hover:text-lime-500 text-white text-lg"
                                    >
                                        {letter}
                                    </span>
                                );
                            })}
                        </label>
                        <input
                            type="text"
                            name="author"
                            className="border bg-transparent border-lime-500 text-white text-sm rounded-full focus:ring-lime-500 focus:border-lime-500 block h-16 resize-y w-full md:w-8/12 p-2.5"
                            placeholder="Author (Plain Text)"
                            id="author"
                            max="100"
                            required
                        />
                        <label
                            htmlFor="image link"
                            className="inline-block text-sm font-medium text-gray-200"
                        >
                            {"Title".split("").map((letter, index) => {
                                return (
                                    <span
                                        key={index}
                                        className="cursor-default transition-all duration-700 hover:duration-100 hover:scale-125 hover:text-lime-500 text-white text-lg"
                                    >
                                        {letter}
                                    </span>
                                );
                            })}
                        </label>
                        <input
                            type="text"
                            name="title"
                            className="border bg-transparent border-lime-500 text-white text-sm rounded-full focus:ring-lime-500 focus:border-lime-500 block h-16 resize-y w-full md:w-8/12 p-2.5"
                            placeholder="Title (Plain Text)"
                            max="100"
                            id="title"
                            required
                        />
                        <div className="flex flex-wrap ">
                            <div className="w-full md:w-6/12">
                                <label
                                    className="inline-block mb-2 text-sm font-medium text-gray-200 "
                                    htmlFor="summary"
                                >
                                    {"Summary (Appears on the Card) Max Length 78"
                                        .split("")
                                        .map((letter, index) => {
                                            return (
                                                <span
                                                    key={index}
                                                    className="indent-7 cursor-default transition-all duration-700 hover:duration-100 hover:scale-125 hover:text-lime-500 text-white text-lg"
                                                >
                                                    {letter}
                                                </span>
                                            );
                                        })}
                                </label>
                                <textarea
                                    name="summary"
                                    className="border bg-transparent border-lime-500 text-white text-sm rounded-3xl resize-y md:resize focus:ring-lime-500 focus:border-lime-500 h-16 w-full mb-16"
                                    placeholder="Summary (Plain Text)"
                                    id="header"
                                    required
                                />
                            </div>

                            <div className="w-full mb-10">
                                <label
                                    className="inline-block mb-2 text-sm font-medium text-gray-200 "
                                    htmlFor="image"
                                >
                                    {"Image Link (Appears on the Card) Must be from Imgur"
                                        .split("")
                                        .map((letter, index) => {
                                            return (
                                                <span
                                                    key={index}
                                                    className="indent-7 cursor-default transition-all duration-700 hover:duration-100 hover:scale-125 hover:text-lime-500 text-white text-lg"
                                                >
                                                    {letter}
                                                </span>
                                            );
                                        })}
                                </label>
                                <input
                                    type="text"
                                    name="image"
                                    className="border bg-transparent border-lime-500 text-white text-sm rounded-full focus:ring-lime-500 focus:border-lime-500 block h-16 resize-y w-full md:w-4/12 p-2.5 "
                                    placeholder="Link Your Image Here"
                                    id="img"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="body"
                                className="block mb-2 text-sm font-medium text-gray-200"
                            >
                                {"Body (Markdown)"
                                    .split("")
                                    .map((letter, index) => {
                                        return (
                                            <span
                                                key={index}
                                                className="indent-7 cursor-default transition-all duration-700 hover:duration-100 hover:scale-125 hover:text-lime-500 text-white text-lg"
                                            >
                                                {letter}
                                            </span>
                                        );
                                    })}
                            </label>
                            <textarea
                                name="body"
                                id="body"
                                placeholder="Write Your Post Here"
                                className="border-lime-500 border bg-transparent text-sm rounded focus:ring-lime-500 focus:border-lime-500 w-full placeholder-white text-white h-96"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-transparent text-white hover:text-white border border-lime-500 hover:bg-lime-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                        >
                            Submit
                        </button>
                    </form>
                </div>{" "}
            </section>
        </div>
    );
};
