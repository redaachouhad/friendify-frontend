"use client";

import useVisibilityFormNewPost from "@/store/useVisibilityFormNewPost";
import Image from "next/image";
import { useState } from "react";
import { FaImage, FaPaperPlane, FaTimes } from "react-icons/fa";

function FormCreatePost() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null); // store selected image
  const { toggleVisibilityFormNewPost } = useVisibilityFormNewPost();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle your submission logic here (content + image)
    console.log({ content, image });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-[80vmin] max-w-2xl bg-white rounded-xl shadow-md p-4 flex flex-col gap-4"
    >
      {/* Close button */}
      <button
        onClick={() => toggleVisibilityFormNewPost()}
        type="button"
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
      >
        <FaTimes size={18} />
      </button>

      {/* Title */}
      <p className="text-2xl font-bold text-gray-800">New Post</p>

      {/* Textarea */}
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full min-h-30 resize-none border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Image Preview */}
      {image && (
        <div className="relative">
          <Image
            src={URL.createObjectURL(image)}
            alt="Preview"
            height={138}
            width={138}
            className="max-h-64 w-full object-contain rounded-md mt-2"
          />
          <button
            type="button"
            onClick={() => setImage(null)}
            className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1"
          >
            <FaTimes size={14} />
          </button>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-blue-600">
          <FaImage />
          <span>Add image</span>
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />
        </label>

        <button
          type="submit"
          disabled={!content.trim() && !image}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-semibold disabled:opacity-50"
        >
          <FaPaperPlane />
          Post
        </button>
      </div>
    </form>
  );
}

export default FormCreatePost;
