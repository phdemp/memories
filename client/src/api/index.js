import axios from 'axios';

const API_URL = 'http://localhost:6660/posts';

export const getPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch posts');
  }
};

export const createPost = async (newPosts) => {
  try {
    const response = await axios.post(API_URL, newPosts);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create post');
  }
};

export const updatePost = async (postId, updatedPost) => {
  try {
    const response = await axios.put(`${API_URL}/${postId}`, updatedPost);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update post');
  }
};

export const deletePost = async (postId) => {
  try {
    await axios.delete(`${API_URL}/${postId}`);
    return;
  } catch (error) {
    throw new Error('Failed to delete post');
  }
};

export const likePost = async (postId) => {
  try {
    const response = await axios.patch(`${API_URL}/${postId}/likePost`);
    return response.data;
  } catch (error) {
    //throw new Error('Failed to like post');
    console.error(error);
  }
};
