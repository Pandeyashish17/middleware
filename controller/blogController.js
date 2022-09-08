const mongoose = require("mongoose");
const blogModel = require("../model/blogSchema");

const blogData = async (req, res) => {
  try {
    const blogData = await blogModel.find();
    res.status(200).json({ data: blogData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = blogData;
