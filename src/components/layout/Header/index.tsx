import {IconSymbol} from "@/src/components/ui/IconSymbol";
import {useColorScheme} from "@/src/hooks/useColorScheme";
import {Colors} from "@/src/utils/constants/colors";
import React from "react";
import {SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightComponent?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  variant?: "default" | "large" | "compact";
}

export const Header: React.FC<HeaderProps> = ({title, subtitle, showBackButton = false, onBackPress, rightComponent, backgroundColor, textColor, variant = "default"}) => {
  const colorScheme = useColorScheme();
  const finalBackgroundColor = backgroundColor || Colors[colorScheme ?? "light"].background;
  const finalTextColor = textColor || Colors[colorScheme ?? "light"].text;

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: finalBackgroundColor}]}>
      <StatusBar barStyle={colorScheme === "dark" ? "light-content" : "dark-content"} backgroundColor={finalBackgroundColor} />
      <View style={[styles.header, variant === "large" && styles.headerLarge, variant === "compact" && styles.headerCompact]}>
        <View style={styles.leftSection}>
          {showBackButton && (
            <TouchableOpacity style={styles.backButton} onPress={onBackPress} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
              <IconSymbol name='chevron.left' size={24} color={finalTextColor} />
            </TouchableOpacity>
          )}
          <View style={styles.titleContainer}>
            <Text style={[styles.title, {color: finalTextColor}, variant === "large" && styles.titleLarge, variant === "compact" && styles.titleCompact]}>{title}</Text>
            {subtitle && <Text style={[styles.subtitle, {color: finalTextColor + "80"}, variant === "compact" && styles.subtitleCompact]}>{subtitle}</Text>}
          </View>
        </View>
        {rightComponent && <View style={styles.rightSection}>{rightComponent}</View>}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 60
  },
  headerLarge: {
    paddingVertical: 20,
    minHeight: 80
  },
  headerCompact: {
    paddingVertical: 8,
    minHeight: 48
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },
  backButton: {
    padding: 8,
    marginRight: 8,
    marginLeft: -8
  },
  titleContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827"
  },
  titleLarge: {
    fontSize: 24,
    fontWeight: "700"
  },
  titleCompact: {
    fontSize: 18,
    fontWeight: "600"
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 2
  },
  subtitleCompact: {
    fontSize: 12,
    marginTop: 1
  },
  rightSection: {
    marginLeft: 16
  }
});
