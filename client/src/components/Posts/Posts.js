import Post from './Post/Post';
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { mainContainerStyles } from './styles';

const Posts = ({ setCurrentID }) => {
  const posts = useSelector((state) => state.posts);
  //console.log('Current posts:', posts);
  //console.log(posts);
  //console.log(posts.length);

  return (
    <>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid
          sx={mainContainerStyles}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts.map((post) => {
            return (
              <Grid item xs={12} sm={6} md={6} key={post._id}>
                <Post post={post} setCurrentID={setCurrentID} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};
export default Posts;
