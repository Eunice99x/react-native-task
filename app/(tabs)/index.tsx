import {Ionicons} from "@expo/vector-icons";
import {ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";

export default function Index() {
  return (
    <ScrollView className='flex-1 bg-gray-900'>
      {/* Header */}
      <View className='px-4 pt-12 pb-4'>
        <Text className='text-gray-400 text-sm mb-1'>Location</Text>
        <View className='flex-row items-center'>
          <Text className='text-white text-lg font-medium'>Bilzen, Tanjungbalai</Text>
          <Ionicons name='chevron-down' size={20} color='white' style={{marginLeft: 8}} />
        </View>
      </View>

      {/* Search Bar and Filter */}
      <View className='px-4 mb-6'>
        <View className='flex-row items-center'>
          <View className='flex-1 bg-gray-800 rounded-xl px-4 py-3 flex-row items-center'>
            <Ionicons name='search' size={20} color='gray' />
            <TextInput placeholder='Search coffee' placeholderTextColor='gray' className='flex-1 ml-3 text-white' />
          </View>
          <View className='p-2.5 bg-[#c67c4e] rounded-md ml-2'>
            <TouchableOpacity className='ml-3  p-3 rounded-xl'>
              <Ionicons name='options' size={20} color='white' />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Promo Banner */}
      <View className='px-4 mb-6'>
        <View className='bg-gradient-to-r bg-[#947257] rounded-2xl p-4 flex-row items-center justify-between overflow-hidden relative'>
          <View className='flex-1'>
            <View className='bg-[#ed5151] px-3 py-1 rounded-full self-start mb-2'>
              <Text className='text-white text-xs font-bold'>Promo</Text>
            </View>
            <Text className='text-white text-2xl font-bold leading-tight'>Buy one get{"\n"}one FREE</Text>
          </View>
          <View className='absolute right-0 top-0 bottom-0 w-32'>
            <View className='w-24 h-24 bg-white rounded-full absolute -right-4 top-4 opacity-20' />
            <View className='w-16 h-16 bg-white rounded-full absolute right-8 bottom-6 opacity-30' />
            <View className='w-20 h-20 bg-orange-300 rounded-full absolute right-2 top-8 flex items-center justify-center'>
              <View className='w-12 h-12 bg-white rounded-full flex items-center justify-center'>
                <Text className='text-2xl'>☕</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Category Filters */}
      <View className='px-4 mb-6'>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className='flex-row space-x-3'>
            <TouchableOpacity className='bg-orange-500 px-4 py-2 rounded-xl'>
              <Text className='text-white font-medium'>All Coffee</Text>
            </TouchableOpacity>
            <TouchableOpacity className='px-4 py-2'>
              <Text className='text-gray-400 font-medium'>Machiato</Text>
            </TouchableOpacity>
            <TouchableOpacity className='px-4 py-2'>
              <Text className='text-gray-400 font-medium'>Latte</Text>
            </TouchableOpacity>
            <TouchableOpacity className='px-4 py-2'>
              <Text className='text-gray-400 font-medium'>Americano</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {/* Coffee Grid */}
      <View className='px-4 pb-20'>
        <View className='flex-row flex-wrap justify-between'>
          {/* Caffe Mocha */}
          <View className='w-[48%] bg-gray-800 rounded-2xl p-4 mb-4'>
            <View className='relative mb-3'>
              <View className='w-full h-32 bg-gray-700 rounded-xl overflow-hidden'>
                <View className='w-full h-full bg-gradient-to-b from-orange-200 to-orange-800 flex items-center justify-center'>
                  <View className='w-20 h-20 bg-white rounded-full flex items-center justify-center'>
                    <Text className='text-4xl'>☕</Text>
                  </View>
                </View>
              </View>
              <View className='absolute top-2 left-2 bg-black bg-opacity-50 px-2 py-1 rounded-lg flex-row items-center'>
                <Ionicons name='star' size={12} color='orange' />
                <Text className='text-white text-xs ml-1'>4.8</Text>
              </View>
            </View>
            <Text className='text-white text-lg font-semibold mb-1'>Caffe Mocha</Text>
            <Text className='text-gray-400 text-sm mb-3'>Deep Foam</Text>
            <View className='flex-row items-center justify-between'>
              <Text className='text-white text-2xl font-bold'>$ 4.53</Text>
              <View className='bg-[#c67c4e] p-2 rounded-lg '>
                <TouchableOpacity className='bg-orange-500 p-2 rounded-lg'>
                  <Ionicons name='add' size={16} color='white' />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Flat White */}
          <View className='w-[48%] bg-gray-800 rounded-2xl p-4 mb-4'>
            <View className='relative mb-3'>
              <View className='w-full h-32 bg-gray-700 rounded-xl overflow-hidden'>
                <View className='w-full h-full bg-gradient-to-b from-yellow-200 to-yellow-700 flex items-center justify-center'>
                  <View className='w-20 h-20 bg-white rounded-full flex items-center justify-center'>
                    <Text className='text-4xl'>☕</Text>
                  </View>
                </View>
              </View>
              <View className='absolute top-2 left-2 bg-black bg-opacity-50 px-2 py-1 rounded-lg flex-row items-center'>
                <Ionicons name='star' size={12} color='orange' />
                <Text className='text-white text-xs ml-1'>4.8</Text>
              </View>
            </View>
            <Text className='text-white text-lg font-semibold mb-1'>Flat White</Text>
            <Text className='text-gray-400 text-sm mb-3'>Espresso</Text>
            <View className='flex-row items-center justify-between'>
              <Text className='text-white text-2xl font-bold'>$ 4.53</Text>
              <View className='bg-[#c67c4e] p-2 rounded-lg '>
                <TouchableOpacity className='bg-orange-500 p-2 rounded-lg'>
                  <Ionicons name='add' size={16} color='white' />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Additional Coffee Items */}
          <View className='w-[48%] bg-gray-800 rounded-2xl p-4 mb-4'>
            <View className='relative mb-3'>
              <View className='w-full h-32 bg-gray-700 rounded-xl overflow-hidden'>
                <View className='w-full h-full bg-gradient-to-b from-amber-200 to-amber-800 flex items-center justify-center'>
                  <View className='w-20 h-20 bg-white rounded-full flex items-center justify-center'>
                    <Text className='text-4xl'>☕</Text>
                  </View>
                </View>
              </View>
              <View className='absolute top-2 left-2 bg-black bg-opacity-50 px-2 py-1 rounded-lg flex-row items-center'>
                <Ionicons name='star' size={12} color='orange' />
                <Text className='text-white text-xs ml-1'>4.8</Text>
              </View>
            </View>
            <Text className='text-white text-lg font-semibold mb-1'>Cappuccino</Text>
            <Text className='text-gray-400 text-sm mb-3'>Steamed Milk</Text>
            <View className='flex-row items-center justify-between'>
              <Text className='text-white text-2xl font-bold'>$ 4.53</Text>
              <View className='bg-[#c67c4e] p-2 rounded-lg '>
                <TouchableOpacity className='bg-orange-500 p-2 rounded-lg'>
                  <Ionicons name='add' size={16} color='white' />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View className='w-[48%] bg-gray-800 rounded-2xl p-4 mb-4'>
            <View className='relative mb-3'>
              <View className='w-full h-32 bg-gray-700 rounded-xl overflow-hidden'>
                <View className='w-full h-full bg-gradient-to-b from-orange-300 to-orange-900 flex items-center justify-center'>
                  <View className='w-20 h-20 bg-white rounded-full flex items-center justify-center'>
                    <Text className='text-4xl'>☕</Text>
                  </View>
                </View>
              </View>
              <View className='absolute top-2 left-2 bg-black bg-opacity-50 px-2 py-1 rounded-lg flex-row items-center'>
                <Ionicons name='star' size={12} color='orange' />
                <Text className='text-white text-xs ml-1'>4.6</Text>
              </View>
            </View>
            <Text className='text-white text-lg font-semibold mb-1'>Americano</Text>
            <Text className='text-gray-400 text-sm mb-3'>Hot Water</Text>
            <View className='flex-row items-center justify-between'>
              <Text className='text-white text-2xl font-bold'>$ 4.53</Text>
              <View className='bg-[#c67c4e] p-2 rounded-lg '>
                <TouchableOpacity className='bg-orange-500 p-2 rounded-lg'>
                  <Ionicons name='add' size={16} color='white' />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
