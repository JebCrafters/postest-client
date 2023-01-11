import { Posts } from "../../action/note";
import React, { useEffect, useState } from "react";
import Post from "../posts/post";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await Posts().then(function (value) {
        // console.log(value);
        setPosts(value);
      });
    };
    loadData();
  }, []);


  if (!posts) {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Posts not created</h1>
      </>
    );
  }
  return (
    <>
      <div className="container__posts">
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
