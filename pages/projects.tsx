import { Footer, Jumbotron, ProjectCards, Navbar, Page } from "../Components";
import React from "react";
import { GetStaticProps } from "next";

const Projects: GetStaticProps = () => {
    return (

        <Page 
        currentPage="Projects"
        meta={{ desc:"Check out my work so far!" }}
        >
            <Jumbotron />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
        </Page>
    
    );
};

export default Projects;
