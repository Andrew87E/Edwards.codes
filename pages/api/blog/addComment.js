import {comments, blogPosts} from "../../../models/comments"
import connectMongo from "../../../utils/connectMongo";


export default async function addComment (req, res) {
  try {
    Blog.findOneandUpdate(
      {_id: req.params},
      {$addToSet: {comments: req.body}}
    )
    .then((app)=>{
      !app
      ? res.status(404).json({ message: 'nothing with this id!' })
      : res.status(200).json(app)
    })
  } catch (err) {
    err => res.status(500).json(err)
  }

}



