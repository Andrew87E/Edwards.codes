import connectMongo from "../../../utils/connectMongo";
import Blog from "../../../models/blogPosts";
import colors from "colors";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function getBlog(req: any, res: any) {
    try {
        console.log("CONNECTING TO MONGO".cyan);
        await connectMongo();
        console.log("CONNECTED TO MONGO!".rainbow);

        console.log("GETTING DOCUMENT".red);
        const blog = await Blog.find().then((data) => {
            res.status(200).json(data)
        })
        console.log("GOT DOCUMENT!".rainbow);

    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}
