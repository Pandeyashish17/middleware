const mongoose = require("mongoose");
 
const jwt = require("jsonwebtoken");
module.exports.getBlog = async (req, res) => {
  try {
    const blogData = await blogModel.find();
    res.status(200).json({ data: blogData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.getSingleBlog = async (req, res) => {
  try {
    const blogData = await blogModel.findOne({ slug: req.params.slug });
    res.status(200).json({ data: blogData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.deleteBlog = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("no post found of that id");
  try {
    const blogData = await blogModel.findByIdAndRemove(id);
    res.status(200).json({ data: blogData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.postBlog = async (req, res) => {
  try {
    const blogData = new blogModel({
      title: req.body.title,
      slug: req.body.slug,
      excerpt: req.body.excerpt,
      body: req.body.body,
      image: req.body.image,
    });
    await blogData.save();
    res
      .status(201)
      .json({ data: blogData, message: "data is inserted successfully" });
  } catch (error) {
    res.status(404).json({ messages: error.message });
  }
};

module.exports.signup = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  let key = "sdjsjdfdsfueafdsacadsxzx";
  console.log(req.body, "dfdf");
  const token = jwt.sign({ email, password }, key);
  console.log(token);
  res.status(200).json({ token });
};

module.exports.login = async (req, res,next) => {
  const email = req.body.email;
  const password = req.body.password;
  const token = req.body.token;
  console.log(req.body, req.headers.authorization);
  let key = "sdjsjdfdsfueafdsacadsxzx";

  // const verify = jwt.verify(token, key);
  res.status(200).json({ token: token });
  return true
};
