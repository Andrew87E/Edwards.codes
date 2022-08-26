import { Container, Page } from "../Components";
import React from "react";
import { GetStaticProps } from "next";

const About: GetStaticProps = () => {
    return (
        <>
            <Page
            currentPage="About Me"
            meta={{ desc: "Some info about myself!" }}
            >
            <Container />
            </Page>

        </>
    );
};

export default About;
