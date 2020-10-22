import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {

  let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 23},
    {id: 2, message: 'test post', likesCount: 1},
    {id: 2, message: 'Bla bla bla', likesCount: 1},
    {id: 2, message: 'Da-da', likesCount: 1},
  ];

  let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount} />);

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
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;