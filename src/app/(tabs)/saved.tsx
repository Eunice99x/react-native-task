import {PostCard} from "@/src/components/ui/Card/PostCard";
import {RootState} from "@/src/store/store";
import {Post} from "@/src/types";
import React, {useState} from "react";
import {FlatList, RefreshControl, SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";

export default function SavedScreen() {
  const {savedPosts} = useSelector((state: RootState) => state.posts);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const handlePostPress = (post: Post) => {
    // Navigate to post detail
    console.log("Navigate to post:", post.id);
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>Saved Posts</Text>
      <Text style={styles.subtitle}>
        {savedPosts.length} {savedPosts.length === 1 ? "post" : "posts"} saved
      </Text>
    </View>
  );

  const renderPost = ({item}: {item: Post}) => <PostCard post={item} onPress={handlePostPress} />;

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyIcon}>📑</Text>
      <Text style={styles.emptyTitle}>No saved posts yet</Text>
      <Text style={styles.emptySubtitle}>Save posts you find interesting to read them later</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='#FFFFFF' />
      <FlatList
        data={savedPosts}
        keyExtractor={item => item.id}
        renderItem={renderPost}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmpty}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={savedPosts.length === 0 ? styles.emptyListContainer : undefined}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB"
  },
  header: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827"
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4
  },
  emptyListContainer: {
    flexGrow: 1
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
    paddingVertical: 64
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center",
    marginBottom: 8
  },
  emptySubtitle: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 24
  }
});
