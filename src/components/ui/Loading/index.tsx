import React from "react";
import {ActivityIndicator, StyleSheet, Text, View, ViewStyle} from "react-native";

interface LoadingProps {
  size?: "small" | "large";
  color?: string;
  text?: string;
  style?: ViewStyle;
  overlay?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({size = "large", color = "#3B82F6", text, style, overlay = false}) => {
  const containerStyle = [overlay ? styles.overlay : styles.container, style];

  return (
    <View style={containerStyle}>
      <ActivityIndicator size={size} color={color} />
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    zIndex: 999
  },
  text: {
    marginTop: 12,
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center"
  }
});
