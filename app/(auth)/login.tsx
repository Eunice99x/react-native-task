import {Button} from "@/components/ui/Button";
import {FormField} from "@/components/ui/FormField";
import {loginSchema} from "@/lib/validations";
import {zodResolver} from "@hookform/resolvers/zod";
import {Link, router} from "expo-router";
import {useForm} from "react-hook-form";
import {Alert, ScrollView, Text, View} from "react-native";
import type {z} from "zod";

type LoginForm = z.infer<typeof loginSchema>;

export default function Login() {
  const {control, handleSubmit} = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      // TODO: Implement actual login logic here
      console.log("Login data:", data);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated delay
      router.replace("/(tabs)");
    } catch (error) {
      Alert.alert("Error", "Failed to sign in");
    }
  };

  return (
    <ScrollView className='flex-1 bg-background px-4'>
      <View className='py-12'>
        <Text className='text-text-primary text-4xl font-bold mb-2'>Welcome Back</Text>
        <Text className='text-text-secondary text-lg mb-8'>Sign in to continue!</Text>

        <FormField control={control} name='email' label='Email' placeholder='Enter your email' keyboardType='email-address' autoCapitalize='none' />

        <FormField control={control} name='password' label='Password' placeholder='Enter your password' secureTextEntry />

        <Button className='mt-6' onPress={handleSubmit(onSubmit)}>
          Sign In
        </Button>

        <View className='flex-row justify-center mt-6'>
          <Text className='text-text-secondary'>Don't have an account? </Text>
          <Link href='/register' className='text-primary font-semibold'>
            Create Account
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
