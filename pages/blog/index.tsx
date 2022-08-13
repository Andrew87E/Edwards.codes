import { GetStaticProps } from "next";
import React from "react";
import { Footer, Navbar, Jumbotron, Hero, BlogCards, Snow } from "../../Components";


const Blog: GetStaticProps = () => {


  return (
    <>
      <Snow />
      <Navbar />
      <BlogCards />
      <Footer />
    </>
  );
};

export default Blog;

