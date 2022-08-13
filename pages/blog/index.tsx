import { GetStaticProps } from "next";
import React from "react";
import { Footer, Navbar, Jumbotron, Hero, BlogCards, Snow, LoginForm } from "../../Components";


const Blog: GetStaticProps = () => {


  return (
    <>
      <Snow />
      <Navbar />
      <BlogCards />
      <LoginForm />
      <Footer />
    </>
  );
};

export default Blog;

