import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  //debugger;
  return (
    <div className={s.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4XSv8zvv1XvIvvz8PFg8hRwUTQJjbis-CJg&usqp=CAU' alt='' width='10'></img>
      {props.message}
      <div>Likes: {props.likesCount}</div>
    </div>
  );
}

export default Post;