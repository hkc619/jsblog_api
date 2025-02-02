"use strict";

import Router from "express";
import chalk from "chalk";

import Blog from "../models/blogSchema.js";

const router = Router();

router.use((req, res, next) => {
  console.log(chalk.green("A request is coming into API."));
  next();
});

// Create a blog post
router.post("/", async (req, res) => {
  console.log(req.body);
  let { title, content, category, tags } = req.body;
  console.log(title, content, category, tags);
  const time = Date.now();
  const NowTime = new Date(time);
  const UTCTime = NowTime.toUTCString();

  /* get id count (need to deprecated)
  const postId = await Blog.countDocuments().then((data) => {
    return data + 1;
  });
  */

  // get the newest id
  const topData = await Blog.find()
    .sort({ id: -1 })
    .limit(1)
    .then((data) => {
      return data[0];
    });
  const postId = topData.id + 1;

  // compose to a new post
  const newPost = new Blog({
    id: postId,
    title: title,
    content: content,
    category: category,
    tags: tags,
    createdAt: UTCTime,
    updatedAt: UTCTime,
  });

  try {
    await newPost.save();
    res.status(200);
  } catch (error) {
    res.status(400);
  }
  res.send("Test successfully");
});

// Get the blog post by ID
router.get("/:blogId", async (req, res) => {
  Blog.find({ id: req.params.blogId })
    .then((data) => {
      res.send(data);
    })
    .catch(() => {
      res.status(500);
      res.send("Cannot get data.");
    });
  console.log(req.params.blogId);
});

// Get all blog posts
router.get("/", async (req, res) => {
  // Get the blog post by key term
  if (req.query.term) {
    const regex = req.query.term;
    Blog.find({
      $or: [
        { title: new RegExp(regex, "i") },
        { content: new RegExp(regex, "i") },
        { category: new RegExp(regex, "i") },
        { tags: new RegExp(regex, "i") },
      ],
    })
      .then((data) => {
        res.status(200);
        res.send(data);
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    Blog.find()
      .then((data) => {
        res.send(data);
      })
      .catch(() => {
        res.status(500);
        res.send("Cannot get data.");
      });
  }
});

// Update the blog post by ID
router.put("/:blogId", async (req, res) => {
  console.log(req.body);
  const time = Date.now();
  const NowTime = new Date(time);
  const UTCTime = NowTime.toUTCString();
  // get new data
  let { title, content, category, tags } = req.body;
  // get old data
  const oldData = await Blog.find({ id: req.params.blogId }).then((data) => {
    return data;
  });

  // if new data is blank means keep old data
  Blog.updateOne(
    { id: req.params.blogId },
    {
      title: title === "" ? oldData[0].title : title,
      content: content === "" ? oldData[0].content : content,
      category: category === "" ? oldData[0].category : category,
      tags: tags === "" ? oldData[0].tags : tags,
      updatedAt: UTCTime,
    }
  )
    .then((data) => {
      res.status(200);
      res.send("Update Successfully.");
      console.log(data);
    })
    .catch((error) => {
      res.status(500);
      console.log(error);
    });
});

// Delete the blog post by ID
router.delete("/:blogId", async (req, res) => {
  Blog.deleteOne({ id: req.params.blogId })
    .then(() => {
      res.status(200);
      res.send("Delete Successfully.");
    })
    .catch((error) => {
      res.status(500);
      console.error(error);
    });
});

export default router;
