import Router from "express";

// Create a blog post
app.post("/posts", (req, res) => {
  console.log(req);
});

// Get the blog post by ID
Router.get("/posts/:blogId", (req, res) => {
  res.send("Blog ID: " + req.params.blogId);
});
// Get the blog post by key term

// Update the blog post by ID

// Delete the blog post by ID
