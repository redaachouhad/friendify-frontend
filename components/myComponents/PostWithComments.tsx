import { addReplyToComments } from "@/helpers/commentHelper";
import StyledBadge from "@/helpers/StyledBadge";
import useVisibilityPostWithComments from "@/store/useVisiblityPostWithComments";
import { CommentType } from "@/types/comment";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import { useState } from "react";
import { BiLike } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { TbShare3 } from "react-icons/tb";
import Comment from "./Comment";

function PostWithComments() {
  const comments: CommentType[] = [
    {
      id: 1,
      user: "Reda",
      content: "This is a comment",
      createdAt: "2 min ago",
      replies: [
        {
          id: 2,
          user: "Yassine",
          content: "This is a reply",
          createdAt: "1 min ago",
          replies: [],
        },
      ],
    },
    {
      id: 3,
      user: "Sara",
      content: "Another comment",
      createdAt: "5 min ago",
      replies: [],
    },
    {
      id: 4,
      user: "Sara",
      content: "Another comment",
      createdAt: "5 min ago",
      replies: [],
    },
    {
      id: 5,
      user: "Sara",
      content: "Another comment",
      createdAt: "5 min ago",
      replies: [
        {
          id: 6,
          user: "Sara",
          content: "Another comment",
          createdAt: "5 min ago",
          replies: [],
        },
      ],
    },
  ];

  const [commentsState, setCommentsState] = useState<CommentType[]>(comments);
  const { toggleVisibilityPostWithComments } = useVisibilityPostWithComments();

  const handleAddReply = (parentId: number, content: string) => {
    const newReply: CommentType = {
      id: Date.now(),
      user: "Current User",
      content,
      createdAt: "now",
      replies: [],
      likes: 0,
    };

    setCommentsState((prev) => addReplyToComments(prev, parentId, newReply));
  };

  return (
    <div className="w-[90vmin] h-[85%] border bg-white rounded-lg p-4 flex flex-col gap-2">
      {/* Close button */}
      <button
        type="button"
        className="absolute top-3 right-3 text-white hover:text-gray-300 cursor-pointer"
        onClick={() => toggleVisibilityPostWithComments()}
      >
        <FaTimes size={28} />
      </button>

      {/* User Avatar */}
      <div className="w-full flex gap-2">
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          variant="dot"
        >
          <Avatar alt="Remy Sharp" src="2.jpg" sx={{ width: 50, height: 50 }} />
        </StyledBadge>
        <div>
          <p className="text-lg font-semibold">Reda Achouhad</p>
          <p className="text-sm text-gray-500">2 min ago</p>
        </div>
      </div>

      {/* description de post */}
      <p className="text-gray-700 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
        nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies
        nisl nunc eget nisl.
      </p>

      {/* the media content (image or video) of the post */}
      <div className="relative w-full h-50">
        <Image
          src="/post-1.jpg"
          alt="Post image"
          fill
          className="object-cover rounded-md"
        />
      </div>

      {/* reactions count and comments count */}
      <div className="flex items-center justify-between w-full text-sm">
        <p>Reda et 100 autres personnes</p>
        <p>28 commentaires</p>
      </div>

      {/* reaction button + comment button + share button */}
      <div className="flex items-center justify-between w-full font-semibold">
        <div className="flex items-center gap-2 cursor-pointer flex-1/3 justify-center">
          <BiLike className="text-2xl" />
          <p>J'aime</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer flex-1/3 justify-center">
          <FaRegMessage className="text-xl" />
          <p>Commenter</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer flex-1/3 justify-center">
          <TbShare3 className="text-2xl" />
          <p>Share</p>
        </div>
      </div>
      <hr />

      {/* comments and nested comments here */}
      <div className="flex-1 overflow-y-scroll flex flex-col gap-4 mt-2">
        {commentsState.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onReply={handleAddReply}
          />
        ))}
      </div>
    </div>
  );
}

export default PostWithComments;
