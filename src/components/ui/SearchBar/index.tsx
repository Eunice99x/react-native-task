import {IconSymbol} from "@/src/components/ui/IconSymbol";
import {postsActions} from "@/src/store/slices/postsSlice";
import {mockPosts} from "@/src/utils/constants/mockData";
import {debounce, searchInText} from "@/src/utils/helpers";
import React, {useCallback, useState} from "react";
import {Keyboard, StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import {useDispatch} from "react-redux";

interface SearchBarProps {
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({onFocus, onBlur, placeholder = "Search posts, users, tags..."}) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();

  const debouncedSearch = useCallback(
    debounce((searchQuery: string) => {
      if (searchQuery.trim()) {
        const results = mockPosts.filter(post => searchInText(post.title, searchQuery) || searchInText(post.content, searchQuery) || searchInText(post.author.name, searchQuery) || post.tags.some(tag => searchInText(tag, searchQuery)));
        dispatch(postsActions.setSearchResults(results));
        dispatch(postsActions.setSearchQuery(searchQuery));
      } else {
        dispatch(postsActions.clearSearch());
      }
    }, 300),
    []
  );

  const handleTextChange = (text: string) => {
    setQuery(text);
    debouncedSearch(text);
  };

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  const clearSearch = () => {
    setQuery("");
    dispatch(postsActions.clearSearch());
    Keyboard.dismiss();
  };

  return (
    <View style={[styles.container, isFocused && styles.containerFocused]}>
      <View style={styles.searchIcon}>
        <IconSymbol name='magnifyingglass' size={20} color='#6B7280' />
      </View>

      <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor='#9CA3AF' value={query} onChangeText={handleTextChange} onFocus={handleFocus} onBlur={handleBlur} returnKeyType='search' clearButtonMode='while-editing' />

      {query.length > 0 && (
        <TouchableOpacity style={styles.clearButton} onPress={clearSearch}>
          <IconSymbol name='xmark.circle.fill' size={20} color='#6B7280' />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "transparent"
  },
  containerFocused: {
    borderColor: "#3B82F6",
    backgroundColor: "#FFFFFF",
    shadowColor: "#3B82F6",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  searchIcon: {
    marginRight: 8
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#111827",
    paddingVertical: 4
  },
  clearButton: {
    marginLeft: 8,
    padding: 4
  }
});
