import { MongoClient } from "mongodb";
import Blog from "../models/blogSchema.js";

const client = new MongoClient("mongodb://localhost:27017/testblogdb", {
  useNewUrlParser: true,
});

const time = Date.now();
const NowTime = new Date(time);

const testPost = new Blog({
  id: 1,
  title: "Test Post 0119",
  content: "lorem",
  category: "test",
  tags: ["test"],
  createdAt: NowTime.toUTCString(),
  updatedAt: NowTime.toUTCString(),
});

client
  .connect()
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.error(error);
  });

await testPost.findOne();
