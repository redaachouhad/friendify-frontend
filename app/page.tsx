"use client";

import NavBar from "@/components/myComponents/NavBar";
import PostsLanding from "@/components/myComponents/PostsLanding";
import RightBar from "@/components/myComponents/RightBar";
import Sidebar from "@/components/myComponents/Sidebar";

function Home() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col">
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
  );
}

export default Home;
