import {Post} from "@/src/types";
import {mockPosts} from "@/src/utils/constants/mockData";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface PostsState {
  posts: Post[];
  savedPosts: Post[];
  likedPosts: Post[];
  loading: boolean;
  error: string | null;
  searchResults: Post[];
  searchQuery: string;
}

const initialState: PostsState = {
  posts: mockPosts,
  savedPosts: mockPosts.filter(post => post.isSaved),
  likedPosts: mockPosts.filter(post => post.isLiked),
  loading: false,
  error: null,
  searchResults: [],
  searchQuery: ""
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    toggleLike: (state, action: PayloadAction<string>) => {
      const postId = action.payload;
      const post = state.posts.find(p => p.id === postId);
      if (post) {
        post.isLiked = !post.isLiked;
        post.likes += post.isLiked ? 1 : -1;

        if (post.isLiked) {
          state.likedPosts.push(post);
        } else {
          state.likedPosts = state.likedPosts.filter(p => p.id !== postId);
        }
      }
    },
    toggleSave: (state, action: PayloadAction<string>) => {
      const postId = action.payload;
      const post = state.posts.find(p => p.id === postId);
      if (post) {
        post.isSaved = !post.isSaved;

        if (post.isSaved) {
          state.savedPosts.push(post);
        } else {
          state.savedPosts = state.savedPosts.filter(p => p.id !== postId);
        }
      }
    },
    setSearchResults: (state, action: PayloadAction<Post[]>) => {
      state.searchResults = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    clearSearch: state => {
      state.searchResults = [];
      state.searchQuery = "";
    }
  }
});

export const postsActions = postsSlice.actions;
