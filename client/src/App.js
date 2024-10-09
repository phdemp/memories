import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import {
  appBarStyles,
  headingStyles,
  imageStyles,
  mainContainerStyles,
} from './styles';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/Posts';
const App = () => {
  const [currentID, setCurrentID] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentID, dispatch]);
  return (
    <>
      <Container>
        <AppBar sx={appBarStyles} position="static" color="inherit">
          <Typography sx={headingStyles} variant="h2" align="center">
            Memories
          </Typography>
          <img sx={imageStyles} src={memories} alt={memories} height="60" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              sx={mainContainerStyles}
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts setCurrentID={setCurrentID} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentID={currentID} setCurrentID={setCurrentID} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
};
export default App;
