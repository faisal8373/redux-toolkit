import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded, selectAllPosts } from "./postSlice";
import { selectAllUsers } from "./users/userSlice";

const Posts = () => {
  const dispatch = useDispatch();
  // getting data from redux and display
  const posts = useSelector(selectAllPosts);
  const users = useSelector(selectAllUsers);

  const renderPosts = posts.map((post) => (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content.substring(0, 50)}</p>
    </article>
  ));
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const canSave = title && content && userId;

  const savePost = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      console.log("sent from dispatch", title, content, userId);
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
