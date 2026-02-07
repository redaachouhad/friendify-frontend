import { create } from "zustand";

interface VisibilityPostWithCommentsState {
  isVisiblePostWithComments: boolean;
  toggleVisibilityPostWithComments: () => void;
  hideVisibilityPostWithComments: () => void;
  showVisibilityPostWithComments: () => void;
}

const useVisibilityPostWithComments = create<VisibilityPostWithCommentsState>(
  (set) => ({
    isVisiblePostWithComments: false,
    toggleVisibilityPostWithComments: () =>
      set((state) => ({
        isVisiblePostWithComments: !state.isVisiblePostWithComments,
      })),
    hideVisibilityPostWithComments: () =>
      set({ isVisiblePostWithComments: false }),
    showVisibilityPostWithComments: () =>
      set({ isVisiblePostWithComments: true }),
  }),
);

export default useVisibilityPostWithComments;
