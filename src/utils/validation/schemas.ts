import {z} from "zod";

// Authentication schemas
export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

export const registerSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters").regex(/[A-Z]/, "Password must contain at least one uppercase letter").regex(/[a-z]/, "Password must contain at least one lowercase letter").regex(/\d/, "Password must contain at least one number"),
    confirmPassword: z.string()
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
  });

export const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address")
});

// Profile schemas
export const profileUpdateSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  bio: z.string().max(500, "Bio cannot exceed 500 characters").optional(),
  email: z.string().email("Please enter a valid email address")
});

// Post schemas
export const createPostSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters").max(100, "Title cannot exceed 100 characters"),
  content: z.string().min(10, "Content must be at least 10 characters"),
  categoryId: z.string().min(1, "Please select a category"),
  tags: z.array(z.string()).min(1, "Please add at least one tag").max(5, "Cannot have more than 5 tags")
});

// Comment schema
export const commentSchema = z.object({
  content: z.string().min(1, "Comment cannot be empty").max(1000, "Comment cannot exceed 1000 characters")
});

// Search schema
export const searchSchema = z.object({
  query: z.string().min(1, "Search query cannot be empty").max(100, "Search query too long")
});

// Type exports
export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
export type ProfileUpdateFormData = z.infer<typeof profileUpdateSchema>;
export type CreatePostFormData = z.infer<typeof createPostSchema>;
export type CommentFormData = z.infer<typeof commentSchema>;
export type SearchFormData = z.infer<typeof searchSchema>;
