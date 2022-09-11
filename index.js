const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const multer = require("multer");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use(cors({ origin: "*" }));

app.use(bodyparser.json({ extended: true }));

app.use(bodyparser.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("it is working");
});

const blogData = require("./routes/blogRoutes");
app.use("/blog", blogData);

const connectionURI = process.env.CONNECTION_URI;
const port = process.env.PORT || 4000;
mongoose
  .connect(connectionURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port), console.log("app is running in port 4000");
  })
  .catch((err) => {
    console.log(err);
  });
