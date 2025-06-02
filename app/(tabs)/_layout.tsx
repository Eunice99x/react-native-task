import {Ionicons} from "@expo/vector-icons";
import {Tabs} from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1F2937",
          borderTopColor: "#374151"
        },
        tabBarActiveTintColor: "#60A5FA",
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarShowLabel: true
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          tabBarIcon: ({color, size}) => <Ionicons name='home' size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: "Search",
          tabBarIcon: ({color, size}) => <Ionicons name='search' size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name='saved'
        options={{
          title: "Watchlist",
          tabBarIcon: ({color, size}) => <Ionicons name='bookmark' size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name='notifications'
        options={{
          title: "Notifications",
          tabBarIcon: ({color, size}) => <Ionicons name='notifications' size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: "Profile",
          tabBarIcon: ({color, size}) => <Ionicons name='person' size={size} color={color} />
        }}
      />
    </Tabs>
  );
}
