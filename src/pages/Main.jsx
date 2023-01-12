import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Test from "../components/posts/Test";
import PostList from "../components/posts/PostList";
import { auth } from "../action/user";

const Main = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth());
  }, );
  
  return (
    <>
        {!isAuth && <h1 className="not_authorization"> You are not autorization</h1>}
        {/* <Post/>  */}
        {isAuth && <Test />}
        <PostList />
    </>
    
)};
 
export default Main;
