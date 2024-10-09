import * as api from '../api'; // Import everything from the 'api' module
import {
  GET_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  LIKE_POST,
} from '../constants/actionTypes';

export const getPosts = () => async (dispatch) => {
  try {
    const data = await api.getPosts();
    //console.log(data);
    dispatch({ type: GET_POSTS, payload: data.posts });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const data = await api.createPost(post); // Call the createPost function from the 'api' module
    //console.log('Post created:', data);
    dispatch({ type: CREATE_POST, payload: data.posts });
  } catch (error) {
    console.error('Error creating post:', error);
  }
};

export const updatePost = (postId, updatedPost) => async (dispatch) => {
  try {
    const data = await api.updatePost(postId, updatedPost);
    //console.log(data); // Call the createPost function from the 'api' module
    dispatch({ type: UPDATE_POST, payload: data.posts });
  } catch (error) {
    console.error('Error creating post:', error);
  }
};

export const deletePost = (postId) => async (dispatch) => {
  try {
    await api.deletePost(postId);
    console.log(postId);

    //console.log(data); // Call the deletePost function from the 'api' module
    dispatch({ type: DELETE_POST, payload: postId });
  } catch (error) {
    console.error('Error Deleting post:', error);
  }
};

export const likePost = (postId) => async (dispatch) => {
  try {
    const data = await api.likePost(postId);
    console.log(data);
    dispatch({ type: LIKE_POST, payload: data.updatedPost });
  } catch (error) {
    console.error(error);
  }
};
