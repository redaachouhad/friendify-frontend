// app/(main)/friends/all/page.tsx
"use client";

import FriendCard from "@/components/myComponents/friends/FriendCard";
import React from "react";

const AllFriendsPage: React.FC = () => {
  // Mock data
  const friends = [
    {
      id: 1,
      name: "Fouad Elkhouk",
      mutual: "3 amis en commun",
      image: "/2.jpg",
    },
    {
      id: 2,
      name: "Imad Agadir",
      mutual: "1 ami en commun",
      image: "/2.jpg",
    },
    {
      id: 3,
      name: "Yassine Jaraf",
      mutual: "58 abonnés",
      image: "/2.jpg",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">All My Friends</h1>
        <button className="text-blue-600 font-semibold hover:underline">
          See More
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {friends.map((s) => (
          <FriendCard key={s.id} {...s} />
        ))}
      </div>
    </>
  );
};

export default AllFriendsPage;
