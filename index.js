import express from "express";

const app = express();
const PORT = 3000;

app.listen(3000, () => {
  console.log("Server is listening on port 3000 now...");
});
