import {ResizeMode, Video} from "expo-av";
import {Link} from "expo-router";
import {Dimensions, Pressable, Text, View} from "react-native";

export default function Welcome() {
  const {width, height} = Dimensions.get("window");
  return (
    <>
      <Video
        className='helloworld'
        source={require("../../assets/images/vid.mp4")}
        rate={1.0}
        volume={1.0}
        isMuted={true}
        shouldPlay
        isLooping
        resizeMode={ResizeMode.STRETCH} 
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: width,
          height: height
        }}
      />
      <View className='flex-1 relative'>
        <View className='flex-1 justify-between px-8 pt-32 pb-16'>
          <View className='items-center flex-1 justify-center'>
            <View className='mb-10'>
              <Text className='text-white text-6xl'>🪶</Text>
            </View>
            <Text className='text-white text-base text-center leading-6 opacity-90'>
              let your AI talk. let your heart decide.{"\n"}
              welcome to winged.
            </Text>
            <View className='w-full mt-6'>
              <View className='gap-4'>
                <Link href='/register' asChild>
                  <Pressable className='bg-white py-4 rounded-xl items-center'>
                    <Text className='text-black text-base font-semibold'>SIGN UP</Text>
                  </Pressable>
                </Link>

                <Link href='/login-email' asChild>
                  <Pressable className='bg-white/20 py-4 rounded-xl items-center border border-white/30'>
                    <Text className='text-white text-sm font-medium'>SIGN IN WITH EMAIL</Text>
                  </Pressable>
                </Link>

                <Link href='/login-apple' asChild>
                  <Pressable className='bg-white/20 py-4 rounded-xl items-center border border-white/30'>
                    <Text className='text-white text-sm font-medium'>🍎 SIGN IN WITH APPLE</Text>
                  </Pressable>
                </Link>

                <Link href='/login-google' asChild>
                  <Pressable className='bg-white/20 py-4 rounded-xl items-center border border-white/30'>
                    <Text className='text-white text-sm font-medium'>G SIGN IN WITH GOOGLE</Text>
                  </Pressable>
                </Link>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
