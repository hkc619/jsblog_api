import bodyParser from "body-parser";
import express from "express";
import { mongoose } from "mongoose";
import "dotenv/config.js";

import router from "./routes/blog-route.js";

mongoose.connect("mongodb://localhost:27017/testblogdb");
const app = express();
const PORT = 3000;

//app.use(bodyParser);
app.use(express.json());
app.use("/posts", router);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT} now...`);
});
