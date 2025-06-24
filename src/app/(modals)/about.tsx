import {Header} from "@/src/components/layout/Header";
import {config} from "@/src/utils/constants/config";
import {router} from "expo-router";
import React from "react";
import {Linking, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function AboutScreen() {
  const handleBackPress = () => {
    router.back();
  };

  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  const InfoItem = ({label, value}: {label: string; value: string}) => (
    <View style={styles.infoItem}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );

  const LinkItem = ({label, url}: {label: string; url: string}) => (
    <TouchableOpacity style={styles.linkItem} onPress={() => handleLinkPress(url)}>
      <Text style={styles.linkLabel}>{label}</Text>
      <Text style={styles.linkIcon}>↗</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='#FFFFFF' />
      <Header title='About' showBackButton onBackPress={handleBackPress} />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App Information</Text>
          <InfoItem label='App Name' value={config.name} />
          <InfoItem label='Version' value={config.version} />
          <InfoItem label='Description' value={config.description} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>
          <View style={styles.featureList}>
            <Text style={styles.featureItem}>✅ User Authentication</Text>
            <Text style={styles.featureItem}>✅ Content Management</Text>
            <Text style={styles.featureItem}>✅ Search & Discovery</Text>
            <Text style={styles.featureItem}>✅ Save & Like Posts</Text>
            <Text style={styles.featureItem}>✅ Dark/Light Theme</Text>
            <Text style={styles.featureItem}>✅ Profile Management</Text>
            <Text style={styles.featureItem}>✅ Settings & Preferences</Text>
            <Text style={styles.featureItem}>✅ Offline Support</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technology Stack</Text>
          <View style={styles.techList}>
            <Text style={styles.techItem}>• React Native</Text>
            <Text style={styles.techItem}>• Expo Router</Text>
            <Text style={styles.techItem}>• Redux Toolkit</Text>
            <Text style={styles.techItem}>• TypeScript</Text>
            <Text style={styles.techItem}>• Redux Persist</Text>
            <Text style={styles.techItem}>• React Native Reanimated</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Helpful Links</Text>
          <LinkItem label='React Native Documentation' url='https://reactnative.dev/docs/getting-started' />
          <LinkItem label='Expo Documentation' url='https://docs.expo.dev/' />
          <LinkItem label='Redux Toolkit' url='https://redux-toolkit.js.org/' />
          <LinkItem label='TypeScript' url='https://www.typescriptlang.org/docs/' />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Development Info</Text>
          <InfoItem label='Environment' value={__DEV__ ? "Development" : "Production"} />
          <InfoItem label='Platform' value={`React Native`} />
          <InfoItem label='Bundle ID' value='com.yourcompany.boilerplate' />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Built with ❤️ using React Native</Text>
          <Text style={styles.footerSubtext}>A comprehensive boilerplate for modern mobile apps</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB"
  },
  content: {
    flex: 1
  },
  section: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    padding: 16
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 16
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6"
  },
  infoLabel: {
    fontSize: 16,
    color: "#6B7280",
    flex: 1
  },
  infoValue: {
    fontSize: 16,
    color: "#111827",
    fontWeight: "500",
    flex: 1,
    textAlign: "right"
  },
  linkItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6"
  },
  linkLabel: {
    fontSize: 16,
    color: "#3B82F6",
    fontWeight: "500"
  },
  linkIcon: {
    fontSize: 16,
    color: "#3B82F6"
  },
  featureList: {
    gap: 8
  },
  featureItem: {
    fontSize: 16,
    color: "#374151",
    lineHeight: 24
  },
  techList: {
    gap: 6
  },
  techItem: {
    fontSize: 16,
    color: "#374151",
    lineHeight: 24
  },
  footer: {
    alignItems: "center",
    paddingVertical: 32,
    paddingHorizontal: 16
  },
  footerText: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 4
  },
  footerSubtext: {
    fontSize: 14,
    color: "#9CA3AF",
    textAlign: "center"
  }
});
