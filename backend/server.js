const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  console.log(req);

  return res.json("hello");
});

app.listen(8080, () => {
  console.log("Server running");
});
