import { GetStaticProps } from "next";
import React from "react";
import { Footer, Navbar, Jumbotron, Hero } from "../Components";

const Blog: GetStaticProps = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Footer />
    </>
  );
};

export default Blog;

