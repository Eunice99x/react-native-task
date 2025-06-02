import {LinearGradient} from "expo-linear-gradient";
import {router} from "expo-router";
import {Image, Text, TouchableOpacity, View} from "react-native";

export default function OnboardingScreen() {
  const handleContinue = () => {
    router.replace("/(tabs)");
  };

  return (
    <View className='flex-1 bg-black align-center justify-center'>
      <View className=''>
        <Image source={require("../../assets/images/register.png")} style={{width: 400, height: 400}} />
      </View>

      <View className='px-8 pb-15 items-center mt-10'>
        <Text className='text-white text-center mb-6 leading-4 text-md'>
          By tapping "Let's go", you acknowledge that{"\n"}
          you have read the privacy policy and agree{"\n"}
          to the terms of service.
        </Text>

        <TouchableOpacity onPress={handleContinue} className='bg-purple-600 px-12 py-4 rounded-3xl min-w-35' activeOpacity={0.8}>
          <View className='flex-row items-center'>
            <LinearGradient
              colors={["#7e22ce", "#9ee"]} 
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              className='px-8 py-2 rounded-md'
            >
              <Text className='text-black text-base font-semibold mr-2'>✓ LET'S GO</Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
