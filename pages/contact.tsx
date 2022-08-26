import { Contact, Container, Page } from "../Components";
import React from "react";
import { GetStaticProps } from "next";

const About: GetStaticProps = () => {
    return (
        <>
            <Page
            currentPage="About Me"
            meta={{ desc: "Drop me a line!" }}
            >
            <Contact />
            </Page>

        </>
    );
};

export default About;
