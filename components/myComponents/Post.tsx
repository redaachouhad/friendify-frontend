import StyledBadge from "@/helpers/StyledBadge";
import { timeAgo } from "@/lib/utils";
import useVisibilityPostWithComments from "@/store/useVisiblityPostWithComments";
import { PostType } from "@/types/post";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import { BiLike } from "react-icons/bi";
import { FaRegMessage } from "react-icons/fa6";
import { TbShare3 } from "react-icons/tb";

type PostProps = {
  post: PostType;
};

function Post({ post }: PostProps) {
  const { toggleVisibilityPostWithComments } = useVisibilityPostWithComments();

  console.log(post.image_url);
  return (
    <div className="w-full rounded-md border border-gray-300 flex flex-col bg-white p-3 gap-3">
      {/* User */}
      <div className="w-full flex gap-2">
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            alt={post?.user?.username}
            src="2.jpg"
            sx={{ width: 50, height: 50 }}
          />
        </StyledBadge>
        <div>
          <p className="text-lg font-semibold">{post?.user?.username}</p>
          <p className="text-sm text-gray-500">{timeAgo(post?.created_at)}</p>
        </div>
      </div>

      {/* description de post */}
      <p className="text-gray-700">{post?.content}</p>

      {/* the media content (image or video) of the post */}
      {post?.image_url && (
        <div className="relative w-full h-80">
          <Image
            src={"http://localhost:8000/storage/" + post?.image_url}
            fill
            alt="Post image"
            className="object-contain rounded-md h-full"
            unoptimized
          />
        </div>
      )}

      {/* reactions count and comments count */}
      <div className="flex items-center justify-between w-full text-sm text-gray-600">
        <p>Reda et 100 autres personnes</p>
        <p>28 commentaires</p>
      </div>

      {/* reaction button + comment button + share button */}
      <div className="flex items-center justify-between w-full font-semibold">
        <div className="flex items-center gap-2 cursor-pointer flex-1/3 justify-center">
          <BiLike className="text-2xl" />
          <p>J'aime</p>
        </div>
        <div
          onClick={() => toggleVisibilityPostWithComments()}
          className="flex items-center gap-2 cursor-pointer flex-1/3 justify-center"
        >
          <FaRegMessage className="text-xl" />
          <p>Commenter</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer flex-1/3 justify-center">
          <TbShare3 className="text-2xl" />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
