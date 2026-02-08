"use client";

import { Heart, MessageCircle, Share2, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

type Reel = {
  video: string;
  username: string;
  description: string;
  likes: number;
  comments: number;
};

export default function Reel({ reel }: { reel: Reel }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [liked, setLiked] = useState(false);

  return (
    <div className="relative flex items-center gap-8">
      {/* VIDEO */}
      <div className="relative w-[420px] h-[750px] rounded-xl overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={reel.video}
          autoPlay
          loop
          muted={muted}
          playsInline
          className="w-full h-full object-cover"
        />

        {/* TOP CONTROLS */}
        <div className="absolute top-4 left-4 flex gap-2">
          <button
            onClick={() => setMuted(!muted)}
            className="bg-black/60 p-2 rounded-full text-white"
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>

        {/* DESCRIPTION */}
        <div className="absolute bottom-4 left-4 right-16 text-white">
          <p className="font-semibold">@{reel.username}</p>
          <p className="text-sm opacity-90 line-clamp-2">{reel.description}</p>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex flex-col items-center gap-6 text-white">
        <button
          onClick={() => setLiked(!liked)}
          className="flex flex-col items-center gap-1"
        >
          <Heart
            className={liked ? "fill-red-500 text-red-500" : ""}
            size={26}
          />
          <span className="text-xs">{liked ? reel.likes + 1 : reel.likes}</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <MessageCircle size={26} />
          <span className="text-xs">{reel.comments}</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <Share2 size={26} />
          <span className="text-xs">Partager</span>
        </button>
      </div>
    </div>
  );
}
