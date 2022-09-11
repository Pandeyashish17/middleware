const express = require("express");
const blog = require("../controller/blogController");
const router = express.Router();
router.get("/", blog.getBlog);
router.get("/:slug", blog.getSingleBlog);
router.delete("/:id", blog.deleteBlog);
router.post("/", blog.postBlog);
module.exports = router;
