import React from "react";
import $ from 'jquery'
import moment from 'moment'
import axios from "axios";
import { useRouter } from "next/router";

type comments = [
    {
        body: string;
        date: string;
        author: string;
    },
];


export const Comments: any = (comments: comments) => {
    //map through comments and display them
    const router = useRouter();
    const thisPage = router.query;
    const pageId = thisPage.id;

    const handleSubmit = () => {
    const name = $('#name')
    const body = $('#comment')
    const date = moment()
    
    axios.post(`/api/blog/comment/${pageId}`, {
        name: `${name}`,
        body: `${body}`,
        date: `${date}`,
    })
    .then((res)=>{
        console.log(res)
    })
    }


    const renderComments = () => {
        return comments.map((comment) => {
            return (
                <div
                    key={comment.date}
                    className="flex flex-col items-center justify-center"
                >
                    <p className="text-lg text-white text-center pb-3">
                        {comment.body}
                    </p>
                    <h3 className="text-sm text-white text-center">
                        {comment.date}
                    </h3>
                    <h4></h4>
                </div>
            );
        });
    };

    return (
        <div className="border-lime-500 relative h-auto bottom-0">
            <article className="w-full flex h-64">
                <article className="rounded-3xl w-4/6 p-4">
                    render comments here
                </article>
            </article>

            <section className="text-white w-full flex-row p-6">
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
                        placeholder="Comment"
                        className="border bg-transparent border-lime-500 text-white text-sm rounded-3xl focus:ring-lime-500 focus:border-lime-500 block h-16 resize w-full md:w-4/12 p-2.5 mb-10"
                    ></textarea>
                </form>
                <button className="border rounded-full p-2 hover:border-lime-500 hover:text-lime-500"
                onClick={()=>{}}
                >
                    Submit
                </button>
            </section>
        </div>
    );
};
