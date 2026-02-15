export type NewPostType = {
  userId: number;
  visibility: "public" | "private" | "friends";
  content: string;
  image?: File | null;
};

export type PostType = {
  content: string;
  created_at: Date;
  id: number;
  image_url: string;
  user: {
    id: number;
    username: string;
    uuid: string;
  };
  user_id: number;
};
