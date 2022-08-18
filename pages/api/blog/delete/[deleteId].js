import connectMongo from "../../../../utils/connectMongo";
import Blog from "../../../../models/blogPosts";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */



export default async function addBlog(req, res) {
    try {
        console.log("CONNECTING TO MONGO");
        await connectMongo();
        console.log("CONNECTED TO MONGO");

        console.log("FINGIND DOCUMENT");

        const id = req.params;

        const blog = await Blog.findByIdAndRemove(id, (error, data)=>{
          if(error) {
            console.log('If you think nobody cares if you’re alive, try missing a couple of car payments.')
            throw error
          } else{
            console.log('He’s Dead Jim.')
          }
          res.status(200).json({data})
        });
        
        console.log("DELETED DOCUMENT");

        res.json({ success: true, data: blog });

    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}

