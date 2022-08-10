import { Schema, model, models } from "mongoose";

const blogSchema = new Schema({
    title: String,
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number,
    },
},
{
    collection: "Blog"
}
);

const Blog = models.Blog || model("Blog", blogSchema);

export default Blog;
