import { Foundation, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { Avatar } from "@/components/Avatar";
import { theme } from "@/theme";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.white,
        tabBarInactiveTintColor: theme.colors.gray[600],
        tabBarStyle: {
          backgroundColor: theme.colors.black,
          borderColor: theme.colors.black,
          borderTopColor: theme.colors.black,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Foundation name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="chatbubble-ellipses" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Avatar
              selected={focused}
              source={{ uri: "https://github.com/wilsonmjunior.png" }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
