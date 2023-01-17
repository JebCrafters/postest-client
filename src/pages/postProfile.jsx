import React from "react";
import "./profile.css";

const postProfile = (props) => {

  return (
    <>
      <div className="profilePost">
        <h1>{1 + props.index}.</h1>
        <h1>{props.post.namePost}</h1>
        <h1 className="profilePostText" >
          {props.post.textPost}
        </h1>
        <h1>{props.post.dateTime}</h1>
      </div>
    </>
  );
};

export default postProfile;
