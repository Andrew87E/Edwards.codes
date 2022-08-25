import Blog from "../../../../models/blogPosts";
import connectMongo from "../../../../utils/connectMongo";

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
        console.log(req.query.addComment);
        let update = { newComment };

        
        res.status(200).json(blog);
    } catch (err) {
        (err) => res.status(500).json(err);
    }
}
