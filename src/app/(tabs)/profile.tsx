import {Button} from "@/src/components/ui/Button";
import {useToast} from "@/src/components/ui/Toast";
import {authActions} from "@/src/store/slices/authSlice";
import {RootState} from "@/src/store/store";
import {router} from "expo-router";
import React from "react";
import {Alert, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";

export default function ProfileScreen() {
  const {user} = useSelector((state: RootState) => state.auth);
  const {savedPosts, likedPosts} = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch();
  const {showToast} = useToast();

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel"
      },
      {
        text: "Logout",
        style: "destructive",
        onPress: () => {
          dispatch(authActions.logout());
          showToast("You have been logged out", "info");
        }
      }
    ]);
  };

  const handleEditProfile = () => {
    // Navigate to edit profile screen
    console.log("Navigate to edit profile");
  };

  const handleSettings = () => {
    router.push("/(modals)/settings");
  };

  if (!user) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor='#FFFFFF' />
        <View style={styles.centerContainer}>
          <Text style={styles.title}>Please log in to view your profile</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='#FFFFFF' />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
              }}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editImageButton}>
              <Text style={styles.editImageText}>📸</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>

          <View style={styles.bioContainer}>
            <Text style={styles.bio}>Full-stack developer passionate about React Native and mobile app development. Love creating beautiful user experiences.</Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{likedPosts.length}</Text>
              <Text style={styles.statLabel}>Liked</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{savedPosts.length}</Text>
              <Text style={styles.statLabel}>Saved</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Button title='Edit Profile' onPress={handleEditProfile} variant='outline' style={styles.editButton} />
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>📝</Text>
            <Text style={styles.menuText}>My Posts</Text>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>❤️</Text>
            <Text style={styles.menuText}>Liked Posts</Text>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>🔖</Text>
            <Text style={styles.menuText}>Saved Posts</Text>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleSettings}>
            <Text style={styles.menuIcon}>⚙️</Text>
            <Text style={styles.menuText}>Settings</Text>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>❓</Text>
            <Text style={styles.menuText}>Help & Support</Text>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>ℹ️</Text>
            <Text style={styles.menuText}>About</Text>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <View style={styles.logoutContainer}>
          <Button title='Logout' onPress={handleLogout} variant='outline' style={styles.logoutButton} textStyle={styles.logoutButtonText} />
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
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center"
  },
  header: {
    backgroundColor: "#FFFFFF",
    padding: 24,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB"
  },
  profileImageContainer: {
    position: "relative",
    marginBottom: 16
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#E5E7EB"
  },
  editImageButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#3B82F6",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF"
  },
  editImageText: {
    fontSize: 16
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 4
  },
  userEmail: {
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 16
  },
  bioContainer: {
    marginBottom: 24
  },
  bio: {
    fontSize: 14,
    color: "#4B5563",
    textAlign: "center",
    lineHeight: 20
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24
  },
  statItem: {
    alignItems: "center",
    flex: 1
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827"
  },
  statLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4
  },
  statDivider: {
    width: 1,
    height: 24,
    backgroundColor: "#E5E7EB"
  },
  buttonContainer: {
    width: "100%"
  },
  editButton: {
    marginHorizontal: 0
  },
  menuContainer: {
    backgroundColor: "#FFFFFF",
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: "hidden"
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6"
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 12,
    width: 24,
    textAlign: "center"
  },
  menuText: {
    fontSize: 16,
    color: "#111827",
    flex: 1
  },
  menuChevron: {
    fontSize: 20,
    color: "#9CA3AF"
  },
  logoutContainer: {
    padding: 24
  },
  logoutButton: {
    borderColor: "#EF4444"
  },
  logoutButtonText: {
    color: "#EF4444"
  }
});
