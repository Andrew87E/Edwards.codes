import { GetStaticProps } from "next";
import React from "react";
import { Page, BetterLetters, Parallax } from "../Components";

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
                        <BetterLetters
                            words="Web Developer"
                            custom="text-5xl ae-letters"
                        />
                    </article>
                </section>
            </Page>
        </>
    );
};

export default Home;
