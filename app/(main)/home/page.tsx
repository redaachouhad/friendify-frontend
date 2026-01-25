"use client";

import NavBar from "@/components/myComponents/NavBar";

function Home() {
  return (
    <div className="w-full h-screen bg-black flex flex-col">
      {/* Nav Bar */}
      <NavBar />
      <div className="flex-1 bg-white overflow-y-scroll"></div>
    </div>
  );
}

export default Home;
