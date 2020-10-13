import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img src='https://www.tripsavvy.com/thmb/BJNbc4-Lb0HN0yopklpk1FApPPE=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kata-beach-phuket-thailand-522055220-58e4ebeb3df78c51625f7f16.jpg' alt=''></img>
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;