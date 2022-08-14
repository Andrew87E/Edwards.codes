import { GetStaticProps } from "next";
import React from "react";
import { Footer, Navbar, Jumbotron, Hero, Intro, FavProjects, ParticlesContainer, Page } from "../Components";


const createAccount: GetStaticProps = () => {

    return(
        <>
        <ParticlesContainer />
        <Page
        currentPage="createAccount"
        meta={{ desc: "Create an account to leave a comment!" }}
        >
        <div>
            <h1>
                This Page is Under Construction
            </h1>
        </div>
        </Page>
        </>

    )
}


export default createAccount
