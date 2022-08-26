import mongoose, { Schema, model } from "mongoose";

const commentSchema = new Schema({
    body: String,
    date: {
        type: Date,
        default: Date.now,
    },
    user: String,
});

const Comment = mongoose.models.Comment || model("Comment", commentSchema);

export default Comment;
