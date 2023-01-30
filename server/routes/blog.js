import express from "express";
import {
  createBlog,
  deleteBlog,
  getBlogById,
  getBlogs,
  updateBlog,
} from "../controllers/blog.js";

const router = express.Router();

router.get("/", getBlogs);
router.post("/", createBlog);
router.delete("/:id", deleteBlog);
router.get("/:id", getBlogById);
router.put("/:id", updateBlog);

export default router;
