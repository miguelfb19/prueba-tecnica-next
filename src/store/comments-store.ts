import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface LocalComment {
  id: string;
  postId: number;
  email: string;
  comment: string;
  date: Date;
}

interface LocalCommentsStore {
  localComments: LocalComment[];
  addComment: (newComment: LocalComment) => void;
  removeComment: (id: string) => void;
};

export const useLocalCommentsStore = create<LocalCommentsStore>()(
  persist(
    (set, get) => ({
      localComments: [],
      addComment: (newComment: LocalComment) => {
        set({ localComments: [...get().localComments, newComment] });
      },
      removeComment: (id: string) => {
        set({
          localComments: get().localComments.filter((data) => data.id !== id),
        });
      },
    }),
    {
      name: "local-comments",
      // This part format the localStorage data to return date as Date because localStorage save it as string and that's lauch an error on user interface
      merge: (persistedState, currentState) => {
        const restoredState = persistedState as LocalCommentsStore;
        return {
          ...currentState,
          localComments: restoredState.localComments.map((comment) => ({
            ...comment,
            date: new Date(comment.date), // convert to `Date`
          })),
        };
      },
    }
  )
);
