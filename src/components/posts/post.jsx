import React from "react";
import "../posts/formPost.css";

const Post = (props) => {
  let resizeTimer;
  window.addEventListener("resize", () => {
    var element = document.getElementById("form__Post");
    element.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      var element = document.getElementById("form__Post");
      element.classList.remove("resize-animation-stopper");
    }, 100);
  });

  return (
    <>
      <div id="form__Post" style={{ backgroundColor: props.post.color }}>
        <h1 className="post_name"> {props.post.namePost} </h1>
        <div className="form__inputTextArea">
          <h1 className="post_text"> {props.post.textPost} </h1>
        </div>
        <div className="input__dateAuthor">
          <h1 className="date"> {props.post.dateTime} </h1>
          <h1 className="name"> {props.post.name} </h1>
        </div>
      </div>
    </>
  );
};

export default Post;
