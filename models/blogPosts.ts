import mongoose, { Schema, model } from "mongoose";
import { Blog } from "../types/blog";

const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Please provide a title for the blog post"],
            maxLength: [100, "Title can not be longer than 100 characters"],
        },
        author: {
            type: String,
            required: [true, "Please provide your name"],
            MaxLength: [60, "Name can not be longer than 60 characters"],
        },
        body: String,
        comments: [{ body: String, date: Date }],
        date: {
            type: Date,
            default: Date.now,
        },
        hidden: Boolean,
        meta: {
            votes: Number,
            favs: Number,
        },
    },
    {
        collection: "Blog",
    },
);

const Blog = mongoose.models.Blog || model("Blog", blogSchema);

export default Blog;
