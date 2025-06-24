import {useColorScheme} from "@/src/hooks/useColorScheme";
import {Colors} from "@/src/utils/constants/colors";
import React from "react";
import {SafeAreaView, StyleSheet, ViewStyle} from "react-native";

interface SafeAreaProps {
  children: React.ReactNode;
  style?: ViewStyle;
  backgroundColor?: string;
  edges?: ("top" | "bottom" | "left" | "right")[];
}

export const SafeArea: React.FC<SafeAreaProps> = ({children, style, backgroundColor, edges = ["top", "bottom"]}) => {
  const colorScheme = useColorScheme();
  const finalBackgroundColor = backgroundColor || Colors[colorScheme ?? "light"].background;

  return <SafeAreaView style={[styles.container, {backgroundColor: finalBackgroundColor}, style]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
