import connectMongo from "../../../../utils/connectMongo";
import Blog from "../../../../models/blogPosts";
import Comment from "../../../../models/comments";
import colors from 'colors'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function addComment(req, res) {
    try {
        await connectMongo();
        console.log("CONNECTED".bgGreen);
        const newComment = req.body;
        const comment = await Comment.create(newComment)
        const {getId} = req.query
        console.log("Comment Created".green);

        const relateComment = await Blog.findOneAndUpdate(
          {_id: getId},
          {$push: {comments: comment}},
          {new: true},
        )
        console.log('RELATE COMMENT'.bgGreen, relateComment)
        console.log('comment created!'.rainbow)
        // const getId = req.query.addComment;
        // create a comment
        // get the id of that comment
        // relate that id to the post
        
        
        // const blog = await Blog.findByIdAndUpdate(
          //     { _id: getId },
          //     { $push: { comments: newComment } },
          //     { new: true },
          // ).exec();
          
          
          return res.status(200).json(newComment);
    } catch (err) {
        console.error(err.message);
        return (err) => res.status(500).json(err);
    }
}
