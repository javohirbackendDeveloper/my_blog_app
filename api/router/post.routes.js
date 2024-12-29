import express from "express";

const postRouter = express.Router();

import {
  addPost,
  deletePost,
  getOnePost,
  getPosts,
  updatePost,
} from "../controller/post.controller.js";

postRouter.get("/", getPosts);
postRouter.get("/:id", getOnePost);
postRouter.post("/", addPost);
postRouter.delete("/:id", deletePost);
postRouter.put("/:id", updatePost);

export default postRouter;
