import { GetStaticProps } from "next";
import React from "react";
import { Footer, Navbar, Jumbotron, Hero, Intro, FavProjects } from "../Components";


const Home: GetStaticProps = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Intro />
      <FavProjects />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
