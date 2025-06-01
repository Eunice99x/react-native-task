import {Ionicons} from "@expo/vector-icons";
import {Tabs} from "expo-router";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {backgroundColor: "#eee"},
        tabBarActiveTintColor: "#c67c4e",
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarShowLabel: false
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => <Ionicons name='home' size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name='saved'
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => <Ionicons name='heart' size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name='bag'
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => <Ionicons name='bag' size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name='notifications'
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => <Ionicons name='notifications' size={size} color={color} />
        }}
      />
    </Tabs>
  );
};
export default _layout;
