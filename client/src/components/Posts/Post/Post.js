import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import moment from 'moment';
import {
  card,
  cardActions,
  details,
  media,
  overlay,
  overlay2,
  title,
} from './styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/Posts';

const Post = ({ post, setCurrentID }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };
  return (
    <>
      <Card sx={card}>
        <CardMedia
          sx={media}
          image={
            post.selectedFile
              ? post.selectedFile
              : 'https://via.placeholder.com/150'
          }
          title={post.title}
        />
        <div style={overlay}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        <div style={overlay2}>
          <Button
            style={{ color: 'white' }}
            size="small"
            onClick={() => {
              setCurrentID(post._id);
            }}
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
        <div style={details}>
          <Typography variant="body2" color="textSecondary">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>
        <Typography sx={title} gutterBottom variant="h5" component="h2">
          {post.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.message}
          </Typography>
        </CardContent>
        <CardActions sx={cardActions}>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              dispatch(likePost(post._id));
            }}
          >
            <ThumbUpAltIcon fontSize="small" />
            Like &nbsp;
            {post.likeCount}
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              handleDelete(post._id);
            }}
          >
            <DeleteIcon fontSize="small" />
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
export default Post;
