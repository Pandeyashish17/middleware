const mongoose = require("mongoose");
const blogModel = require("../model/blogSchema");

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
    const blogData = await blogModel.find({ slug: req.params.slug });
    res.status(200).json({ data: blogData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.deleteBlog = async (req, res) => {
  try {
    const blogData = await blogModel.deleteOne({ id: req.params.id });
    res.status(200).json({ data: blogData, data: deleted });
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
    });
    await blogData.save();
    res
      .status(201)
      .json({ data: blogData, message: "data is inserted successfully" });
  } catch (error) {
    res.status(404).json({ messages: error.message });
  }
};
