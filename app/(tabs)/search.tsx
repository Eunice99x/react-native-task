import {Ionicons} from "@expo/vector-icons";
import {Link} from "expo-router";
import {useState} from "react";
import {Image, Pressable, ScrollView, Text, TextInput, View} from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample search results - replace with actual API call later
  const searchResults = [
    {id: "1", title: "The Matrix", year: "1999", image: "https://via.placeholder.com/300x450"},
    {id: "2", title: "Matrix Reloaded", year: "2003", image: "https://via.placeholder.com/300x450"},
    {id: "3", title: "Matrix Revolutions", year: "2003", image: "https://via.placeholder.com/300x450"}
  ];

  return (
    <View className='flex-1 bg-gray-900'>
      <View className='p-4 border-b border-gray-800'>
        <View className='flex-row items-center bg-gray-800 rounded-xl px-4 py-2'>
          <Ionicons name='search' size={20} color='#9CA3AF' />
          <TextInput className='flex-1 ml-2 text-white' placeholder='Search movies...' placeholderTextColor='#9CA3AF' value={searchQuery} onChangeText={setSearchQuery} />
          {searchQuery !== "" && (
            <Pressable onPress={() => setSearchQuery("")}>
              <Ionicons name='close-circle' size={20} color='#9CA3AF' />
            </Pressable>
          )}
        </View>
      </View>

      <ScrollView className='flex-1 p-4'>
        {/* Recent Searches */}
        {searchQuery === "" && (
          <View className='mb-6'>
            <Text className='text-white text-xl font-semibold mb-4'>Recent Searches</Text>
            {["Inception", "The Dark Knight", "Interstellar"].map(search => (
              <Pressable key={search} className='flex-row items-center py-3 border-b border-gray-800' onPress={() => setSearchQuery(search)}>
                <Ionicons name='time-outline' size={20} color='#9CA3AF' />
                <Text className='text-white ml-3'>{search}</Text>
              </Pressable>
            ))}
          </View>
        )}

        {/* Search Results */}
        {searchQuery !== "" && (
          <View>
            <Text className='text-white text-xl font-semibold mb-4'>Search Results</Text>
            {searchResults.map(movie => (
              <Link href={`/movie/${movie.id}`} key={movie.id} asChild>
                <Pressable className='flex-row mb-4 bg-gray-800 rounded-xl overflow-hidden'>
                  <Image source={{uri: movie.image}} className='w-24 h-36' />
                  <View className='flex-1 p-3'>
                    <Text className='text-white text-lg font-semibold'>{movie.title}</Text>
                    <Text className='text-gray-400'>{movie.year}</Text>
                    <View className='flex-row items-center mt-2'>
                      <Ionicons name='star' size={16} color='#FCD34D' />
                      <Text className='text-gray-400 ml-1'>8.7</Text>
                    </View>
                  </View>
                </Pressable>
              </Link>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Search;
