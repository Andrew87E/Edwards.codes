import { GetStaticProps } from "next";
import React from "react";
import { Footer, Navbar, Jumbotron, Hero, BlogCards } from "../../Components";


const Blog: GetStaticProps = () => {


  return (
    <>
      <Navbar />
      <BlogCards />
      <Footer />
    </>
  );
};

export default Blog;

