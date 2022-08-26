import connectMongo from "../../../../utils/connectMongo";
import Blog from "../../../../models/blogPosts";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function addComment(req, res) {
    try {
        await connectMongo();
        console.log("CONNECTED");
        const newComment = req.body;
        const getId = req.query.addComment;
        console.log(getId);

        // await Blog.updateOne(getId, { comments: update });

        console.log("made it here");
        // doc.comments = update;
        // await doc.save();

        // create a comment
        // get the id of that comment
        // relate that id to the post

        const blog = await Blog.findByIdAndUpdate(
            { _id: getId },
            { $push: { comments: newComment } },
            { new: true },
        ).exec();

        console.log("blog", blog);
        // const blog = await Blog.find({ _id: getId }).exec();

        return res.status(200).json(blog);
    } catch (err) {
        console.error(err.message);
        return (err) => res.status(500).json(err);
    }
}
