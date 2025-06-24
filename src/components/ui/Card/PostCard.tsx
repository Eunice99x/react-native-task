import {postsActions} from "@/src/store/slices/postsSlice";
import {Post} from "@/src/types";
import {formatDate} from "@/src/utils/formatters/date";
import {truncateText} from "@/src/utils/helpers";
import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useDispatch} from "react-redux";

interface PostCardProps {
  post: Post;
  onPress?: (post: Post) => void;
  showFullContent?: boolean;
}

export const PostCard: React.FC<PostCardProps> = ({post, onPress, showFullContent = false}) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(postsActions.toggleLike(post.id));
  };

  const handleSave = () => {
    dispatch(postsActions.toggleSave(post.id));
  };

  const handlePress = () => {
    onPress?.(post);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress} activeOpacity={0.9}>
      <View style={styles.header}>
        <View style={styles.authorInfo}>
          <Image source={{uri: post.author.avatar}} style={styles.avatar} />
          <View style={styles.authorDetails}>
            <Text style={styles.authorName}>{post.author.name}</Text>
            <Text style={styles.timestamp}>{formatDate(post.createdAt)}</Text>
          </View>
        </View>
        <View style={[styles.categoryBadge, {backgroundColor: post.category.color}]}>
          <Text style={styles.categoryText}>
            {post.category.icon} {post.category.name}
          </Text>
        </View>
      </View>

      {post.imageUrl && <Image source={{uri: post.imageUrl}} style={styles.postImage} />}

      <View style={styles.content}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.excerpt}>{showFullContent ? post.content : post.excerpt || truncateText(post.content, 120)}</Text>

        <View style={styles.tags}>
          {post.tags.slice(0, 3).map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>#{tag}</Text>
            </View>
          ))}
          {post.tags.length > 3 && <Text style={styles.moreTagsText}>+{post.tags.length - 3} more</Text>}
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.stats}>
          <TouchableOpacity style={styles.statButton} onPress={handleLike}>
            <Text style={[styles.statIcon, post.isLiked && styles.likedIcon]}>{post.isLiked ? "❤️" : "🤍"}</Text>
            <Text style={styles.statText}>{post.likes}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.statButton}>
            <Text style={styles.statIcon}>💬</Text>
            <Text style={styles.statText}>{post.comments}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={[styles.saveIcon, post.isSaved && styles.savedIcon]}>{post.isSaved ? "🔖" : "📑"}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingBottom: 12
  },
  authorInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12
  },
  authorDetails: {
    flex: 1
  },
  authorName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827"
  },
  timestamp: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2
  },
  categoryBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12
  },
  categoryText: {
    fontSize: 12,
    color: "#FFFFFF",
    fontWeight: "600"
  },
  postImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover"
  },
  content: {
    padding: 16
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 8,
    lineHeight: 24
  },
  excerpt: {
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 20,
    marginBottom: 12
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center"
  },
  tag: {
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 4
  },
  tagText: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "500"
  },
  moreTagsText: {
    fontSize: 12,
    color: "#9CA3AF",
    fontStyle: "italic"
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6"
  },
  stats: {
    flexDirection: "row",
    alignItems: "center"
  },
  statButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
    paddingVertical: 4
  },
  statIcon: {
    fontSize: 16,
    marginRight: 4
  },
  likedIcon: {
    color: "#EF4444"
  },
  statText: {
    fontSize: 14,
    color: "#6B7280",
    fontWeight: "500"
  },
  saveButton: {
    padding: 4
  },
  saveIcon: {
    fontSize: 18
  },
  savedIcon: {
    color: "#3B82F6"
  }
});
