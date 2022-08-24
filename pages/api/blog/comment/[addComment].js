import { Blog } from "../../../../models/blogPosts";
import connectMongo from "../../../../utils/connectMongo";

export default async function addComment(req, res) {
    try {
        console.log("REQ.QUERY", req.query);
        console.log("REQ.BODY", req.body);
        const newComment = req.body;
        console.log(newComment);
        const { addComment } = req.query;
        const id = addComment;
        console.log("id", id);

        const blog = await Blog.findOneandUpdate(
            { _id: id },
            { $addToSet: { comments: newComment } },
            { new: true }
        ).then((comment) => 
        !comment
        ? res.status(404).json({
          messgae: 'That Didn\'t Work'
        })
        :res.json(' created the comment ')
        );


        res.status(200).json(blog);
        // console.log("THIS HIT", blog);

        // .then((app) => {
        //   console.log("updated???")
        //   console.log(app)
        //     !app
        //         ? res.status(404).json({ message: "nothing with this id!" })
        //         : res.status(200).json(app);
        // });
    } catch (err) {
        (err) => res.status(500).json(err);
    }
}
