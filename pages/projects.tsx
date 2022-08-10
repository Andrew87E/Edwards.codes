import { Footer, Jumbotron, ProjectCards, Navbar } from "../Components";
import React from "react";
import { GetStaticProps } from "next";

const Projects: GetStaticProps = () => {
    return (
        <>
            <Navbar />
            <Jumbotron />
            <Jumbotron />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <Footer />
        </>
    );
};

export default Projects;
