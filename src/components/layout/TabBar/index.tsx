import {useColorScheme} from "@/src/hooks/useColorScheme";
import {Colors} from "@/src/utils/constants/colors";
import React from "react";
import {Platform, StyleSheet, View} from "react-native";

interface TabBarProps {
  children: React.ReactNode;
}

export const TabBar: React.FC<TabBarProps> = ({children}) => {
  const colorScheme = useColorScheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: Colors[colorScheme ?? "light"].background,
          borderTopColor: Colors[colorScheme ?? "light"].border
        }
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: Platform.select({
      ios: 88,
      default: 70
    }),
    paddingBottom: Platform.select({
      ios: 28,
      default: 12
    }),
    paddingTop: 8,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8
  }
});
