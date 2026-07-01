import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Platform,
  Switch,
} from "react-native";
import { useRouter } from "expo-router";
import { ArrowLeft, Bell, ShoppingBag, Tag, Clock, MessageCircle } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const COLORS = {
  cream: "#F5EDE3",
  brown: "#3c2415",
  coffeeBg: "#e8dac8",
  warmWhite: "#f7f0e6",
  white: "#ffffff",
  border: "#ddd0c0",
  neutral: "#7a6e63",
  neutralLight: "#a89e93",
  sage: "#6b8f71",
};

const notificationOptions = [
  {
    icon: <ShoppingBag size={18} color={COLORS.brown} />,
    title: "Order Updates",
    description: "Get notified about your order status",
    key: "orderUpdates",
  },
  {
    icon: <Tag size={18} color={COLORS.brown} />,
    title: "Flash Sales",
    description: "Exclusive deals and limited-time offers",
    key: "flashSales",
  },
  {
    icon: <Bell size={18} color={COLORS.brown} />,
    title: "New Items",
    description: "Be first to try new menu additions",
    key: "newItems",
  },
  {
    icon: <Clock size={18} color={COLORS.brown} />,
    title: "Happy Hour Reminders",
    description: "Daily happy hour notifications",
    key: "happyHour",
  },
  {
    icon: <MessageCircle size={18} color={COLORS.brown} />,
    title: "Promotions",
    description: "Special offers and discount codes",
    key: "promotions",
  },
];

export default function NotificationSettingsScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [settings, setSettings] = useState({
    orderUpdates: true,
    flashSales: true,
    newItems: false,
    happyHour: true,
    promotions: false,
  });

  const toggleSetting = (key: string) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View style={{ maxWidth: 480, alignSelf: "center", width: "100%" }}>
        <View
          style={{
            paddingTop: insets.top + 16,
            paddingHorizontal: 20,
            marginBottom: 24,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable onPress={() => router.back()}>
              <ArrowLeft size={24} color={COLORS.brown} />
            </Pressable>
            <Text
              style={{
                flex: 1,
                textAlign: "center",
                fontSize: 18,
                fontFamily: "BricolageGrotesque_700Bold",
                color: COLORS.brown,
              }}
            >
              Notification Settings
            </Text>
            <View style={{ width: 24 }} />
          </View>
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 13, fontWeight: "600", color: COLORS.neutral, marginBottom: 10, textTransform: "uppercase", letterSpacing: 0.5 }}>
            Push Notifications
          </Text>
          <View
            style={{
              backgroundColor: COLORS.warmWhite,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: COLORS.border,
              overflow: "hidden",
            }}
          >
            {notificationOptions.map((option, idx) => (
              <View
                key={option.key}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 16,
                  borderBottomWidth: idx < notificationOptions.length - 1 ? 1 : 0,
                  borderBottomColor: COLORS.border,
                  gap: 14,
                }}
              >
                <View
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    backgroundColor: COLORS.coffeeBg,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {option.icon}
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 14, fontWeight: "600", color: COLORS.brown }}>{option.title}</Text>
                  <Text style={{ fontSize: 12, color: COLORS.neutral, marginTop: 2 }}>{option.description}</Text>
                </View>
                <Switch
                  value={settings[option.key as keyof typeof settings]}
                  onValueChange={() => toggleSetting(option.key)}
                  trackColor={{ false: COLORS.border, true: COLORS.sage }}
                  thumbColor={settings[option.key as keyof typeof settings] ? COLORS.white : COLORS.neutralLight}
                />
              </View>
            ))}
          </View>
        </View>
        </View>
      </ScrollView>
    </View>
  );
}
