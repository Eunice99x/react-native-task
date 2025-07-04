import React from "react";
import {StyleSheet, View, ViewStyle} from "react-native";

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: number;
  shadow?: boolean;
}

export const Card: React.FC<CardProps> = ({children, style, padding = 16, shadow = true}) => {
  return <View style={[styles.card, {padding}, shadow && styles.shadow, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginVertical: 4,
    marginHorizontal: 16
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4
  }
});
