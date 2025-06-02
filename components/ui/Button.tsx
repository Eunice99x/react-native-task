import {cn} from "@/lib/utils";
import React from "react";
import {ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  loading?: boolean;
  children: React.ReactNode;
}

export function Button({className, variant = "default", size = "default", loading = false, disabled, children, ...props}: ButtonProps) {
  const baseStyles = "flex-row items-center justify-center rounded-xl";

  const variants = {
    default: "bg-primary",
    outline: "border border-primary",
    ghost: "bg-transparent"
  };

  const sizes = {
    default: "px-4 py-3",
    sm: "px-3 py-2",
    lg: "px-6 py-4"
  };

  return (
    <TouchableOpacity className={cn(baseStyles, variants[variant], sizes[size], disabled && "opacity-50", className)} disabled={disabled || loading} {...props}>
      {loading ? <ActivityIndicator color={variant === "outline" ? "#000" : "#fff"} /> : <Text className={cn("text-center font-semibold", variant === "outline" ? "text-primary" : "text-white")}>{children}</Text>}
    </TouchableOpacity>
  );
}
