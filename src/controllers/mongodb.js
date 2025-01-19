import { MongoClient } from "mongodb";

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
