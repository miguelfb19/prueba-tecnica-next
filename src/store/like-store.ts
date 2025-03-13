import { create } from "zustand";

interface PostLiked {
  isLiked: boolean;
  postId: number;
}

interface PostLikedStore {
  postsLiked: PostLiked[];
  setLikes: (postId: number) => void;
}

export const useLikeStore = create<PostLikedStore>((set) => ({
  postsLiked: [],
  setLikes: (postId: number) =>
    set((state: PostLikedStore) => ({
      postsLiked: state.postsLiked.map((post: PostLiked) => {
        if (post.postId === postId) {
          return { ...post, isLiked: !post.isLiked };
        }
        return post;
      }),
    })),
}));
