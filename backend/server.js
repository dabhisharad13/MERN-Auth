import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./db/connection.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  return res.json("Home");
});

connect()
  .then(() => {
    try {
      app.listen(8080, () => {
        console.log("Server running");
      });
    } catch (error) {
      console.log("Cannot connect to server");
    }
  })
  .catch((error) => {
    console.log("Invalide DB connection");
  });
