import {Category, Comment, Post, User} from "@/src/types";

// Mock Users
export const mockUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    bio: "Full-stack developer passionate about React Native and mobile app development. Love creating beautiful user experiences.",
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-12-20T14:22:00Z"
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    bio: "UI/UX Designer & Frontend Developer. Crafting delightful digital experiences.",
    createdAt: "2024-02-10T09:15:00Z",
    updatedAt: "2024-12-19T16:45:00Z"
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    bio: "Mobile app enthusiast. Building the future one component at a time.",
    createdAt: "2024-03-05T11:20:00Z",
    updatedAt: "2024-12-18T13:10:00Z"
  }
];

// Mock Categories
export const mockCategories: Category[] = [
  {
    id: "1",
    name: "Technology",
    slug: "technology",
    color: "#3B82F6",
    icon: "💻"
  },
  {
    id: "2",
    name: "Design",
    slug: "design",
    color: "#8B5CF6",
    icon: "🎨"
  },
  {
    id: "3",
    name: "Programming",
    slug: "programming",
    color: "#10B981",
    icon: "⚡"
  },
  {
    id: "4",
    name: "Mobile",
    slug: "mobile",
    color: "#F59E0B",
    icon: "📱"
  },
  {
    id: "5",
    name: "Web Development",
    slug: "web-development",
    color: "#EF4444",
    icon: "🌐"
  }
];

// Mock Posts
export const mockPosts: Post[] = [
  {
    id: "1",
    title: "Getting Started with React Native",
    content: "React Native is a powerful framework for building mobile applications...",
    excerpt: "Learn the basics of React Native development and start building amazing mobile apps.",
    author: mockUsers[0],
    category: mockCategories[3],
    tags: ["react-native", "mobile", "development", "tutorial"],
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
    likes: 42,
    comments: 8,
    createdAt: "2024-12-18T10:30:00Z",
    updatedAt: "2024-12-18T10:30:00Z",
    isLiked: false,
    isSaved: false
  },
  {
    id: "2",
    title: "Building Beautiful UIs with Expo",
    content: "Expo provides excellent tools for creating stunning user interfaces...",
    excerpt: "Discover how to leverage Expo's powerful features to create beautiful mobile app interfaces.",
    author: mockUsers[1],
    category: mockCategories[1],
    tags: ["expo", "ui", "design", "mobile"],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
    likes: 38,
    comments: 12,
    createdAt: "2024-12-17T14:45:00Z",
    updatedAt: "2024-12-17T14:45:00Z",
    isLiked: true,
    isSaved: true
  },
  {
    id: "3",
    title: "TypeScript Best Practices",
    content: "TypeScript brings type safety to JavaScript development...",
    excerpt: "Learn essential TypeScript patterns and best practices for better code quality.",
    author: mockUsers[2],
    category: mockCategories[2],
    tags: ["typescript", "javascript", "best-practices", "development"],
    imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
    likes: 56,
    comments: 15,
    createdAt: "2024-12-16T09:20:00Z",
    updatedAt: "2024-12-16T09:20:00Z",
    isLiked: false,
    isSaved: true
  },
  {
    id: "4",
    title: "State Management with Redux Toolkit",
    content: "Redux Toolkit simplifies Redux usage significantly...",
    excerpt: "Master modern Redux patterns with Redux Toolkit for scalable state management.",
    author: mockUsers[0],
    category: mockCategories[2],
    tags: ["redux", "state-management", "react", "toolkit"],
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
    likes: 29,
    comments: 6,
    createdAt: "2024-12-15T16:10:00Z",
    updatedAt: "2024-12-15T16:10:00Z",
    isLiked: true,
    isSaved: false
  },
  {
    id: "5",
    title: "Modern Web Development Trends",
    content: "The web development landscape is constantly evolving...",
    excerpt: "Stay up-to-date with the latest trends and technologies in web development.",
    author: mockUsers[1],
    category: mockCategories[4],
    tags: ["web-development", "trends", "technology", "frontend"],
    imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
    likes: 73,
    comments: 22,
    createdAt: "2024-12-14T11:30:00Z",
    updatedAt: "2024-12-14T11:30:00Z",
    isLiked: false,
    isSaved: false
  }
];

// Mock Comments
export const mockComments: Comment[] = [
  {
    id: "1",
    content: "Great article! Really helped me understand React Native better.",
    author: mockUsers[1],
    postId: "1",
    createdAt: "2024-12-18T12:30:00Z",
    likes: 5,
    isLiked: false
  },
  {
    id: "2",
    content: "Thanks for sharing these insights. Very useful tips!",
    author: mockUsers[2],
    postId: "1",
    createdAt: "2024-12-18T14:15:00Z",
    likes: 3,
    isLiked: true
  },
  {
    id: "3",
    content: "The UI examples are fantastic. Love the design patterns!",
    author: mockUsers[0],
    postId: "2",
    createdAt: "2024-12-17T16:45:00Z",
    likes: 8,
    isLiked: false
  }
];

// Mock data for search suggestions
export const mockSearchSuggestions = ["React Native", "TypeScript", "Redux Toolkit", "Expo", "Mobile Development", "UI Design", "JavaScript", "Web Development"];

// Popular tags
export const mockPopularTags = ["react-native", "typescript", "mobile", "ui-design", "development", "javascript", "expo", "redux"];
