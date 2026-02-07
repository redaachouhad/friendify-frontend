import { create } from "zustand";

interface VisibilityFormNewPostState {
  isVisibleFormNewPost: boolean;
  showVisibilityFormNewPost: () => void;
  hideVisibilityFormNewPost: () => void;
  toggleVisibilityFormNewPost: () => void;
}

const useVisibilityFormNewPost = create<VisibilityFormNewPostState>((set) => ({
  isVisibleFormNewPost: false,
  showVisibilityFormNewPost: () => set({ isVisibleFormNewPost: true }),
  hideVisibilityFormNewPost: () => set({ isVisibleFormNewPost: false }),
  toggleVisibilityFormNewPost: () =>
    set((state) => ({ isVisibleFormNewPost: !state.isVisibleFormNewPost })),
}));

export default useVisibilityFormNewPost;
