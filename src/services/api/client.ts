import {APIResponse, Category, Post, SearchResult, User} from "@/src/types";
import axios from "axios";

// Create axios instance with base configuration
const api = axios.create({
  baseURL: "https://api.example.com", // Replace with your actual API URL
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

// Request interceptor to add auth token
api.interceptors.request.use(
  config => {
    // Add auth token if available
    const token = null; // Get from secure storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      // Redirect to login or refresh token
    }
    return Promise.reject(error);
  }
);

// API functions
export const apiClient = {
  // Auth endpoints
  auth: {
    login: async (email: string, password: string): Promise<APIResponse<{user: User; token: string}>> => {
      const response = await api.post("/auth/login", {email, password});
      return response.data;
    },
    register: async (userData: any): Promise<APIResponse<{user: User; token: string}>> => {
      const response = await api.post("/auth/register", userData);
      return response.data;
    },
    forgotPassword: async (email: string): Promise<APIResponse<null>> => {
      const response = await api.post("/auth/forgot-password", {email});
      return response.data;
    },
    logout: async (): Promise<APIResponse<null>> => {
      const response = await api.post("/auth/logout");
      return response.data;
    }
  },

  // Posts endpoints
  posts: {
    getAll: async (): Promise<APIResponse<Post[]>> => {
      const response = await api.get("/posts");
      return response.data;
    },
    getById: async (id: string): Promise<APIResponse<Post>> => {
      const response = await api.get(`/posts/${id}`);
      return response.data;
    },
    create: async (postData: any): Promise<APIResponse<Post>> => {
      const response = await api.post("/posts", postData);
      return response.data;
    },
    update: async (id: string, postData: any): Promise<APIResponse<Post>> => {
      const response = await api.put(`/posts/${id}`, postData);
      return response.data;
    },
    delete: async (id: string): Promise<APIResponse<null>> => {
      const response = await api.delete(`/posts/${id}`);
      return response.data;
    },
    like: async (id: string): Promise<APIResponse<null>> => {
      const response = await api.post(`/posts/${id}/like`);
      return response.data;
    },
    unlike: async (id: string): Promise<APIResponse<null>> => {
      const response = await api.delete(`/posts/${id}/like`);
      return response.data;
    },
    save: async (id: string): Promise<APIResponse<null>> => {
      const response = await api.post(`/posts/${id}/save`);
      return response.data;
    },
    unsave: async (id: string): Promise<APIResponse<null>> => {
      const response = await api.delete(`/posts/${id}/save`);
      return response.data;
    }
  },

  // Categories endpoints
  categories: {
    getAll: async (): Promise<APIResponse<Category[]>> => {
      const response = await api.get("/categories");
      return response.data;
    }
  },

  // Search endpoints
  search: {
    all: async (query: string): Promise<APIResponse<SearchResult>> => {
      const response = await api.get(`/search?q=${encodeURIComponent(query)}`);
      return response.data;
    },
    posts: async (query: string): Promise<APIResponse<Post[]>> => {
      const response = await api.get(`/search/posts?q=${encodeURIComponent(query)}`);
      return response.data;
    },
    users: async (query: string): Promise<APIResponse<User[]>> => {
      const response = await api.get(`/search/users?q=${encodeURIComponent(query)}`);
      return response.data;
    }
  },

  // User endpoints
  users: {
    getProfile: async (): Promise<APIResponse<User>> => {
      const response = await api.get("/users/profile");
      return response.data;
    },
    updateProfile: async (userData: any): Promise<APIResponse<User>> => {
      const response = await api.put("/users/profile", userData);
      return response.data;
    },
    getSavedPosts: async (): Promise<APIResponse<Post[]>> => {
      const response = await api.get("/users/saved-posts");
      return response.data;
    }
  }
};

export default api;
