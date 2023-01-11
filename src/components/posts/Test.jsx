import React from "react";
import { useSelector } from "react-redux";
import '../App.css'

const Test =  () => {
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const email = CurrentUser.email;
  const id = CurrentUser.id;

  return (
    <>
      <h1 className="test">WELCOME!!!</h1>
      <h1 className="test"> Your email: {email}</h1>
      {/* <h1 className="test">Your id: {id}</h1> */}
    </>
  );
};

export default Test; 
