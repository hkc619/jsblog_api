import bodyParser from "body-parser";
import express from "express";

const app = express();
const PORT = 3000;

//app.use(bodyParser);

app.get("/post/:blogId", (req, res) => {
  res.send("Blog ID: " + req.params.blogId);
});

app.post("/post", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT} now...`);
});
