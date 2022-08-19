import { Schema } from "mongoose";

const commentSchema = new Schema(
    {
        body: String,
        date: Date,
        user: String 
    }
)

export default commentSchema
