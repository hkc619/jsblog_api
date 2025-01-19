import mongoose, { model } from "mongoose";

const { Schema } = mongoose;

const blogSchema = new Schema({
  id: Number,
  title: String,
  content: String,
  category: String,
  tags: {
    type: [String],
  },
  createdAt: String,
  updatedAt: String,
});

const Blog = model("Blog", blogSchema);
export default Blog;
