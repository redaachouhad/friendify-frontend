export type NewPostType = {
  userId: number;
  visibility: "public" | "private" | "friends";
  content: string;
  image?: File | null;
};
