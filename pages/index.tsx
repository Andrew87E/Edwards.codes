import { GetStaticProps } from "next";
import React from "react";
import { Footer, Navbar, Jumbotron, Hero } from "../Components";

const Home: GetStaticProps = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
