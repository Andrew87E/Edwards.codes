import connectMongo from "../../../../utils/connectMongo";
import Blog from "../../../../models/blogPosts";
import colors from "colors";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function getBlog(req: any, res: any) {
    try {
        console.log("GETID.TS");
        console.log("CONNECTING TO MONGO");

        await connectMongo();
        console.log("CONNECTED TO MONGO!");

        const { getId } = req.query;
        console.log(getId);
        console.log("GETTING DOCUMENT");

        const blog = await new Blog;

        res.status(200).json({ success: true, data: blog });

        blog.find({ _id: getId }).exec();

        console.log("GOT DOCUMENT!");
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}
