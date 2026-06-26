import React from "react";
import { Redirect, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { Home, Coffee, ShoppingBag, User } from "lucide-react-native";
import { useAuthStore, useCartStore } from "@/stores";
import { Text } from "@/components/ui/Text";
import { cn } from "@/utils/cn";

function TabBarIcon({ name, color, focused }: { name: string; color: string; focused: boolean }) {
  const icons: Record<string, React.ReactNode> = {
    home: <Home size={24} color={color} />,
    menu: <Coffee size={24} color={color} />,
    orders: <ShoppingBag size={24} color={color} />,
    profile: <User size={24} color={color} />,
  };

  return <>{icons[name]}</>;
}

function CartBadge() {
  const itemCount = useCartStore((s) => s.getItemCount());

  if (itemCount === 0) return null;

  return (
    <View className="absolute -right-2 -top-2 h-5 w-5 items-center justify-center rounded-full bg-primary-600">
      <Text className="text-[10px] font-bold text-white">{itemCount}</Text>
    </View>
  );
}

export default function TabLayout() {
  const { isAuthenticated, isLoading } = useAuthStore();

  if (isLoading) return null;

  if (!isAuthenticated) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#6b341a",
        tabBarInactiveTintColor: "#737373",
        tabBarStyle: {
          borderTopColor: "#e5e5e5",
          backgroundColor: "#ffffff",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
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
            <View>
              <TabBarIcon name="orders" color={color} focused={focused} />
              <CartBadge />
            </View>
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