import React from "react";
import { useSelector } from "react-redux";
import './profile.css'

const Profile = () => {
  const currentUser = useSelector((state) => state.user.currentUser.email);
  const str_user = String(currentUser);
  var background = ""
  if (str_user == "shakal@gmail.com") {
    background = "shakal";
  } else {
    background = "profile_background";
  }
  return (
    <>
      <div className={`${background}`}>
        <h1 className="text">Welcome to you profile</h1>
      </div>
    </>
  );
};

export default Profile;
