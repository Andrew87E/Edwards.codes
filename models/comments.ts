import { Schema } from "mongoose";

const commentSchema = new Schema(
    {
        body: String,
        date: String,
        user: String
    }
)

export default commentSchema
