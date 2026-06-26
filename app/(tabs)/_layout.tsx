import React from "react";
import { Tabs } from "expo-router";
import {
  Home,
  Coffee,
  Star,
  MapPin,
  User,
} from "lucide-react-native";
import type { ColorValue } from "react-native";

function TabBarIcon({
  name,
  color,
  focused,
}: {
  name: string;
  color: ColorValue;
  focused: boolean;
}) {
  const icons: Record<string, React.ReactNode> = {
    home: <Home size={24} color={color as string} />,
    menu: <Coffee size={24} color={color as string} />,
    reviews: <Star size={24} color={color as string} />,
    "visit-us": <MapPin size={24} color={color as string} />,
    profile: <User size={24} color={color as string} />,
  };
  return <>{icons[name]}</>;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#6b341a",
        tabBarInactiveTintColor: "#a8a29e",
        tabBarStyle: {
          borderTopColor: "#f2e8d9",
          backgroundColor: "#ffffff",
          paddingTop: 6,
          height: 88,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
          marginTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="home" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="menu" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="reviews"
        options={{
          title: "Reviews",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="reviews" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="visit-us"
        options={{
          title: "Visit Us",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="visit-us" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="profile" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
