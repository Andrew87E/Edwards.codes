import { GetStaticProps } from "next";
import React from "react";
import {
    Container,
    Hero,
    ParticlesContainer,
    Page,
    BetterLetters,
    Parallax,
} from "../Components";

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
                <Container />
                <section className="inline-flex bg-transparent drop-shadow-md min-h-min mr-1 overflow-hidden min-w-min">
                    <article className="text-white">
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
                <Hero />
            </Page>
        </>
    );
};

export default Home;
