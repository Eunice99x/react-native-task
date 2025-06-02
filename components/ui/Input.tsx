import {cn} from "@/lib/utils";
import React from "react";
import {Text, TextInput, TextInputProps, View} from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerClassName?: string;
}

export function Input({label, error, className, containerClassName, ...props}: InputProps) {
  return (
    <View className={cn("mb-4", containerClassName)}>
      {label && <Text className='text-gray-200 mb-2 text-sm'>{label}</Text>}
      <TextInput className={cn("bg-gray-800 rounded-xl px-4 py-3 text-white border border-gray-700", error && "border-red-500", className)} placeholderTextColor='#666' {...props} />
      {error && <Text className='text-red-500 text-sm mt-1'>{error}</Text>}
    </View>
  );
}
