import bodyParser from "body-parser";
import express from "express";

const app = express();
const PORT = 3000;

//app.use(bodyParser);

// Create a blog post
app.post("/posts", (req, res) => {
  console.log(req);
});

// Get the blog post by ID
app.get("/posts/:blogId", (req, res) => {
  res.send("Blog ID: " + req.params.blogId);
});

// Get the blog post by key term

// Update the blog post by ID

// Delete the blog post by ID

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT} now...`);
});
