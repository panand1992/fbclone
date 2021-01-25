const express = require("express");
var router = express.Router();
const userController = require("../../../src/controllers/userController");
const postController = require("../../../src/controllers/postController");
const commentController = require("../../../src/controllers/commentController");
const reactionController = require("../../../src/controllers/reactionController");

router.post("/user/add", userController.createUser);
router.post("/post/add", postController.createPost);
router.patch("/post/edit", postController.editPost);
router.post("/post/details", postController.getPostDetails);
router.post("/post/all", postController.getAllPosts);
router.post("/comment/add", commentController.addComment);
router.patch("/comment/edit", commentController.editComment);
router.post("/reaction/add", reactionController.addReaction);

module.exports = router;
