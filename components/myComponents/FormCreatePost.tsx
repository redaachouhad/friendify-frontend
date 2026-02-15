import api from "@/lib/axios";
import useVisibilityFormNewPost from "@/store/useVisibilityFormNewPost";
import { NewPostType } from "@/types/post";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaImage, FaPaperPlane, FaSpinner, FaTimes } from "react-icons/fa";

function FormCreatePost() {
  const [image, setImage] = useState<File | null>(null);
  const { toggleVisibilityFormNewPost } = useVisibilityFormNewPost();
  const [formErrors, setFormErrors] = useState();
  const { hideVisibilityFormNewPost } = useVisibilityFormNewPost();
  const [showBlockedButton, setShowBlockedButton] = useState<boolean>(false);
  // 1. Destructure setValue and watch from useForm
  const { register, handleSubmit, setValue, watch, reset } =
    useForm<NewPostType>({
      defaultValues: {
        visibility: "public",
        content: "",
        image: null,
      },
    });

  // Watch content to handle the button disabled state
  const contentValue = watch("content");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // 2. Sync the local image state with React Hook Form
  useEffect(() => {
    setValue("image", image);
  }, [image, setValue]);

  // submitting the form to create a post
  const onSubmit = async (data: NewPostType) => {
    try {
      console.log("Form Data:", data);

      const formData = new FormData();

      formData.append("visibility", data.visibility);
      formData.append("content", data.content);

      if (data.image) {
        formData.append("image", data.image);
      }

      setShowBlockedButton(true);

      const response = await api.post("/post/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const resData = await response.data;
      console.log(resData);

      reset({
        visibility: "public",
        content: "",
        image: null,
      });

      // ✅ reset local image state
      handleRemoveImage();
      hideVisibilityFormNewPost();
    } catch (error: any) {
      console.log("111111");
      console.log(error?.response?.data?.errors);
      console.log("222222");
      if (error?.response?.status == 422 && error?.response?.data?.errors) {
        setFormErrors(error?.response?.data?.errors);
      }
    }

    setShowBlockedButton(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-[80vmin] max-w-2xl bg-white rounded-xl shadow-md p-4 flex flex-col gap-4"
    >
      <button
        onClick={() => toggleVisibilityFormNewPost()}
        type="button"
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
      >
        <FaTimes size={18} />
      </button>

      <p className="text-2xl font-bold text-gray-800">New Post</p>

      {/* Visibility Select */}
      <div className="w-full flex flex-col gap-1">
        <p className="text-sm font-semibold">Visibility</p>
        <select
          {...register("visibility")}
          className="border rounded-lg p-1 w-full"
        >
          <option value="public">Public</option>
          <option value="private">Private</option>
          <option value="friends">Friends Only</option>
        </select>
        <p className="text-sm text-red-500 font-semibold">
          {formErrors?.visibility?.[0]}
        </p>
      </div>

      {/* Text Content */}
      <div className="w-full flex flex-col gap-1">
        <p className="text-sm font-semibold">Text Content</p>
        <textarea
          {...register("content")}
          placeholder="What's on your mind?"
          className="w-full min-h-30 resize-none border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-sm text-red-500 font-semibold">
          {formErrors?.content?.[0]}
        </p>
      </div>

      {/* Image Preview */}
      {image && (
        <div className="relative">
          <Image
            src={URL.createObjectURL(image)}
            alt="Preview"
            height={300}
            width={500}
            className="max-h-64 w-full object-contain rounded-md mt-2"
            onLoad={(e) => {
              // Cleanup memory after the image loads
              const target = e.target as HTMLImageElement;
              if (target.src.startsWith("blob:")) {
                URL.revokeObjectURL(target.src);
              }
            }}
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1"
          >
            <FaTimes size={14} />
          </button>
        </div>
      )}

      {/* Footer / Controls */}
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-blue-600">
          <FaImage />
          <span>Add image</span>
          <input
            type="file"
            accept="image/*"
            hidden
            ref={fileInputRef}
            onChange={handleImageChange}
            // Note: We do NOT use {...register("image")} here because
            // we are manually handling the state via useEffect/setValue
          />
          <p className="text-sm text-red-500 font-semibold">
            {formErrors?.image?.[0]} {formErrors?.userId?.[0]}
          </p>
        </label>

        {showBlockedButton ? (
          <button
            type="submit"
            disabled={true}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-semibold disabled:opacity-50"
          >
            <FaSpinner className="animate-spin" />
            Wait
          </button>
        ) : (
          <button
            type="submit"
            disabled={!contentValue?.trim() && !image}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-semibold disabled:opacity-50"
          >
            <FaPaperPlane />
            Post
          </button>
        )}
      </div>
    </form>
  );
}

export default FormCreatePost;
