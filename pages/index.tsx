import { GetStaticProps } from "next";
import React from "react";
import { Page, BetterLetters, Parallax, Animated } from "../Components";

const Home: GetStaticProps = () => {
    return (
        <>
            <Parallax />
            <Page
                currentPage="Home"
                meta={{
                    desc: "I'm a passionate developer interested in coding in every language",
                }}
            >
                <section className="inline-flex bg-transparent drop-shadow-md min-h-min mr-1 overflow-hidden min-w-min h-screen">
                    <article className="text-white self-center">
                        <BetterLetters
                            words="Andrew"
                            custom="text-8xl ae-letters"
                        />
                        <br />
                        <BetterLetters
                            words="Edwards"
                            custom="text-8xl ae-letters"
                        />
                        <br />
                        <article>
                            <Animated
                                line1={
                                    <BetterLetters
                                        words="Front-End Web"
                                        custom="text-5xl ae-text-outline-small ae-ranch"
                                    />
                                }
                                line2={
                                    <BetterLetters
                                        words="Back-End Web"
                                        custom="text-5xl ae-text-outline-small ae-ranch"
                                    />
                                }
                                line3={
                                    <BetterLetters
                                        words="Full-Stack Web"
                                        custom="text-5xl ae-text-outline-small ae-ranch"
                                    />
                                }
                                line4={
                                    <BetterLetters
                                        words="Mobile"
                                        custom="text-5xl ae-text-outline-small ae-ranch"
                                    />
                                }
                            />{" "}
                            <BetterLetters
                                words="Developer"
                                custom="text-5xl ae-text-outline-small ae-ranch"
                            />
                        </article>
                    </article>
                </section>
            </Page>
        </>
    );
};

export default Home;
