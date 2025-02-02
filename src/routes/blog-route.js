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

  // get id count
  const postId = await Blog.countDocuments().then((data) => {
    return data + 1;
  });

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
  Blog.find()
    .then((data) => {
      res.send(data);
    })
    .catch(() => {
      res.status(500);
      res.send("Cannot get data.");
    });
});

// Get the blog post by key term
//router.get("?term=", (req, res) => {});

// Update the blog post by ID

// Delete the blog post by ID

export default router;
