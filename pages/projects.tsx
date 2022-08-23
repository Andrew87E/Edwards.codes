import {
    Jumbotron,
    ProjectCards,
    Page,
    ParticlesContainer,
} from "../Components";
import React from "react";
import { GetStaticProps } from "next";
import { TbApi, TbBrandJavascript } from "react-icons/tb";
import { FaReact, FaSass, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";

const Projects: GetStaticProps = () => {
    return (
        <>
            <ParticlesContainer />
            <Page
                currentPage="Projects"
                meta={{ desc: "Check out my work so far!" }}
            >
                <section className="inline-flex flex-wrap w-full min-h-full mt-14">
                    <ProjectCards
                        project="Password Generator"
                        desc="A simple JavaScript Password Generator"
                        deployUrl="https://andrew87e.github.io/Password-Generator/"
                        alt="github link"
                        img="https://github.com/Andrew87E/Password-Generator/blob/main/assets/images/Password_Generator_.gif?raw=true"
                        github="https://github.com/Andrew87E/password-generator"
                    >
                        <FaHtml5 />
                        <FaCss3Alt />
                        <TbBrandJavascript />
                    </ProjectCards>
                    <ProjectCards
                        project="Password Generator"
                        desc="A simple JavaScript Password Generator"
                        deployUrl="https://andrew87e.github.io/Password-Generator/"
                        alt="github link"
                        img="https://github.com/Andrew87E/Password-Generator/blob/main/assets/images/Password_Generator_.gif?raw=true"
                        github="https://github.com/Andrew87E/password-generator"
                    >
                        <FaHtml5 />
                        <FaCss3Alt />
                        <TbBrandJavascript />
                    </ProjectCards>
                    <ProjectCards
                        project="Password Generator"
                        desc="A simple JavaScript Password Generator"
                        deployUrl="https://andrew87e.github.io/Password-Generator/"
                        alt="github link"
                        img="https://github.com/Andrew87E/Password-Generator/blob/main/assets/images/Password_Generator_.gif?raw=true"
                        github="https://github.com/Andrew87E/password-generator"
                    >
                        <FaHtml5 />
                        <FaCss3Alt />
                        <TbBrandJavascript />
                    </ProjectCards>
                    <ProjectCards
                        project="Password Generator"
                        desc="A simple JavaScript Password Generator"
                        deployUrl="https://andrew87e.github.io/Password-Generator/"
                        alt="github link"
                        img="https://github.com/Andrew87E/Password-Generator/blob/main/assets/images/Password_Generator_.gif?raw=true"
                        github="https://github.com/Andrew87E/password-generator"
                    >
                        <FaHtml5 />
                        <FaCss3Alt />
                        <TbBrandJavascript />
                    </ProjectCards>
                    <ProjectCards
                        project="Password Generator"
                        desc="A simple JavaScript Password Generator"
                        deployUrl="https://andrew87e.github.io/Password-Generator/"
                        alt="github link"
                        img="https://github.com/Andrew87E/Password-Generator/blob/main/assets/images/Password_Generator_.gif?raw=true"
                        github="https://github.com/Andrew87E/password-generator"
                    >
                        <FaHtml5 />
                        <FaCss3Alt />
                        <TbBrandJavascript />
                    </ProjectCards>
                </section>
            </Page>
        </>
    );
};

export default Projects;
