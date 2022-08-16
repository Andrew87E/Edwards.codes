import { GetStaticProps } from "next";
import React from "react";
import { BlogCards, Snow, LoginForm, Page } from "../../Components";


const Blog: GetStaticProps = () => {


  return (
    <>
      <Snow />
      <Page
      currentPage="Blog"
      meta={{ desc: "My blog page!" }}
      >
      <BlogCards />
      <LoginForm />
      </Page>
    </>
  );
};

export default Blog;

