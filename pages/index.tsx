import { GetStaticProps } from "next";
import React from "react";
import { Footer, Navbar, Jumbotron, Hero, Intro, FavProjects, ParticlesContainer, Page } from "../Components";



const Home: GetStaticProps = () => {

  return (
    <>
      <Page currentPage="Home" meta={{ desc: "I'm a passionate developer interested in coding in every language" }}>
      {/* <ParticlesContainer /> */}
      <Jumbotron />
      <Intro />
      <Hero />
      </Page>
    </>
  );
};

export default Home;
