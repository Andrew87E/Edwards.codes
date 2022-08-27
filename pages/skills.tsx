import { BetterLetters, Container, Header, Page, ParticlesContainer, Skills } from "../Components";
import React from "react";
import { GetStaticProps } from "next";

const Projects: GetStaticProps = () => {
    return (
        <>
            <ParticlesContainer />
            <Page
                currentPage="Skills"
                meta={{
                    desc: "These are some of the skills I've been working on!",
                }}
            >
                <Header
                custom="h-96 text-white" 
                title={<BetterLetters 
                words="My Skills"
                custom="text-6xl"
                />}
                />
                <Skills />
                <Container />
            </Page>
        </>
    );
};

// seo

export default Projects;
