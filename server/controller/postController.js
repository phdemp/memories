import postModal from '../model/postModel.js';

const getPost = async (req, res) => {
  try {
    const posts = await postModal.find({});
    res.status(200).json({ posts });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const createPost = async (req, res) => {
  try {
    const posts = await postModal.create(req.body);
    res.status(201).json({ posts });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const posts = await postModal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ message: 'post updated', posts });
  } catch (err) {
    res.status(404).json({ message: 'Post not found', err });
  }
};

const deletePost = async (req, res) => {
  try {
    await postModal.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Post was not deleted', err });
  }
};

const likePost = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the post by id
    const post = await postModal.findById(id);
    if (!post) return res.status(404).send('Post not found');

    // Increment the like count
    post.likeCount += 1;

    // Save the updated post
    const updatedPost = await post.save();

    // Return the updated post
    res.status(200).json({ updatedPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getPost, createPost, updatePost, deletePost, likePost };
