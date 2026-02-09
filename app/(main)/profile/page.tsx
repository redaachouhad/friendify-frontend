"use client";

import Post from "@/components/myComponents/Post";
import Image from "next/image";
import { FaPen, FaPlus } from "react-icons/fa";
import { IoCamera } from "react-icons/io5";

function Profile() {
  const numbers = Array.from({ length: 8 }, (_, i) => i);
  return (
    <div className="flex-1 flex flex-col items-center">
      <div className="max-w-5xl w-full rounded-b-3xl">
        {/* Image de couverture */}
        <div className="w-full h-100 rounded-b-3xl overflow-hidden">
          <Image
            src="/images/couverture_image.jpg"
            alt="Profile background"
            width={800}
            height={320}
            className="object-cover w-full h-full object-center  rounded-b-3xl"
          />
        </div>

        {/* Profile User */}
        <div className="rounded-b-3xl pt-5 pl-5 pb-10 flex flex-col justify-center items-center gap-2">
          {/* User Avatar */}
          <div className="flex relative">
            <Image
              src="/2.jpg"
              alt="Profile picture"
              width={128}
              height={128}
              className="rounded-full border-4 border-gray-100 w-44 h-44"
            />
            <div className="absolute translate-32 bg-gray-200 p-1 rounded-full border-gray-500 border cursor-pointer">
              <IoCamera className="text-gray-700 text-3xl" />
            </div>
          </div>
          {/* Name of user + number of friends */}
          <div className="flex flex-col gap-1 items-center">
            <h1 className="text-2xl font-bold">Reda El Amrani</h1>
            <p className="text-sm font-bold">10K amis</p>
          </div>
          {/* buttons add story + modify profile */}
          <div className="flex-1 flex gap-3">
            <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 flex gap-2 items-center cursor-pointer rounded-md font-semibold">
              <FaPlus />
              <p>Add Story</p>
            </button>
            <button className="text-black p-2 flex gap-2 items-center cursor-pointer rounded-md font-semibold bg-gray-200 hover:bg-gray-300">
              <FaPen />
              <p>Modify Profile</p>
            </button>
          </div>
        </div>

        <div className="w-full bg-gray-100 flex flex-row rounded-md p-3">
          <div className="flex-1/2 p-1 flex flex-col gap-3">
            {/* Friends */}
            <p className="text-2xl font-bold">Friends</p>
            <div className="grid grid-cols-4 gap-2">
              {numbers.map((item, index) => {
                return (
                  <Image
                    key={index}
                    src={"/images/image-story.png"}
                    alt="image"
                    width={138}
                    height={138}
                    className="rounded-md"
                  />
                );
              })}
              <div className="col-span-4 bg-white flex justify-center p-2 rounded-md hover:bg-gray-200 cursor-pointer border border-gray-200">
                <p className="font-semibold">See More Friends</p>
              </div>
            </div>

            {/* Friends */}
            <p className="text-2xl font-bold">Images</p>
            <div className="grid grid-cols-3 gap-2">
              {numbers.map((item, index) => {
                return (
                  <Image
                    key={index}
                    src={"/images/image-story.png"}
                    alt="image"
                    width={138}
                    height={138}
                    className="rounded-md"
                  />
                );
              })}
              <div className="col-span-3 bg-white flex justify-center p-2 rounded-md hover:bg-gray-200 cursor-pointer border border-gray-200">
                <p className="font-semibold">See More Images</p>
              </div>
            </div>
          </div>

          {/* Friends */}

          {/* Posts */}
          <div className="flex-1/2 p-1">
            {/* My Posts */}
            <p className="text-2xl my-2 font-bold">My Posts</p>
            <div className="w-full flex flex-col justify-around gap-4 py-4">
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
