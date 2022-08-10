import connectMongo from "../../../utils/connectMongo";
import Blog from "../../../models/blogPosts";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function addBlog(req: any, res: any) {
    try {
        console.log("CONNECTING TO MONGO");
        await connectMongo();
        console.log("CONNECTED TO MONGO");

        console.log("CREATING DOCUMENT");
        const blog = await Blog.create(req.body);
        console.log("CREATED DOCUMENT");

        res.json({ blog });
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}



