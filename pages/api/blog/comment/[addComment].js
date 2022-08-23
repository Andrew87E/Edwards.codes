import { Blog } from "../../../../models/blogPosts";
import connectMongo from "../../../../utils/connectMongo";

export default async function addComment(req, res) {
    try {
        // const comment = await Comment.create(req.body)
        console.log(`******`);
        console.log("REQ.QUERY", req.query);
        console.log("REQ.BODY", req.body);
        req.body.date = "5:00 PM";
        const newComment = req.body;
        console.log(newComment);
        const { addComment } = req.query;
        const id = addComment;
        console.log("id", id);

        // Blog.findOneandUpdate(
        //       { _id: id },
        //       { $addToSet: { comments: newComment } },
        //   ).

        const blog = await Blog.findOneandUpdate(
            { _id: id },
            { $addToSet: { comments: newComment } },
        ).exec();
        res.status(200).json(blog);
        console.log("THIS HIT", blog);

        // then((app) => {
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
 