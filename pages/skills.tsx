import { Footer, Jumbotron, ProjectCards, Navbar, Page } from "../Components";
import React from "react";
import { GetStaticProps } from "next";

const Projects: GetStaticProps = () => {
    return (
        
            <Page
            currentPage="Skills"
            meta={{ desc: "These are some of the skills I've been working on!" }}
            >


            <Jumbotron />
            </Page>

    );
};



// skills
// html
// css
// js
// ts
// react 
// mongo db
// express
// nodejs
// mysql
// redux
// linux
// git
// firebase
// vercel
// nextjs
// sass
// tailwindcss
// bootstrap
// bash
// jest
// seo
// jquery
// nodejs
// 

export default Projects;
