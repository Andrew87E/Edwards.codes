import { Jumbotron, ProjectCards, Page, ParticlesContainer } from "../Components";
import React from "react";
import { GetStaticProps } from "next";
import { TbApi } from "react-icons/tb";
import { FaReact, FaSass, FaGithub, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiJavascript, SiTypescript } from 'react-icons/si'


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
                deploy={{ url: 'https://andrew87e.github.io/Open-Weather-App/', alt: 'github link' }}
                img=''
                github="https://github.com/Andrew87E/Open-Weather-App" 
                />
        </Page>
        </>
    
    );
};

export default Projects;
