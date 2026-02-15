import api from "@/lib/axios";
import { PostType } from "@/types/post";
import { useEffect, useState } from "react";
import InputNewPost from "./InputNewPost";
import Post from "./Post";

function PostsLanding() {
  // states
  const stories = new Array(20).fill(null);
  const [posts, setPosts] = useState<PostType[]>([]);

  // get  posts

  const getPostsList = async () => {
    try {
      const response = await api.get("/post/all");
      console.log(response?.data);
      setPosts(response?.data?.posts);
    } catch (error: any) {
      console.log(error?.response);
    }
  };

  useEffect(() => {
    getPostsList();
  }, []);
  return (
    <div className="w-[90vmin] mt-2 flex flex-col gap-2 justify-start h-[calc(100vh-4rem)] overflow-y-scroll">
      {/* Creating a New Post */}
      <InputNewPost />

      {/* List Of Posts */}
      <div className="w-full flex flex-col gap-3">
        {posts.map((post, index) => {
          return <Post post={post} key={post.id} />;
        })}
      </div>
      <br />
    </div>
  );
}

export default PostsLanding;
