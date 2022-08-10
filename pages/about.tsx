import { Footer, Jumbotron, Navbar } from "../Components";
import React from "react";
import { GetStaticProps } from "next";

const About: GetStaticProps = () => {
    return (
        <>
            <Navbar />
            <Jumbotron />

            <Footer />
        </>
    );
};

export default About;
