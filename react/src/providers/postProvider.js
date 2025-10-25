import { useEffect, useState } from "react";
import PostContext from "../context/postContext";

function PostProvider(props) {
  const { children } = props;
  const [posts, setPosts] = useState([]);
  const [postLength, setPostLength] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
        setPostLength(data.posts.length);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <PostContext.Provider value={{ posts, postLength }}>
      {children}
    </PostContext.Provider>
  );
}

export default PostProvider;
