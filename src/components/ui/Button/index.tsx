import React from "react";
import {StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle} from "react-native";

export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({title, onPress, variant = "primary", size = "medium", disabled = false, loading = false, icon, iconPosition = "left", style, textStyle}) => {
  const buttonStyle = [styles.button, styles[variant], styles[size], disabled && styles.disabled, loading && styles.loading, style];

  const textStyleMerged = [styles.text, styles[`${variant}Text`], styles[`${size}Text`], disabled && styles.disabledText, textStyle];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} disabled={disabled || loading} activeOpacity={0.8}>
      <View style={styles.content}>
        {icon && iconPosition === "left" && <View style={styles.iconLeft}>{icon}</View>}
        <Text style={textStyleMerged}>{loading ? "Loading..." : title}</Text>
        {icon && iconPosition === "right" && <View style={styles.iconRight}>{icon}</View>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontWeight: "600",
    textAlign: "center"
  },
  iconLeft: {
    marginRight: 8
  },
  iconRight: {
    marginLeft: 8
  },
  // Variants
  primary: {
    backgroundColor: "#3B82F6"
  },
  primaryText: {
    color: "#FFFFFF"
  },
  secondary: {
    backgroundColor: "#6B7280"
  },
  secondaryText: {
    color: "#FFFFFF"
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#3B82F6"
  },
  outlineText: {
    color: "#3B82F6"
  },
  ghost: {
    backgroundColor: "transparent"
  },
  ghostText: {
    color: "#3B82F6"
  },
  // Sizes
  small: {
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  smallText: {
    fontSize: 14
  },
  medium: {
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  mediumText: {
    fontSize: 16
  },
  large: {
    paddingHorizontal: 20,
    paddingVertical: 16
  },
  largeText: {
    fontSize: 18
  },
  // States
  disabled: {
    backgroundColor: "#9CA3AF",
    opacity: 0.6
  },
  disabledText: {
    color: "#FFFFFF"
  },
  loading: {
    opacity: 0.8
  }
});
