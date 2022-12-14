import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Comments, Container, Page } from "../../../Components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BlogType } from "../../../types/blog";
import moment from "moment";
import { useUser } from "@auth0/nextjs-auth0";

export const BlogPost: GetStaticProps = () => {
    const { user } = useUser();
    const [blogPost, setBlogPost] = useState<BlogType[]>([]);
    const router = useRouter();
    const thisPage = router.query;
    const pageId = thisPage.id;

    useEffect(() => {
        axios.get(`/api/blog/get/${pageId}`).then((res) => {
            const response = res.data;
            setBlogPost(response);
        });
    }, [pageId]);

    const renderPost = () => {
        return Array.from(blogPost).map((blog: BlogType) => {
            const postDate = moment(blog.postDate).format("MM-DD-YYYY");
            return (
                <div key={blog._id}>
                    <section className="min-h-screen m-5">
                        <article className="w-full text-white flex text-center">
                            <h1 className="w-full font-serif text-6xl">
                                {blog.title}
                            </h1>
                        </article>
                        <article className="w-full my-20 flex flex-wrap">
                            <div className="text-white w-8/12 text-left justify-center m-auto">
                                <div>
                                    {
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: blog.body,
                                            }}
                                        ></div>
                                    }
                                </div>
                            </div>
                        </article>
                        <section className="m-20 flex flex-wrap h-14">
                            <article className="mr-4">{postDate}</article>
                        </section>
                        {/* Make this dynamic based on comments */}
                        <section>
                            <Comments comments={blog.comments} />
                        </section>
                    </section>
                    <Container />
                </div>
            );
        });
    };

    const handleDelete = () => {
        axios.delete(`/api/blog/delete/${pageId}`).then((res) => {});
        location.replace("/blog");
    };

    return (
        <>
            <Page currentPage="Blog" meta={{ desc: "My blog post!" }}>
                <section className="w-full h-full text-white mt-36 p-4">
                    {renderPost()}
                </section>
                {user?.email === blogPost[0]?.userEmail ||
                user?.email === "andrew@edwards.codes" ? (
                    <button
                        className="bg-transparent font-sans text-lg rounded-full hover:bg-red-600 p-2 text-white"
                        onClick={() => handleDelete()}
                        key={Math.floor(Math.random() * 69)}
                    >
                        Delete Post
                    </button>
                ) : null}
            </Page>
        </>
    );
};

export default BlogPost;
