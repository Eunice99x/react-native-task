import {Header} from "@/src/components/layout/Header";
import {authActions} from "@/src/store/slices/authSlice";
import {themeActions} from "@/src/store/slices/themeSlice";
import {RootState} from "@/src/store/store";
import {router} from "expo-router";
import React, {useState} from "react";
import {Alert, SafeAreaView, ScrollView, StatusBar, StyleSheet, Switch, Text, TouchableOpacity, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";

const SimpleIcon = ({name, size = 20, color = "#6B7280"}: {name: string; size?: number; color?: string}) => {
  const iconMap: {[key: string]: string} = {
    "person.circle": "👤",
    lock: "🔒",
    envelope: "✉️",
    "sun.max": "☀️",
    moon: "🌙",
    bell: "🔔",
    "questionmark.circle": "❓",
    "doc.text": "📄",
    "rectangle.portrait.and.arrow.right": "🚪",
    trash: "🗑️",
    "chevron.right": "›"
  };

  return <Text style={{fontSize: size, color: iconMap[name] ? undefined : color}}>{iconMap[name] || "•"}</Text>;
};

export default function SettingsScreen() {
  const {user} = useSelector((state: RootState) => state.auth);
  const {colorScheme, useSystemTheme} = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const [notifications, setNotifications] = useState({
    push: true,
    email: true,
    inApp: true
  });

  const handleBackPress = () => {
    router.back();
  };

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {text: "Cancel", style: "cancel"},
      {
        text: "Logout",
        style: "destructive",
        onPress: () => {
          dispatch(authActions.logout());
          router.replace("/");
        }
      }
    ]);
  };

  const handleDeleteAccount = () => {
    Alert.alert("Delete Account", "This action cannot be undone. Are you sure you want to delete your account?", [
      {text: "Cancel", style: "cancel"},
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          // Implement account deletion
          console.log("Delete account");
        }
      }
    ]);
  };

  const toggleTheme = () => {
    const newScheme = colorScheme === "light" ? "dark" : "light";
    dispatch(themeActions.setColorScheme(newScheme));
    dispatch(themeActions.setUseSystemTheme(false));
  };

  const toggleSystemTheme = (value: boolean) => {
    dispatch(themeActions.setUseSystemTheme(value));
  };

  const SettingItem = ({icon, title, subtitle, onPress, rightComponent, showArrow = true, danger = false}: {icon: string; title: string; subtitle?: string; onPress?: () => void; rightComponent?: React.ReactNode; showArrow?: boolean; danger?: boolean}) => (
    <TouchableOpacity style={styles.settingItem} onPress={onPress} disabled={!onPress}>
      <View style={styles.settingLeft}>
        <View style={[styles.iconContainer, danger && styles.dangerIcon]}>
          <SimpleIcon name={icon} size={20} color={danger ? "#EF4444" : "#6B7280"} />
        </View>
        <View style={styles.settingText}>
          <Text style={[styles.settingTitle, danger && styles.dangerText]}>{title}</Text>
          {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
        </View>
      </View>
      <View style={styles.settingRight}>
        {rightComponent}
        {showArrow && onPress && <SimpleIcon name='chevron.right' size={16} color='#9CA3AF' />}
      </View>
    </TouchableOpacity>
  );

  const SectionHeader = ({title}: {title: string}) => <Text style={styles.sectionHeader}>{title}</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='#FFFFFF' />
      <Header title='Settings' showBackButton onBackPress={handleBackPress} />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <SectionHeader title='Account' />
        <View style={styles.section}>
          <SettingItem icon='person.circle' title='Edit Profile' subtitle='Update your personal information' onPress={() => console.log("Edit profile")} />
          <SettingItem icon='lock' title='Change Password' subtitle='Update your password' onPress={() => console.log("Change password")} />
          <SettingItem icon='envelope' title='Email' subtitle={user?.email || "Not set"} showArrow={false} />
        </View>

        <SectionHeader title='Appearance' />
        <View style={styles.section}>
          <SettingItem
            icon='sun.max'
            title='Use System Theme'
            subtitle='Follow system appearance settings'
            rightComponent={<Switch value={useSystemTheme} onValueChange={toggleSystemTheme} trackColor={{false: "#E5E7EB", true: "#3B82F6"}} thumbColor={useSystemTheme ? "#FFFFFF" : "#F3F4F6"} />}
            showArrow={false}
          />
          {!useSystemTheme && <SettingItem icon={colorScheme === "light" ? "sun.max" : "moon"} title='Theme' subtitle={colorScheme === "light" ? "Light mode" : "Dark mode"} onPress={toggleTheme} />}
        </View>

        <SectionHeader title='Notifications' />
        <View style={styles.section}>
          <SettingItem
            icon='bell'
            title='Push Notifications'
            subtitle='Receive notifications on your device'
            rightComponent={<Switch value={notifications.push} onValueChange={value => setNotifications(prev => ({...prev, push: value}))} trackColor={{false: "#E5E7EB", true: "#3B82F6"}} thumbColor={notifications.push ? "#FFFFFF" : "#F3F4F6"} />}
            showArrow={false}
          />
          <SettingItem
            icon='envelope'
            title='Email Notifications'
            subtitle='Receive updates via email'
            rightComponent={<Switch value={notifications.email} onValueChange={value => setNotifications(prev => ({...prev, email: value}))} trackColor={{false: "#E5E7EB", true: "#3B82F6"}} thumbColor={notifications.email ? "#FFFFFF" : "#F3F4F6"} />}
            showArrow={false}
          />
        </View>

        <SectionHeader title='Support' />
        <View style={styles.section}>
          <SettingItem icon='questionmark.circle' title='Help & Support' subtitle='Get help with the app' onPress={() => console.log("Help & Support")} />
          <SettingItem icon='doc.text' title='Privacy Policy' subtitle='Read our privacy policy' onPress={() => console.log("Privacy Policy")} />
          <SettingItem icon='doc.text' title='Terms of Service' subtitle='Read our terms' onPress={() => console.log("Terms of Service")} />
        </View>

        <SectionHeader title='Account Actions' />
        <View style={styles.section}>
          <SettingItem icon='rectangle.portrait.and.arrow.right' title='Logout' subtitle='Sign out of your account' onPress={handleLogout} danger />
          <SettingItem icon='trash' title='Delete Account' subtitle='Permanently delete your account' onPress={handleDeleteAccount} danger showArrow={false} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>App Version 1.0.0</Text>
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
  sectionHeader: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
    marginTop: 24,
    marginBottom: 8,
    marginHorizontal: 16
  },
  section: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    borderRadius: 12,
    paddingVertical: 8
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 16,
    minHeight: 60
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12
  },
  dangerIcon: {
    backgroundColor: "#FEF2F2"
  },
  settingText: {
    flex: 1
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111827"
  },
  dangerText: {
    color: "#EF4444"
  },
  settingSubtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 2
  },
  settingRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  footer: {
    alignItems: "center",
    paddingVertical: 32
  },
  footerText: {
    fontSize: 14,
    color: "#9CA3AF"
  }
});
