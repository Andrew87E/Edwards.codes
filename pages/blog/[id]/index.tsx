import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Comments, Jumbotron, Page } from "../../../Components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BlogType } from "../../../types/blog";
import moment from "moment";
import { useUser } from "@auth0/nextjs-auth0";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
                <>
                    <section key={blog._id} className="border min-h-screen m-5">
                        <article className="w-full text-white flex text-center">
                            <h1 className="w-full font-serif text-6xl">
                                {blog.title}
                            </h1>
                        </article>
                        <article className="w-full my-20 flex flex-wrap">
                            <div className="text-white w-8/12 text-left justify-center m-auto">
                                <Markdown remarkPlugins={[remarkGfm]}>
                                    {blog.body}
                                </Markdown>
                            </div>
                        </article>
                        <section className="m-20 flex flex-wrap h-14">
                            <article className="mr-4">{postDate}</article>
                            </section>
                            {/* Make this dynamic based on comments */}
                            <section className="border h-56">

                            <Link
                                href="/post/[id]/[comment]"
                                as={`/post/${blog._id}/first-comment`}
                                >
                                <a>
                                    Display Comments Here
                                </a>
                            </Link>
                                </section>
                        <section className="text-white border">
                            Add Comment
                            <form>
                                <label htmlFor="name" className="text-lime-500">
                                    Name
                                </label>
                                <input
                                    name="name"
                                    id="name"
                                    placeholder="Your Name"
                                    className="border bg-transparent border-lime-500 text-white text-sm rounded-full focus:ring-lime-500 focus:border-lime-500 block h-16 resize-y w-full md:w-4/12 p-2.5 "
                                ></input>
                                <label htmlFor="name" className="text-lime-500">
                                    Comment
                                </label>
                                <textarea
                                    name="comment"
                                    id="comment"
                                    placeholder="Your Name"
                                    className="border bg-transparent border-lime-500 text-white text-sm rounded-3xl focus:ring-lime-500 focus:border-lime-500 block h-16 resize w-full md:w-4/12 p-2.5 "
                                ></textarea>
                            </form>
                            <button className="border rounded-full ">
                                Submit
                            </button>
                        </section>
                    </section>
                    <Jumbotron />
                </>
            );
        });
    };

    const deleteButton = () => {
        if (user?.email === blogPost[0]?.userEmail) {
            return (
                <button
                    className="bg-transparent border font-sans text-lg rounded-full hover:bg-red-600 p-2 text-white"
                    onClick={() => handleDelete()}
                    key={Math.floor(Math.random() * 69)}
                >
                    Delete Post
                </button>
            );
        }
    };

    const handleDelete = () => {
        axios.delete(`/api/blog/delete/${pageId}`).then((res) => {
            console.log(res);
            console.log(`POST ${pageId} DELETED`);
        });
    };

    return (
        <>
            <Page currentPage="Blog" meta={{ desc: "My blog post!" }}>
                <article className="w-full h-full text-white mt-20">
                    {renderPost()}
                </article>
                {deleteButton()}
            </Page>
        </>
    );
};

export default BlogPost;
