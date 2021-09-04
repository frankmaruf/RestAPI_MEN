const express = require("express");

const router = express.Router();
const Post = require("../models/Post");

//Get All Post List
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
  }
});
//Submit New Post
router.post("/", async (req, res) => {
  const { title, description } = req.body;
  const post = new Post({
    title,
    description,
  });
  try {
    const savePost = await post.save();
    res.status(201).json(savePost);
  } catch (err) {
    console.log(err);
  }
});
//Alternative of Submit New Post
// router.post("/", (req, res) => {
//   const post = new Post({
//     title: req.body.title,
//     description: req.body.description,
//   });
//   post.save()
//     .then(data => {
//       res.json(data);
//     })
//     .catch(error => {
//       res.json({ message: error });
//     });
// });

//Specific Post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
  }
});

//Delete Specific Post
router.delete("/:id", async (req, res) => {
  try {
    const removePost = await Post.remove({ _id: req.params.id });
    res.status(200).json(removePost);
  } catch (err) {
    console.log(err);
  }
});
//Update Specific Post
router.patch("/:id", async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.id },
      {
        $set: { title: req.body.title },
        $set: { description: req.body.description },
      }
    );
    res.status(200).json(updatePost);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
