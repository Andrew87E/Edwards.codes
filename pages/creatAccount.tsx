import { GetStaticProps } from "next";
import React from "react";
import { Footer, Navbar, Jumbotron, Hero, Intro, FavProjects, ParticlesContainer } from "../Components";


const createAccount: GetStaticProps = () => {

    return(
        <>
        <ParticlesContainer />
        <Navbar />
        <div>
            <h1>
                This Page is Under Construction
            </h1>
        </div>
        <Footer />
        </>

    )
}


export default createAccount
