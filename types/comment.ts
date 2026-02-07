export interface CommentType {
  id: number;
  user: string;
  content: string;
  createdAt: string;
  replies: CommentType[];
  likes?: number;
}
