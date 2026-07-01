import React from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Platform,
  Image,
  Alert,
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

export default function ProfileTab() {
  const router = useRouter();

  const handlePress = (label: string) => {
    switch (label) {
      case "Account Details":
        Alert.alert("Account Details", "Name: Jasnet Sharma\nEmail: jasnet@crea.com\nPhone: +1 234 567 890");
        break;
      case "Payment Methods":
        router.push("/(stack)/payment");
        break;
      case "Order History":
        router.push("/(tabs)/orders");
        break;
      case "Notification Settings":
        router.push("/(stack)/notifications");
        break;
      case "Help Center":
        Alert.alert("Help Center", "Contact us at support@crea.com");
        break;
      case "Terms & Conditions":
        Alert.alert("Terms & Conditions", "By using Creatix Cafe, you agree to our terms of service.");
        break;
    }
  };

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

        {[
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
        ].map((section) => (
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
                  onPress={() => handlePress(item.label)}
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
          onPress={() => router.replace("/(tabs)")}
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
