"use client";

import FormCreatePost from "@/components/myComponents/FormCreatePost";
import NavBar from "@/components/myComponents/NavBar";
import PostsLanding from "@/components/myComponents/PostsLanding";
import RightBar from "@/components/myComponents/RightBar";
import Sidebar from "@/components/myComponents/Sidebar";
import useVisibilityFormNewPost from "@/store/useVisibilityFormNewPost";
import { useEffect } from "react";

function Home() {
  const { isVisibleFormNewPost, hide } = useVisibilityFormNewPost();

  useEffect(() => {
    hide();
  }, [hide]);

  return (
    <>
      <div className="w-full h-screen bg-black flex flex-col">
        {/* Nav Bar */}
        <NavBar />
        <div className="flex-1 bg-gray-100 flex flex-row">
          {/* Sidebar */}
          <Sidebar />
          {/* PostsLanding */}
          <PostsLanding />
          {/* RightBar */}
          <RightBar />
        </div>
      </div>
      {isVisibleFormNewPost && (
        <div className="w-full h-full z-10 absolute top-0 left-0 bg-[rgba(0,0,0,0.8)] flex justify-center items-center">
          <FormCreatePost />
        </div>
      )}
    </>
  );
}

export default Home;
