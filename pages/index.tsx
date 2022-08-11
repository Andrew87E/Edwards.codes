import { GetStaticProps } from "next";
import React from "react";
import { Footer, Navbar, Jumbotron, Hero, Intro, FavProjects, ParticlesContainer } from "../Components";



const Home: GetStaticProps = () => {

  return (
    <>
      <ParticlesContainer />
      <Navbar />
      <Jumbotron />
      <Intro />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
