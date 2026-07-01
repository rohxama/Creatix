import React from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { ChevronRight, Bell, LogOut } from "lucide-react-native";

const COLORS = {
  cream: "#F5EDE3",
  brown: "#3c2415",
  coffeeBg: "#e8dac8",
  warmWhite: "#f7f0e6",
  white: "#ffffff",
  border: "#ddd0c0",
  neutral: "#7a6e63",
};

const menuSections = [
  {
    title: "Account",
    items: [
      { icon: "👤", label: "Account Details" },
      { icon: "💳", label: "Payment Methods" },
    ],
  },
  {
    title: "Orders",
    items: [
      { icon: "📋", label: "Order History" },
      { icon: "🔔", label: "Notification Settings" },
    ],
  },
  {
    title: "Preferences",
    items: [
      { icon: "❓", label: "Help Center" },
      { icon: "📄", label: "Terms & Conditions" },
    ],
  },
];

export default function ProfileTab() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.cream }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: Platform.OS === "ios" ? 16 : 12,
          paddingHorizontal: 20,
          paddingBottom: 40,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Pacifico_400Regular",
              color: COLORS.brown,
            }}
          >
            Creatix
          </Text>
          <Image
            source={require("../../assets/logo.png")}
            style={{ width: 50, height: 50 }}
            resizeMode="contain"
          />
          <Pressable
            onPress={() => router.push("/(stack)/notifications")}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: COLORS.coffeeBg,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Bell size={18} color={COLORS.brown} />
          </Pressable>
        </View>

        <View style={{ alignItems: "center", marginBottom: 28 }}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: COLORS.coffeeBg,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 12,
            }}
          >
            <Image
              source={require("../../assets/mockup.png")}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "BricolageGrotesque_700Bold",
              color: COLORS.brown,
            }}
          >
            Jasnet Sharma
          </Text>
        </View>

        {menuSections.map((section) => (
          <View key={section.title} style={{ marginBottom: 20 }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "600",
                color: COLORS.neutral,
                marginBottom: 10,
                textTransform: "uppercase",
                letterSpacing: 0.5,
              }}
            >
              {section.title}
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
              {section.items.map((item, idx) => (
                <Pressable
                  key={item.label}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 16,
                    borderBottomWidth: idx < section.items.length - 1 ? 1 : 0,
                    borderBottomColor: COLORS.border,
                    gap: 14,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>{item.icon}</Text>
                  <Text
                    style={{
                      flex: 1,
                      fontSize: 14,
                      fontWeight: "600",
                      color: COLORS.brown,
                    }}
                  >
                    {item.label}
                  </Text>
                  <ChevronRight size={18} color={COLORS.neutral} />
                </Pressable>
              ))}
            </View>
          </View>
        ))}

        <Pressable
          onPress={() => router.push("/")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.warmWhite,
            borderRadius: 14,
            borderWidth: 1,
            borderColor: COLORS.border,
            paddingVertical: 14,
            gap: 8,
            marginTop: 8,
          }}
        >
          <LogOut size={18} color={COLORS.brown} />
          <Text
            style={{
              fontSize: 14,
              fontWeight: "700",
              color: COLORS.brown,
            }}
          >
            Log Out
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
