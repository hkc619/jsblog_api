import Router from "express";

const router = Router();

router.use((req, res, next) => {
  console.log("A request is coming into API.");
  next();
});
// Create a blog post
router.post("/", async (req, res) => {
  console.log(req.body);
  res.send("Test successfully");
});

// Get the blog post by ID
router.get("/:blogId", async (req, res) => {
  res.send("Blog ID: " + req.params.blogId);
  console.log(req.params.blogId);
});

// Get the blog post by key term
router.get("");

// Update the blog post by ID

// Delete the blog post by ID

export default router;
