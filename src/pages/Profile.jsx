import React, { useEffect, useState } from "react";
import "./profile.css";
import {useSelector } from 'react-redux';
import { Posts } from "../action/note";
import PostProfile from "./postProfile"
const Profile = () => {

  const currentUser = (useSelector(state => state.user.currentUser))
  var email = String(currentUser.email)
  var author = String(currentUser.author)
  var regDate = String(currentUser.regDate)


  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await Posts().then(function(value) {
        // console.log(value);
        const results = value.filter(post => post.name === author);
        setPosts(results);
      });
    };
    loadData();
  }, []);
  console.log(posts)
  const countPosts = posts.length

  return (
    
    <>
      <div className="profile_background">
        <div className="up__profile">
          <div className="profile__photo"></div>
          <div className="profile__data">
            <h1>Your email address: {email}</h1>
            <h1>Your name: {author}</h1>
            <h1>Data registration:  {regDate}</h1>
            <h1>Count posts: {countPosts} </h1>
          </div>
        </div>
        <h1 className="profile__title__list">Your list posts</h1>
        <div className="profile__posts">
        {posts.map((post) => (
          <PostProfile post={post} index = {posts.indexOf(post)} />
        ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
