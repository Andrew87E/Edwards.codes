import { BetterLetters, Page } from "../Components";
import React from "react";
import { GetStaticProps } from "next";

const ContactMe: GetStaticProps = () => {
    return (
        <>
            <Page currentPage="Contact" meta={{ desc: "Drop me a line!" }}>
                <div className="flex flex-wrap min-h-screen">
                    <article className="mt-20 w-full justify-center text-center">
                        <BetterLetters
                            words="Drop me a line!"
                            custom="text-7xl ae-text-outline"
                        />
                    </article>
                    <section className="w-full border-lime-600 text-white flex flex-wrap flex-row justify-center">
                        <div className="py-6 px-6 lg:px-8 w-8/12 rounded-3xl border bg-black ">
                            <h3 className="mb-10 text-center font-medium text-white">
                                <BetterLetters
                                    words="Let's build something Awesome!"
                                    custom="text-4xl ae-text-outline-small"
                                />
                            </h3>
                            <form
                                className="space-y-6 h-full p-6"
                                action="https://public.herotofu.com/v1/12b019d0-2940-11ed-a7a0-3f26160640a2"
                                method="POST"
                                // onSubmit={(e) => handleSubmit(e)}
                            >
                                <input
                                    type="text"
                                    name="Name"
                                    className="border bg-black border-lime-500 text-white text-sm rounded-full focus:ring-lime-500 focus:border-lime-500 block h-20 resize-y w-full md:w-8/12 p-6 autofill:bg-black"
                                    placeholder="Name"
                                    id="name"
                                    max="100"
                                    required
                                    maxLength={30}
                                />
                                <input
                                    type="text"
                                    name="Email"
                                    className="border bg-black border-lime-500 text-white text-sm rounded-full focus:ring-lime-500 focus:border-lime-500 block h-20 resize-y w-full md:w-8/12 p-6 autofill:bg-black"
                                    placeholder="Email"
                                    max="100"
                                    id="email"
                                    required
                                    maxLength={65}
                                    title="Email should be in the format Example@Example.Com"
                                />
                                <div className="flex flex-wrap ">
                                    <div className="w-full md:w-9/12">
                                        <textarea
                                            name="Message"
                                            className="border bg-black border-lime-500 text-white text-sm rounded-3xl h-96 resize-y focus:ring-lime-500 focus:border-lime-500 w-full mb-16 p-5"
                                            placeholder="Message"
                                            id="message"
                                            required
                                            maxLength={280}
                                        />
                                        <input
                                            className="border p-2 border-lime-500 hover:bg-gray-900 text-white rounded-full w-20 h-10 cursor-pointer"
                                            type="submit"
                                            value="Submit"
                                        ></input>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </Page>
        </>
    );
};

export default ContactMe;
