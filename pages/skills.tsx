import { Container, Page, Skills } from "../Components";
import React from "react";
import { GetStaticProps } from "next";

const Projects: GetStaticProps = () => {
    return (
        <Page
            currentPage="Skills"
            meta={{
                desc: "These are some of the skills I've been working on!",
            }}
        >
            <Skills />
            <Container />
        </Page>
    );
};

// seo

export default Projects;
