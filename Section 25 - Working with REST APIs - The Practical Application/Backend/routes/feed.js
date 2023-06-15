const express = require("express");
const { body } = require("express-validator/check");

const feedController = require("../controllers/feed");

const router = express.Router();

// GET /feed/posts
router.get("/posts", feedController.getPosts);

// POST /feed/post
router.post(
  "/post",
  [
    body("title").isLength({ min: 5 }).trim(),
    body("content").isLength({ min: 5 }).trim(),
  ],
  feedController.createPost
);

router.get("/post/:postId", feedController.getPost);

module.exports = router;
