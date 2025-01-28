import { MongoClient } from "mongodb";
import { mongoose } from "mongoose";
import Blog from "../models/blogSchema.js";

/* MongClient
const client = new MongoClient("mongodb://localhost:27017/testblogdb", {
  useNewUrlParser: true,
});

client
  .connect()
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.error(error);
  });
*/

mongoose.connect("mongodb://localhost:27017/testblogdb");

const time = Date.now();
const NowTime = new Date(time);

const testPost = new Blog({
  id: 1,
  title: "Test Post 0119",
  content: "lorem",
  category: "Test",
  tags: ["Test"],
  createdAt: NowTime.toUTCString(),
  updatedAt: NowTime.toUTCString(),
});

console.log(testPost);

await testPost.save();

const firstArticle = await Blog.findOne({});
console.log(firstArticle);
