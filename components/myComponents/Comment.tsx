import { CommentType } from "@/types/comment";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { BiLike } from "react-icons/bi";

interface CommentProps {
  comment: CommentType;
  level?: number;
  onReply?: (parentId: number, content: string) => void;
}

const Comment: React.FC<CommentProps> = ({ comment, level = 0, onReply }) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [likes, setLikes] = useState(comment.likes ?? 0);

  const handlePublishReply = () => {
    if (!replyText.trim() || !onReply) return;

    onReply(comment.id, replyText);
    setReplyText("");
    setShowReplyInput(false);
  };

  return (
    <div className="flex flex-col gap-2" style={{ marginLeft: level * 20 }}>
      {/* Comment body */}
      <div className="flex gap-2">
        <Avatar sx={{ width: 32, height: 32 }} />
        <div className="bg-gray-100 rounded-lg p-2 w-full">
          <p className="font-semibold text-sm">{comment.user}</p>
          <p className="text-sm">{comment.content}</p>

          {/* Actions */}
          <div className="flex gap-4 mt-1 text-xs text-gray-600 font-semibold justify-end">
            <p className="text-xs text-gray-500">{comment.createdAt}</p>
            <button
              onClick={() => setLikes((prev) => prev + 1)}
              className="flex items-center gap-1 hover:text-blue-600"
            >
              <BiLike className="text-lg" />
              {likes}
            </button>

            <button
              onClick={() => setShowReplyInput((prev) => !prev)}
              className="hover:text-blue-600"
            >
              Répondre
            </button>
          </div>
        </div>
      </div>

      {/* Reply input */}
      {showReplyInput && (
        <div className="flex gap-2 ml-10">
          <Avatar sx={{ width: 28, height: 28 }} />
          <div className="flex flex-col gap-1 w-full">
            <input
              type="text"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Écrire une réponse..."
              className="border rounded-lg px-3 py-1 text-sm w-full focus:outline-none"
            />
            <button
              onClick={handlePublishReply}
              className="self-end text-blue-600 text-xs font-semibold"
            >
              Publier
            </button>
          </div>
        </div>
      )}

      {/* Recursive replies */}
      {comment.replies.map((reply) => (
        <Comment
          key={reply.id}
          comment={reply}
          level={level + 1}
          onReply={onReply}
        />
      ))}
    </div>
  );
};

export default Comment;
