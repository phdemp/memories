import express from 'express';
import {
  getPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from '../controller/postController.js';

const router = express.Router();

router.route('/').get(getPost).post(createPost);
router.route('/:id').put(updatePost).delete(deletePost);
router.route('/:id/likePost').patch(likePost);

export default router;
