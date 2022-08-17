import connectMongo from "../../../utils/connectMongo";
import Blog from "../../../models/blogPosts";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function getBlog(req: any, res: any) {
    try {
        console.log('GETALL.TS')
        console.log("CONNECTING TO MONGO");
        await connectMongo();
        console.log("CONNECTED TO MONGO!");

        console.log("GETTING DOCUMENT");
        const blog = await new Blog(req.body)
        
        res.status(200).json(blog)
        
        blog.find()

        console.log("GOT DOCUMENT!");

    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}
