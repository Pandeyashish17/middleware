const express = require("express");
const getBlog = require("../controller/blogController");
const router = express.Router();
router.get("/", getBlog);
module.exports = router;
