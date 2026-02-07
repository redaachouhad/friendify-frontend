import { CommentType } from "@/types/comment";

// adding comments to reply list
export function addReplyToComments(
  comments: CommentType[],
  parentId: number,
  reply: CommentType,
): CommentType[] {
  return comments.map((comment) =>
    comment.id === parentId
      ? { ...comment, replies: [...comment.replies, reply] }
      : {
          ...comment,
          replies: addReplyToComments(comment.replies, parentId, reply),
        },
  );
}
