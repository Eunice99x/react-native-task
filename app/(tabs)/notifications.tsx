import {Ionicons} from "@expo/vector-icons";
import {Image, Pressable, ScrollView, Text, View} from "react-native";

const notifications = () => {
  const menuItems = [
    {id: "1", title: "Account Settings", icon: "person-outline"},
    {id: "2", title: "Notification Settings", icon: "notifications-outline"},
    {id: "3", title: "Watch History", icon: "time-outline"},
    {id: "4", title: "Download Settings", icon: "download-outline"},
    {id: "5", title: "Help & Support", icon: "help-circle-outline"},
    {id: "6", title: "About", icon: "information-circle-outline"}
  ];

  return (
    <ScrollView className='flex-1 bg-gray-900'>
      {/* Profile Header */}
      <View className='items-center pt-8 pb-6 border-b border-gray-800'>
        <View className='w-24 h-24 rounded-full bg-gray-800 mb-4 overflow-hidden'>
          <Image source={{uri: "https://via.placeholder.com/200x200"}} className='w-full h-full' />
        </View>
        <Text className='text-white text-xl font-bold mb-1'>John Doe</Text>
        <Text className='text-gray-400'>john.doe@example.com</Text>
      </View>

      {/* Stats */}
      <View className='flex-row justify-around py-6 border-b border-gray-800'>
        <View className='items-center'>
          <Text className='text-white text-xl font-bold'>24</Text>
          <Text className='text-gray-400'>Watchlist</Text>
        </View>
        <View className='items-center'>
          <Text className='text-white text-xl font-bold'>12</Text>
          <Text className='text-gray-400'>Reviews</Text>
        </View>
        <View className='items-center'>
          <Text className='text-white text-xl font-bold'>48</Text>
          <Text className='text-gray-400'>Favorites</Text>
        </View>
      </View>

      {/* Menu Items */}
      <View className='p-4'>
        {menuItems.map(item => (
          <Pressable key={item.id} className='flex-row items-center py-4 border-b border-gray-800'>
            {/* <Ionicons name={item.icon} size={24} color='#60A5FA' /> */}
            <Text className='text-white text-lg ml-4 flex-1'>{item.title}</Text>
            <Ionicons name='chevron-forward' size={20} color='#9CA3AF' />
          </Pressable>
        ))}
      </View>

      {/* Logout Button */}
      <Pressable className='mx-4 mt-4 mb-8 py-4 bg-red-600 rounded-xl'>
        <Text className='text-white text-center font-bold text-lg'>Log Out</Text>
      </Pressable>
    </ScrollView>
  );
};

export default notifications;
