import { GetStaticProps } from "next";
import React from "react";
import { BlogCards, Snow, Page } from "../../Components";
import { useUser } from "@auth0/nextjs-auth0";

const Blog: GetStaticProps = () => {
const { user } = useUser()

  return (
    <>
      <Snow />
      <Page
      currentPage="Blog"
      meta={{ desc: "My blog page!" }}
      >
      <BlogCards />
      </Page>
    </>
  );
};

export default Blog;

