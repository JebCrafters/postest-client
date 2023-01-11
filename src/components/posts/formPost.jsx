import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../posts/formPost.css";
import Button from "../utils/btn/Button";
import Clock from "../clock";
import { createPost } from "../../action/note";

const FormPost = () => {
  const [namePost, setNamePost] = useState("");
  const HandlePostNameChange = (event) => {
    setNamePost(event.target.value);
  };
  const [textPost, setTextPost] = useState("");
  const HandlePostChange = (event) => {
    setTextPost(event.target.value);
  };
  const dateTime =  Date().slice(0,21);
  const color = String  ("#" + localStorage.getItem('color')) 
  console.log(color)
  const currentUser = useSelector((state) => state.user.currentUser.email);
  const str_user = String(currentUser);
  const name = str_user.split("@")[0];


  return (
    <>
    <div className="form__createPost" style= {{backgroundColor: color}}>
        <input
          className="input__name"
          value={namePost}
          onChange={HandlePostNameChange}
          type="text"
          placeholder="Name post"
        />
        <div className="form__inputTextArea">
          <textarea
            className="input__text"
            value={textPost}
            onChange={HandlePostChange}
            required="true"
            placeholder="Text post"
            maxlength="200"
            />
        </div>
        <div className="input__dateAuthor">
          <Clock id="date" className="date" />
          <h1 className="name"> {name} </h1>
        </div>
      </div>
      <Button
        onClick={() =>
          createPost(
            namePost,
            textPost,
            dateTime,
            name,
            color
            )
            
          }
          title="Create post"
          />
    </>
  );
};

export default FormPost;
