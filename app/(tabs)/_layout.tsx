import React from "react";
import { Tabs } from "expo-router";
import {
  Home,
  Coffee,
  ShoppingBag,
  ClipboardList,
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
    cart: <ShoppingBag size={24} color={color as string} />,
    orders: <ClipboardList size={24} color={color as string} />,
    profile: <User size={24} color={color as string} />,
  };
  return <>{icons[name]}</>;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#3c2415",
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
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="cart" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="orders" color={color} focused={focused} />
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
    </Tabs>
  );
}
