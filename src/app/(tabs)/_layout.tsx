import {HapticTab} from "@/src/components/HapticTab";
import {IconSymbol} from "@/src/components/ui/IconSymbol";
import TabBarBackground from "@/src/components/ui/TabBarBackground";
import {useColorScheme} from "@/src/hooks/useColorScheme";
import {Colors} from "@/src/utils/constants/colors";
import {Tabs} from "expo-router";
import React from "react";
import {Platform} from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            height: 88,
            paddingBottom: 28,
            paddingTop: 8,
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0.1,
            shadowOffset: {width: 0, height: -3},
            shadowRadius: 12
          },
          default: {
            height: 70,
            paddingBottom: 12,
            paddingTop: 8,
            borderTopWidth: 1,
            borderTopColor: Colors[colorScheme ?? "light"].border,
            elevation: 8
          }
        }),
        tabBarItemStyle: {
          paddingVertical: 2,
          paddingHorizontal: 4,
          justifyContent: "center",
          alignItems: "center"
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
          marginTop: 2,
          marginBottom: 0
        },
        tabBarIconStyle: {
          marginBottom: 2
        }
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          tabBarIcon: ({color, focused}) => <IconSymbol size={24} name='house.fill' color={color} style={{marginBottom: 2}} />
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: "Search",
          tabBarIcon: ({color, focused}) => <IconSymbol size={24} name='magnifyingglass' color={color} style={{marginBottom: 2}} />
        }}
      />
      <Tabs.Screen
        name='explore'
        options={{
          title: "Explore",
          tabBarIcon: ({color, focused}) => <IconSymbol size={24} name='safari' color={color} style={{marginBottom: 2}} />
        }}
      />
      <Tabs.Screen
        name='saved'
        options={{
          title: "Saved",
          tabBarIcon: ({color, focused}) => <IconSymbol size={24} name='bookmark.fill' color={color} style={{marginBottom: 2}} />
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: "Profile",
          tabBarIcon: ({color, focused}) => <IconSymbol size={24} name='person.circle.fill' color={color} style={{marginBottom: 2}} />
        }}
      />
    </Tabs>
  );
}
