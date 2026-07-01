import React from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { ArrowLeft, Coffee, ShoppingBag, Tag } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const COLORS = {
  cream: "#F5EDE3",
  brown: "#3c2415",
  brownMid: "#5c3a24",
  warmWhite: "#f7f0e6",
  white: "#ffffff",
  border: "#ddd0c0",
  neutral: "#7a6e63",
  neutralLight: "#a89e93",
};

const notifications = [
  { id: "1", icon: Coffee, title: "Your order is ready!", desc: "Your Classic Latte is ready for pickup.", time: "2 min ago", color: "#43A047" },
  { id: "2", icon: Tag, title: "Flash Sale is live!", desc: "Get 20% off on all pastries today.", time: "15 min ago", color: "#E53935" },
  { id: "3", icon: ShoppingBag, title: "Order delivered", desc: "Your Brown Sugar Boba has been delivered.", time: "1 hr ago", color: COLORS.brown },
  { id: "4", icon: Coffee, title: "New item added!", desc: "Try our new Peach Frangipane pastry.", time: "3 hr ago", color: "#43A047" },
  { id: "5", icon: Tag, title: "Weekend special", desc: "Buy 2 coffees, get 1 free this weekend.", time: "5 hr ago", color: "#E53935" },
];

export default function NotificationsScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: insets.top + 16,
          paddingHorizontal: 20,
          paddingBottom: 40,
        }}
      >
        <View style={{ maxWidth: 480, alignSelf: "center", width: "100%" }}>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 24 }}>
          <Pressable onPress={() => router.back()}>
            <ArrowLeft size={24} color={COLORS.brown} />
          </Pressable>
          <Text
            style={{
              flex: 1,
              textAlign: "center",
              fontSize: 20,
              fontFamily: "BricolageGrotesque_700Bold",
              color: COLORS.brown,
            }}
          >
            Notifications
          </Text>
          <View style={{ width: 24 }} />
        </View>

        {notifications.map((item) => (
          <View
            key={item.id}
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              gap: 12,
              backgroundColor: COLORS.white,
              borderRadius: 14,
              padding: 14,
              marginBottom: 10,
              borderWidth: 1,
              borderColor: COLORS.border,
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: COLORS.cream,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <item.icon size={18} color={item.color} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, fontFamily: "BricolageGrotesque_700Bold", color: COLORS.brown, marginBottom: 2 }}>
                {item.title}
              </Text>
              <Text style={{ fontSize: 12, color: COLORS.neutral, lineHeight: 16 }}>
                {item.desc}
              </Text>
            </View>
            <Text style={{ fontSize: 11, color: COLORS.neutralLight }}>
              {item.time}
            </Text>
          </View>
        ))}
        </View>
      </ScrollView>
    </View>
  );
}
