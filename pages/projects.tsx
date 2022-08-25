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
import { DiJqueryLogo } from 'react-icons/di'

const Projects: GetStaticProps = () => {
    return (
        <>
            <ParticlesContainer />
            <Page
                currentPage="Projects"
                meta={{ desc: "Check out my work so far!" }}
            >
                <section className="flex inline-flex flex-wrap mt-28 w-full justify-center">
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
                        project="Javascript Quiz"
                        desc="A simple JavaScript Quiz using jQuery"
                        deployUrl="https://andrew87e.github.io/Coding-Quiz/"
                        alt="github link"
                        img="https://github.com/Andrew87E/Coding-Quiz/raw/main/assets/images/ezgif.com-gif-maker.gif?raw=true"
                        github="https://andrew87e.github.io/Coding-Quiz/"
                        >
                        <FaHtml5 />
                        <FaCss3Alt />
                        <TbBrandJavascript />
                        <DiJqueryLogo />
                    </ProjectCards>
                    <ProjectCards
                        project="Day Planner"
                        desc="A simple JavaScript Day Planner using jQuery and Bootstrap"
                        deployUrl="https://andrew87e.github.io/day-planner/"
                        alt="github link"
                        img="https://camo.githubusercontent.com/b068387b34d0c782d5b6bb89492fae3d802b520b90c3cdc7d4d6d4921913c261/68747470733a2f2f692e696d6775722e636f6d2f726e42337a48432e706e67"
                        github="https://github.com/Andrew87E/day-planner"
                    >
                        <FaHtml5 />
                        <FaCss3Alt />
                        <TbBrandJavascript />
                        <DiJqueryLogo />
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
