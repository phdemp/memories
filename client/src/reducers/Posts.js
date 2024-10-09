const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return action.payload || []; // Should update state with fetched posts
    case 'CREATE_POST':
      //console.log('Reducer payload:', action.payload);
      return [...posts, action.payload]; // Add new post to state
    case 'UPDATE_POST':
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      ); // Add new post to state
    case 'DELETE_POST':
      return posts.filter((post) => post._id !== action.payload); // Remove post from state
    case 'LIKE_POST':
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    default:
      return posts; // Return current state for unrecognized actions
  }
};

export default postsReducer;
