// Mock API responses for development
import {User} from "@/src/types";
import {mockPosts, mockUsers} from "@/src/utils/constants/mockData";

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Auth API
export const authApi = {
  login: async (credentials: {email: string; name: string}) => {
    await delay(1000);

    // Mock validation - in real app, this would be backend validation
    const validUser = {name: "John Doe", email: "john@example.com"};

    if (credentials.name.trim() === validUser.name && credentials.email.trim().toLowerCase() === validUser.email) {
      return {
        success: true,
        user: {
          id: "1",
          name: credentials.name,
          email: credentials.email,
          avatar: mockUsers[0].avatar,
          bio: "Welcome to the app!",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        token: "mock-jwt-token"
      };
    } else {
      throw new Error("Invalid credentials");
    }
  },

  register: async (userData: {firstName: string; lastName: string; email: string; password: string}) => {
    await delay(1500);

    // Mock successful registration
    return {
      success: true,
      user: {
        id: Date.now().toString(),
        name: `${userData.firstName} ${userData.lastName}`,
        email: userData.email,
        avatar: mockUsers[1].avatar,
        bio: "New to the app!",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      token: "mock-jwt-token"
    };
  },

  forgotPassword: async (email: string) => {
    await delay(2000);

    // Mock successful password reset
    return {
      success: true,
      message: "Password reset link sent to your email"
    };
  },

  logout: async () => {
    await delay(500);
    return {success: true};
  }
};

// Posts API
export const postsApi = {
  getPosts: async (page: number = 1, limit: number = 10) => {
    await delay(800);

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = mockPosts.slice(startIndex, endIndex);

    return {
      success: true,
      data: paginatedPosts,
      pagination: {
        page,
        limit,
        total: mockPosts.length,
        totalPages: Math.ceil(mockPosts.length / limit)
      }
    };
  },

  getPost: async (id: string) => {
    await delay(500);

    const post = mockPosts.find(p => p.id === id);
    if (!post) {
      throw new Error("Post not found");
    }

    return {
      success: true,
      data: post
    };
  },

  searchPosts: async (query: string) => {
    await delay(600);

    const results = mockPosts.filter(
      post => post.title.toLowerCase().includes(query.toLowerCase()) || post.content.toLowerCase().includes(query.toLowerCase()) || post.author.name.toLowerCase().includes(query.toLowerCase()) || post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );

    return {
      success: true,
      data: results
    };
  },

  likePost: async (postId: string) => {
    await delay(300);

    return {
      success: true,
      message: "Post liked successfully"
    };
  },

  savePost: async (postId: string) => {
    await delay(300);

    return {
      success: true,
      message: "Post saved successfully"
    };
  }
};

// User API
export const userApi = {
  getProfile: async (userId: string) => {
    await delay(500);

    const user = mockUsers.find(u => u.id === userId);
    if (!user) {
      throw new Error("User not found");
    }

    return {
      success: true,
      data: user
    };
  },

  updateProfile: async (userId: string, updates: Partial<User>) => {
    await delay(800);

    return {
      success: true,
      data: {
        ...mockUsers[0],
        ...updates,
        updatedAt: new Date().toISOString()
      }
    };
  },

  uploadAvatar: async (userId: string, imageUri: string) => {
    await delay(1500);

    // Mock image upload
    const avatarUrl = `https://images.unsplash.com/photo-${Date.now()}?w=150&h=150&fit=crop&crop=face`;

    return {
      success: true,
      data: {
        avatarUrl
      }
    };
  }
};

// Generic API error handler
export const handleApiError = (error: any): string => {
  if (error.response) {
    // Server responded with error status
    return error.response.data?.message || "Server error occurred";
  } else if (error.request) {
    // Request was made but no response
    return "Network error. Please check your connection.";
  } else {
    // Other errors
    return error.message || "An unexpected error occurred";
  }
};
