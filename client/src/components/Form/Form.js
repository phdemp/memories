import { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import {
  paperStyles,
  formStyles,
  rootStyles,
  fileInputStyles,
  buttonSubmitStyles,
} from './styles';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/Posts';
const Form = ({ currentID, setCurrentID }) => {
  const [postData, SetPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const post = useSelector((state) =>
    state.posts.find((p) => p._id === currentID)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (post) {
      SetPostData(post);
    } else {
      clear();
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postData);
    if (currentID) {
      dispatch(updatePost(currentID, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };
  const clear = () => {
    SetPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };
  return (
    <>
      <Paper sx={paperStyles}>
        <form
          autoComplete="off"
          noValidate
          sx={[rootStyles, formStyles]}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">
            {currentID ? 'Edit' : 'Create'} Memories
          </Typography>
          <TextField
            name="creator"
            variant="outlined"
            label="Creator"
            fullWidth
            value={postData.creator}
            onChange={(e) =>
              SetPostData({ ...postData, creator: e.target.value })
            }
          />
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              SetPostData({ ...postData, title: e.target.value })
            }
          />
          <TextField
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            value={postData.message}
            onChange={(e) =>
              SetPostData({ ...postData, message: e.target.value })
            }
          />
          <TextField
            name="tags"
            variant="outlined"
            value={postData.tags}
            label="Tags (comma-separated)"
            fullWidth
            onChange={(e) =>
              SetPostData({
                ...postData,
                tags: e.target.value.split(',').map((tag) => tag.trim()),
              })
            }
          />
          <div style={fileInputStyles}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                SetPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <Button
            sx={buttonSubmitStyles}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </>
  );
};
export default Form;
