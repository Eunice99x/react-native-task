import {Ionicons} from "@expo/vector-icons";
import {Link} from "expo-router";
import {Image, Pressable, ScrollView, Text, View} from "react-native";

const Saved = () => {
  // Sample saved movies - replace with actual data storage later
  const savedMovies = [
    {id: "1", title: "Inception", year: "2010", image: "https://via.placeholder.com/300x450", rating: "8.8"},
    {id: "2", title: "The Dark Knight", year: "2008", image: "https://via.placeholder.com/300x450", rating: "9.0"},
    {id: "3", title: "Interstellar", year: "2014", image: "https://via.placeholder.com/300x450", rating: "8.6"}
  ];

  return (
    <View className='flex-1 bg-gray-900'>
      <View className='p-4 border-b border-gray-800'>
        <Text className='text-white text-2xl font-bold'>Saved Movies</Text>
      </View>

      <ScrollView className='flex-1 p-4'>
        {savedMovies.map(movie => (
          <Link href={`/movie/${movie.id}`} key={movie.id} asChild>
            <Pressable className='flex-row mb-4 bg-gray-800 rounded-xl overflow-hidden'>
              <Image source={{uri: movie.image}} className='w-24 h-36' />
              <View className='flex-1 p-3'>
                <View className='flex-row justify-between items-start'>
                  <View className='flex-1'>
                    <Text className='text-white text-lg font-semibold'>{movie.title}</Text>
                    <Text className='text-gray-400'>{movie.year}</Text>
                  </View>
                  <Pressable className='p-2'>
                    <Ionicons name='heart' size={24} color='#EF4444' />
                  </Pressable>
                </View>
                <View className='flex-row items-center mt-2'>
                  <Ionicons name='star' size={16} color='#FCD34D' />
                  <Text className='text-gray-400 ml-1'>{movie.rating}</Text>
                </View>
              </View>
            </Pressable>
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};

export default Saved;
