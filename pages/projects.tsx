import { Jumbotron, ProjectCards, Page, ParticlesContainer } from "../Components";
import React from "react";
import { GetStaticProps } from "next";

const Projects: GetStaticProps = () => {
    return (
        
        <>
        <ParticlesContainer />
        <Page
            currentPage="Projects"
            meta={{ desc: "Check out my work so far!" }}
        >
            <Jumbotron />
            <ProjectCards
                project="Weather App"
                desc="A simple weather app using the Open Weather API"
                deploy={{ url: 'https://github.com', alt: 'github link' }}
                img=''
                github="https://github.com" 
                />
        </Page>
        </>
    
    );
};

export default Projects;
