import { create } from "zustand";

interface VisibilityFormNewPostState {
  isVisibleFormNewPost: boolean;
  show: () => void;
  hide: () => void;
  toggle: () => void;
}

const useVisibilityFormNewPost = create<VisibilityFormNewPostState>((set) => ({
  isVisibleFormNewPost: false,
  show: () => set({ isVisibleFormNewPost: true }),
  hide: () => set({ isVisibleFormNewPost: false }),
  toggle: () =>
    set((state) => ({ isVisibleFormNewPost: !state.isVisibleFormNewPost })),
}));

export default useVisibilityFormNewPost;
