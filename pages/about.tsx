import { Jumbotron, Page } from "../Components";
import React from "react";
import { GetStaticProps } from "next";

const About: GetStaticProps = () => {
    return (
        <>
            <Page
            currentPage="About Me"
            meta={{ desc: "Some info about myself!" }}
            >
            <Jumbotron />
            </Page>

        </>
    );
};

export default About;
