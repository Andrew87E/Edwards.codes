import React from "react";
import { BetterLetters } from "../letters/betterletters";

type Props = {};

export const Contact = (props: Props) => {
    return (
        <div className="flex block flex-wrap h-screen">
            <article className="mt-20 w-full justify-center text-center text-5xl">
                <BetterLetters words="Drop me a line!" />
            </article>
            <section className="justify-center w-full border-lime-600 text-center block text-white">
                <div className="py-6 px-6 lg:px-8">
                    <h3 className="mb-10 text-center font-medium text-white"></h3>
                    <form className="space-y-6" action="#">
                        <input
                            type="text"
                            name="Name"
                            className="border bg-transparent border-lime-500 text-white text-sm rounded-full focus:ring-lime-500 focus:border-lime-500 block h-16 resize-y w-full md:w-8/12 p-2.5"
                            placeholder="Name"
                            id="author"
                            max="100"
                            required
                        />
                        <input
                            type="text"
                            name="Email"
                            className="border bg-transparent border-lime-500 text-white text-sm rounded-full focus:ring-lime-500 focus:border-lime-500 block h-16 resize-y w-full md:w-8/12 p-2.5"
                            placeholder="Email"
                            max="100"
                            id="title"
                            required
                        />
                        <div className="flex flex-wrap ">
                            <div className="w-full md:w-6/12">
                                <textarea
                                    name="Message"
                                    className="border bg-transparent border-lime-500 text-white text-sm rounded-3xl resize-y md:resize focus:ring-lime-500 focus:border-lime-500 h-16 w-full mb-16"
                                    placeholder="Message"
                                    id="header"
                                    required
                                />
                            </div>
                        </div>
                    </form>
                </div>{" "}
            </section>
        </div>
    );
};
