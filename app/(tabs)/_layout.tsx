import {Ionicons} from "@expo/vector-icons";
import {Tabs} from "expo-router";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {backgroundColor: "#1F2937"},
        tabBarActiveTintColor: "#60A5FA",
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarShowLabel: true
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({color, size}) => <Ionicons name='home' size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({color, size}) => <Ionicons name='search' size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name='saved'
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({color, size}) => <Ionicons name='bookmark' size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({color, size}) => <Ionicons name='person' size={size} color={color} />
        }}
      />
    </Tabs>
  );
};
export default _layout;
