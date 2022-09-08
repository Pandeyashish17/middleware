const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");

const app = express();
dotenv.config();

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
