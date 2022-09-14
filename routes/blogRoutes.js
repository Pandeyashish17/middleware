const multer = require("multer");
const express = require("express");
const blog = require("../controller/blogController");
const router = express.Router();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype == "image/png" || file.mimetype == "image/jpg") {
//       cb(null, true);
//     } else {
//       cb(null, false);
//       return cb(new Error("it is error"));
//     }
//   },
// });
router.get("/", blog.getBlog);
router.get("/:slug", blog.getSingleBlog);
router.delete("/:id", blog.deleteBlog);
// router.post("/", upload.single("image"), blog.postBlog);
router.post("/", blog.postBlog);
module.exports = router;
