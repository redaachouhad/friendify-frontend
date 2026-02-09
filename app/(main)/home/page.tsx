"use client";

import FormCreatePost from "@/components/myComponents/FormCreatePost";
import PostsLanding from "@/components/myComponents/PostsLanding";
import PostWithComments from "@/components/myComponents/PostWithComments";
import RightBar from "@/components/myComponents/RightBar";
import Sidebar from "@/components/myComponents/Sidebar";
import useVisibilityFormNewPost from "@/store/useVisibilityFormNewPost";
import useVisibilityPostWithComments from "@/store/useVisiblityPostWithComments";
import { useEffect } from "react";

function Home() {
  const { isVisibleFormNewPost, hideVisibilityFormNewPost } =
    useVisibilityFormNewPost();

  const { isVisiblePostWithComments } = useVisibilityPostWithComments();

  useEffect(() => {
    hideVisibilityFormNewPost();
  }, [hideVisibilityFormNewPost]);

  return (
    <>
      <div className="flex-1 bg-gray-100 flex flex-row justify-center">
        {/* Sidebar */}
        <Sidebar />
        {/* PostsLanding */}
        <PostsLanding />
        {/* RightBar */}
        <RightBar />
      </div>

      {isVisibleFormNewPost && (
        <div className="w-full h-full z-10 absolute top-0 left-0 bg-[rgba(0,0,0,0.8)] flex justify-center items-center">
          <FormCreatePost />
        </div>
      )}

      {isVisiblePostWithComments && (
        <div className="w-full h-full z-10 absolute top-0 left-0 bg-[rgba(0,0,0,0.8)] flex justify-center items-center">
          <PostWithComments />
        </div>
      )}
    </>
  );
}

export default Home;
