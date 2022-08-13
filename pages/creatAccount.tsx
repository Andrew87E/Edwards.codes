import { GetStaticProps } from "next";
import React from "react";
import { Footer, Navbar, Jumbotron, Hero, Intro, FavProjects, ParticlesContainer } from "../Components";


const createAccount: GetStaticProps = () => {

    return(
        <>
        <ParticlesContainer />
        <Navbar />
        <Footer />
        </>

    )
}


export default createAccount
