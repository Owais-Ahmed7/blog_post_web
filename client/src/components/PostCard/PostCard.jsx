import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost } from "../../store/actions/posts";


function PostCard({post, setCurrentId, finishPost, setFinishPost}) {

  const dispatch = useDispatch();

  function RemovePost() {
    dispatch(deletePost(post._id));
    //for UI to update
    setFinishPost(!finishPost);
    console.log("finish post",finishPost);
  }

  return ( 
  <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            O
          </Avatar>
        }
        action={
          <IconButton 
            onClick={() => setCurrentId(post._id)} 
            aria-label="settings"
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={post.creator}
        subheader={moment(post.createdAt).fromNow()}
      />
      <CardMedia
        component="img"
        height="194"
        image={ post.selectedFile }
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton onClick={RemovePost} style={{marginLeft: 'auto'}} aria-label="share">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default PostCard;