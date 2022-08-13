import mongoose, { Schema, model } from "mongoose";

const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Please provide a title for the blog post"],
            maxLength: [100, "Title can not be longer than 100 characters"],
        },
        header: {
            type: String,
            required: [true, "Please provide a header for your post"],
            maxLength: [78, "Please keep your header under 78 characters"],
        },
        img: {
            type: String,
            required: [
                true,
                "Please link an image for your blog post from imgur",
            ],
            maxLength: [
                100,
                "Please keep your img source under 100 characters, use imgur!",
            ],
        },
        author: {
            type: String,
            required: [true, "Please provide your name"],
            MaxLength: [60, "Name can not be longer than 60 characters"],
        },
        body: String,
        comments: [{ body: String, date: Date }],
        postDate: {
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
