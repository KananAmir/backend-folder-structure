import Blog from "../models/blog.js";

//GET ALL BLOGS
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET BLOG BY ID
export const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//POST NEW BLOG
export const createBlog = async (req, res) => {
  console.log(req);

  // const blog = req.body;
  const newBlog = new Blog(req.body);
  try {
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//DELETE BLOG BY ID
export const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    res.json(deletedBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//UPDATE BLOG
export const updateBlog = async (req, res) => {
  console.log(req);
  const { id } = req.params;
  // const blog = req.body;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body);
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
