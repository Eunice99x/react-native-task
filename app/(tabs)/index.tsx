import {Ionicons} from "@expo/vector-icons";
import {Link} from "expo-router";
import {Image, Pressable, ScrollView, Text, View} from "react-native";

export default function Index() {
  // Sample trending movies - replace with actual API data later
  const trendingMovies = [
    {id: "1", title: "Inception", rating: "8.8", image: "https://via.placeholder.com/300x450"},
    {id: "2", title: "The Dark Knight", rating: "9.0", image: "https://via.placeholder.com/300x450"},
    {id: "3", title: "Interstellar", rating: "8.6", image: "https://via.placeholder.com/300x450"}
  ];

  const categories = [
    {id: "1", name: "Action", icon: "🎬"},
    {id: "2", name: "Comedy", icon: "😂"},
    {id: "3", name: "Drama", icon: "🎭"},
    {id: "4", name: "Horror", icon: "👻"}
  ];

  return (
    <ScrollView className='flex-1 bg-gray-900'>
      <View className='p-4'>
        {/* Header */}
        <View className='flex-row justify-between items-center mb-6'>
          <Text className='text-white text-2xl font-bold'>MovieHub</Text>
          <Ionicons name='notifications-outline' size={24} color='white' />
        </View>

        {/* Featured Movie */}
        <View className='mb-8'>
          <Text className='text-white text-xl font-semibold mb-4'>Featured</Text>
          <Pressable className='relative rounded-xl overflow-hidden'>
            <Image source={{uri: "https://via.placeholder.com/400x200"}} className='w-full h-48 rounded-xl' />
            <View className='absolute bottom-0 left-0 right-0 p-4 bg-black/50'>
              <Text className='text-white text-xl font-bold'>Featured Movie Title</Text>
              <View className='flex-row items-center mt-1'>
                <Ionicons name='star' size={16} color='#FCD34D' />
                <Text className='text-white ml-1'>9.5</Text>
              </View>
            </View>
          </Pressable>
        </View>

        {/* Categories */}
        <View className='mb-8'>
          <Text className='text-white text-xl font-semibold mb-4'>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map(category => (
              <Pressable key={category.id} className='mr-4 items-center'>
                <View className='w-16 h-16 bg-gray-800 rounded-full items-center justify-center mb-2'>
                  <Text className='text-2xl'>{category.icon}</Text>
                </View>
                <Text className='text-white text-center'>{category.name}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Trending Movies */}
        <View className='mb-8'>
          <Text className='text-white text-xl font-semibold mb-4'>Trending Now</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {trendingMovies.map(movie => (
              <Link href={`/movie/${movie.id}`} key={movie.id} asChild>
                <Pressable className='mr-4'>
                  <View className='w-32'>
                    <Image source={{uri: movie.image}} className='w-32 h-48 rounded-lg' />
                    <Text className='text-white mt-2 font-semibold'>{movie.title}</Text>
                    <View className='flex-row items-center mt-1'>
                      <Ionicons name='star' size={14} color='#FCD34D' />
                      <Text className='text-gray-400 ml-1'>{movie.rating}</Text>
                    </View>
                  </View>
                </Pressable>
              </Link>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}
