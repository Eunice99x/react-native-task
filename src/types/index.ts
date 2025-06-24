// Global type definitions

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: User;
  category: Category;
  tags: string[];
  imageUrl?: string;
  likes: number;
  comments: number;
  createdAt: string;
  updatedAt: string;
  isLiked: boolean;
  isSaved: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  color: string;
  icon: string;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  postId: string;
  createdAt: string;
  likes: number;
  isLiked: boolean;
}

export interface SearchResult {
  posts: Post[];
  users: User[];
  categories: Category[];
}

export interface APIResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> extends APIResponse<T> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export type TabScreens = "index" | "explore" | "search" | "saved" | "profile";
export type AuthScreens = "login" | "register" | "forgot-password";
export type ModalScreens = "modal-example";
