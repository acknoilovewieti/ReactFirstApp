import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message='Hi, how are you?' likesCount="12" />
        <Post message='It is my first post.' likesCount="23" />
        <Post message='test post' likesCount="0" />

      </div>
    </div>
  );
}

export default MyPosts;