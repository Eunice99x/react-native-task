import {PostCard} from "@/src/components/ui/Card/PostCard";
import {RootState} from "@/src/store/store";
import {Post} from "@/src/types";
import {mockCategories} from "@/src/utils/constants/mockData";
import React, {useState} from "react";
import {FlatList, RefreshControl, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useSelector} from "react-redux";

export default function HomeScreen() {
  const {user} = useSelector((state: RootState) => state.auth);
  const {posts} = useSelector((state: RootState) => state.posts);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory ? posts.filter(post => post.category.id === selectedCategory) : posts;

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

  const handleCategoryPress = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.greeting}>
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.userName}>{user?.name || "Guest"} 👋</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{posts.length}</Text>
          <Text style={styles.statLabel}>Total Posts</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{posts.filter(p => p.isLiked).length}</Text>
          <Text style={styles.statLabel}>Liked</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{posts.filter(p => p.isSaved).length}</Text>
          <Text style={styles.statLabel}>Saved</Text>
        </View>
      </View>

      <View style={styles.categoriesSection}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll} contentContainerStyle={styles.categoriesContent}>
          <TouchableOpacity style={[styles.categoryChip, !selectedCategory && styles.categoryChipActive]} onPress={() => setSelectedCategory(null)}>
            <Text style={[styles.categoryChipText, !selectedCategory && styles.categoryChipTextActive]}>All</Text>
          </TouchableOpacity>
          {mockCategories.map(category => (
            <TouchableOpacity key={category.id} style={[styles.categoryChip, selectedCategory === category.id && styles.categoryChipActive, {borderColor: category.color}]} onPress={() => handleCategoryPress(category.id)}>
              <Text style={[styles.categoryChipText, selectedCategory === category.id && styles.categoryChipTextActive]}>
                {category.icon} {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.postsHeader}>
        <Text style={styles.sectionTitle}>{selectedCategory ? `${mockCategories.find(c => c.id === selectedCategory)?.name} Posts` : "Recent Posts"}</Text>
        <Text style={styles.postsCount}>
          {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"}
        </Text>
      </View>
    </View>
  );

  const renderPost = ({item}: {item: Post}) => <PostCard post={item} onPress={handlePostPress} />;

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyIcon}>📝</Text>
      <Text style={styles.emptyTitle}>No posts available</Text>
      <Text style={styles.emptySubtitle}>Check back later for new content or try a different category</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='#FFFFFF' />
      <FlatList
        data={filteredPosts}
        keyExtractor={item => item.id}
        renderItem={renderPost}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmpty}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={filteredPosts.length === 0 ? styles.emptyListContainer : undefined}
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
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB"
  },
  greeting: {
    marginBottom: 20
  },
  welcomeText: {
    fontSize: 16,
    color: "#6B7280"
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    marginTop: 4
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24
  },
  statCard: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginHorizontal: 4
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
  categoriesSection: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 12
  },
  categoriesScroll: {
    marginHorizontal: -16
  },
  categoriesContent: {
    paddingHorizontal: 16,
    gap: 8
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
    marginRight: 8
  },
  categoryChipActive: {
    backgroundColor: "#3B82F6",
    borderColor: "#3B82F6"
  },
  categoryChipText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#6B7280"
  },
  categoryChipTextActive: {
    color: "#FFFFFF"
  },
  postsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  postsCount: {
    fontSize: 14,
    color: "#6B7280"
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
