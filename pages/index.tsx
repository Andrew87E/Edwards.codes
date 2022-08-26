import { GetStaticProps } from "next";
import React from "react";
import { Footer, Navbar, Container, Hero, Intro, FavProjects, ParticlesContainer, Page } from "../Components";


const Home: GetStaticProps = () => {

  return (
    <>
      <ParticlesContainer />
      <Page currentPage="Home" 
      meta={{ desc: "I'm a passionate developer interested in coding in every language" }}>
      <Container />
      <Intro />
      <Hero />
      </Page>
    </>
  );
};

export default Home;
