import { useEffect, useState } from "react";
import Post from "./Post";

const API_URL = "https://jsonplaceholder.typicode.com/posts"

function Posts() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <h1>Error: {error}</h1>;

  return (
    <>
      <h1>Posts</h1>
      <hr />
      {posts ? (
        posts.map((post) => <Post key={post.id} {...post} />)
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default Posts;
