import bodyParser from "body-parser";
import express, { Router } from "express";
import "dotenv/config.js";

const app = express();
const PORT = 3000;

//app.use(bodyParser);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT} now...`);
});
