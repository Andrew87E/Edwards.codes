import {
    Jumbotron,
    ProjectCards,
    Page,
    ParticlesContainer,
} from "../Components";
import React from "react";
import { GetStaticProps } from "next";
import { TbApi, TbBrandJavascript, TbBrandBootstrap } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaReact, FaSass, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiTailwindcss,
    SiMongodb,
    SiYarn,
    SiVite,
    SiVercel,
    SiNextdotjs,
    SiBulma,
} from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";

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
                        alt="Deployed Link"
                        img="https://github.com/Andrew87E/Password-Generator/blob/main/assets/images/Password_Generator_.gif?raw=true"
                        github="https://github.com/Andrew87E/password-generator"
                    >
                        <FaHtml5 className="mx-1" />
                        <FaCss3Alt className="mx-1" />
                        <TbBrandJavascript className="mx-1" />
                    </ProjectCards>
                    <ProjectCards
                        project="Javascript Quiz"
                        desc="A simple JavaScript Quiz using jQuery"
                        deployUrl="https://andrew87e.github.io/Coding-Quiz/"
                        alt="Deployed Link"
                        img="https://github.com/Andrew87E/Coding-Quiz/raw/main/assets/images/ezgif.com-gif-maker.gif?raw=true"
                        github="https://github.com/andrew87e/Coding-Quiz/"
                    >
                        <FaHtml5 className="mx-1" />
                        <FaCss3Alt className="mx-1" />
                        <TbBrandJavascript className="mx-1" />
                        <DiJqueryLogo className="mx-1" />
                    </ProjectCards>
                    <ProjectCards
                        project="Day Planner"
                        desc="A simple JavaScript Day Planner using jQuery and Bootstrap"
                        deployUrl="https://andrew87e.github.io/day-planner/"
                        alt="Deployed Link"
                        img="https://camo.githubusercontent.com/b068387b34d0c782d5b6bb89492fae3d802b520b90c3cdc7d4d6d4921913c261/68747470733a2f2f692e696d6775722e636f6d2f726e42337a48432e706e67"
                        github="https://github.com/Andrew87E/day-planner"
                    >
                        <FaHtml5 className="mx-1" />
                        <FaCss3Alt className="mx-1" />
                        <TbBrandJavascript className="mx-1" />
                        <DiJqueryLogo className="mx-1" />
                    </ProjectCards>
                    <ProjectCards
                        project="Note Taker"
                        desc="A simple JavaScript Note Taking App"
                        deployUrl="https://ideal-waffle.herokuapp.com/"
                        alt="Deployed Link"
                        img="https://i.imgur.com/IAj1cTF.png"
                        github="https://github.com/Andrew87E/ideal-waffle-notes"
                    >
                        <FaHtml5 className="mx-1" />
                        <FaCss3Alt className="mx-1" />
                        <TbBrandJavascript className="mx-1" />
                        <SiNodedotjs className="mx-1" />
                        <SiExpress className="ml-1" />
                        <TbApi className="mr-1" />
                    </ProjectCards>
                    <ProjectCards
                        project="GitHub Readme Generator CLI"
                        desc="A simple JavaScript Readme Generator CLI using Nodejs and Inquirer"
                        deployUrl="https://andrew87e.github.io/Password-Generator/"
                        alt="Deployed Link"
                        img="https://i.imgur.com/e87N5Ct.png"
                        github="https://github.com/Andrew87E/Readme-Generator"
                    >
                        <FaHtml5 className="mx-1" />
                        <FaCss3Alt className="mx-1" />
                        <TbBrandJavascript className="mx-1" />
                        <SiNodedotjs className="mx-1" />
                    </ProjectCards>
                    <ProjectCards
                        project="Weather App"
                        desc="A weather forecast app using the Open Weather API"
                        deployUrl="https://andrew87e.github.io/Open-Weather-App/"
                        alt="Deployed Link"
                        img="https://camo.githubusercontent.com/0310448659a6ba6e808635fb89cb81aa71a5a7041018ec99e050ffdc2d671f52/68747470733a2f2f692e696d6775722e636f6d2f53766e617053482e6a7067"
                        github="https://github.com/Andrew87E/Open-Weather-App"
                    >
                        <FaHtml5 className="mx-1" />
                        <FaSass className="mx-1" />
                        <TbBrandJavascript className="mx-1" />
                        <DiJqueryLogo className="mx-1" />
                        <TbBrandBootstrap className="mx-1" />
                        <TiWeatherPartlySunny className="ml-1" />
                        <TbApi className="mr-1" />
                    </ProjectCards>
                    <ProjectCards
                        project="Road Trip planner!"
                        desc="Get the gas cost of your trip, directions, and a new playlist!"
                        deployUrl="https://andrew87e.github.io/Travel-Planner/"
                        alt="Deployed Link"
                        img="https://user-images.githubusercontent.com/107494937/184215536-2ecdfc8d-1968-4eec-b3e7-9c745902b086.gif"
                        github="https://github.com/Andrew87E/Travel-Planner"
                    >
                        <FaHtml5 className="mx-1" />
                        <FaSass className="mx-1" />
                        <TbBrandJavascript className="mx-1" />
                        <DiJqueryLogo className="mx-1" />
                        <SiBulma className="mx-1" />
                        <FcGoogle className="ml-1" />
                        <TbApi />
                    </ProjectCards>
                    <ProjectCards
                        project="Team generator"
                        desc="A weather forecast app using the Open Weather API"
                        deployUrl="https://react-team-ae-genie.herokuapp.com/"
                        alt="Deployed Link"
                        img="https://camo.githubusercontent.com/62551792eb8805859e6d38755bde2f653a1e98c5ef0b71386e45c39faf49df4d/68747470733a2f2f692e696d6775722e636f6d2f39343245374d462e706e67"
                        github="https://github.com/Andrew87E/react-team-gen"
                    >
                        <SiYarn className="mx-1" />
                        <FaSass className="mx-1" />
                        <FaReact className="mx-1" />
                        <SiTypescript className="mx-1" />
                        <DiJqueryLogo className="mx-1" />
                        <SiTailwindcss className="mx-1" />
                        <SiMongodb className="mx-1" />
                        <SiVite className="mx-1" />
                        <SiExpress className="ml-1" />
                        <TbApi className="mr-1" />
                    </ProjectCards>
                </section>
            </Page>
        </>
    );
};

export default Projects;
