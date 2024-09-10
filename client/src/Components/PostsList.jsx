/* eslint-disable react/prop-types */
import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css';
import Modal from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
  // Initialize posts as an empty array
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
    onStopPosting(); 
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      {posts.length === 0 && (
        <div className={classes.noPostsMessage}>
          <h2>There are no posts yet..</h2>
          <p>Start adding some!</p>
        </div>
      )}

      {posts.length > 0 && (
        <ul className={classes.Posts}>
          {posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
    </>
  );
}

export default PostsList;
