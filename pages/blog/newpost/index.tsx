import { GetStaticProps } from "next";
import React from "react";
import { BlogCards, Snow, Page, NewPost } from "../../../Components";


const Blog: GetStaticProps = () => {


  return (
    <>
      <Snow />
      <Page
      currentPage="New Post"
      meta={{ desc: "Make a New Post" }}
      >
      <NewPost />
      </Page>
    </>
  );
};

export default Blog;

