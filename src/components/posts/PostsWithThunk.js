import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postAdded,
  selectAllPosts,
  getPostsStatus,
  getPostsError,
} from "./postSliceThunk";
import { selectAllUsers } from "./users/userSlice";
import Reactions from "./Reactions";

const Posts = () => {
  const dispatch = useDispatch();
  // getting data from redux and display
  const posts = useSelector(selectAllPosts);
  const users = useSelector(selectAllUsers);
  const postStatus = useSelector(getPostsStatus);
  const postError = useSelector(getPostsError);

  // console.log("all posts here", posts[0]);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content.substring(0, 50)}</p>
      <p>
        by{" "}
        {users.find((user) => user.id === post.userId)
          ? users.find((user) => user.id === post.userId).name
          : "Unknown Author"}
      </p>
      <p>Published on {post.date}</p>
      <Reactions post={post} />
    </article>
  ));
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const canSave = title && content && userId;

  const savePost = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      // console.log("sent from dispatch", title, content, userId);
      setTitle("");
      setContent("");
      setUserId("");
    }
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  console.log(posts);
  return (
    <div>
      <section>
        <h2>Add a New Post</h2>
        <form>
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="postAuthor">Author:</label>
          <select
            id="postAuthor"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          >
            <option value=""></option>
            {userOptions}
          </select>
          <label htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="button" onClick={savePost} disabled={!canSave}>
            Save Post
          </button>
        </form>
      </section>
      {renderPosts}
    </div>
  );
};

export default Posts;
