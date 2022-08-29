import {
    BetterLetters,
    Container,
    Header,
    Page,
    Links,
    Skills,
    Snow,
} from "../Components";
import React from "react";
import { GetStaticProps } from "next";

const Projects: GetStaticProps = () => {
    return (
        <>
            <Snow />
            <Page
                currentPage="Skills"
                meta={{
                    desc: "These are some of the skills I've been working on!",
                }}
            >
                <section className="text-center w-full">
                    <Header
                        custom="mb-6 text-white ae-title-letters"
                        title={
                            <BetterLetters
                                words="My Skills"
                                custom="text-9xl"
                            />
                        }
                    />
                </section>
                <Skills />
                <Container />
            </Page>
        </>
    );
};

export default Projects;
