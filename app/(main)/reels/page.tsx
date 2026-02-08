"use client";

import NavBar from "@/components/myComponents/NavBar";
import Reel from "@/components/myComponents/Reel";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRef, useState } from "react";

const reels = [
  {
    id: 1,
    video: "/videos/reel1.mp4",
    username: "2M.ma",
    description: "Je veux lire, lire, et lire ! 📚",
    likes: 670,
    comments: 25,
  },
  {
    id: 2,
    video: "/videos/reel2.mp4",
    username: "user.test",
    description: "Another reel",
    likes: 120,
    comments: 5,
  },
];

export default function ReelsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = (nextIndex: number) => {
    if (!containerRef.current) return;
    const reel = containerRef.current.children[nextIndex] as HTMLElement;
    reel?.scrollIntoView({ behavior: "smooth", block: "center" });
    setIndex(nextIndex);
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col">
      <NavBar />
      <div className="h-full w-full bg-black flex items-center justify-center relative">
        {/* REELS LIST */}
        <div
          ref={containerRef}
          className="h-full overflow-hidden flex flex-col gap-20 justify-center items-center"
        >
          <div className="h-full flex items-center">
            <Reel reel={reels[index]} />
          </div>
        </div>

        {/* NAVIGATION BUTTONS */}
        <div className="absolute right-10 flex flex-col gap-4">
          <button
            disabled={index === 0}
            onClick={() => scrollTo(index - 1)}
            className="bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white p-3 rounded-full"
          >
            <ChevronUp />
          </button>

          <button
            disabled={index === reels.length - 1}
            onClick={() => scrollTo(index + 1)}
            className="bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white p-3 rounded-full"
          >
            <ChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
}
