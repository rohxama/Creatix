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
import { ClipboardList } from "lucide-react-native";

const COLORS = {
  cream: "#F5EDE3",
  brown: "#3c2415",
  coffeeBg: "#e8dac8",
  warmWhite: "#f7f0e6",
  white: "#ffffff",
  border: "#ddd0c0",
  neutral: "#7a6e63",
  sage: "#6b8f71",
};

const orders = [
  { id: "1", name: "Cappuccino", price: "$4.90", status: "Delivered" },
  { id: "2", name: "Iced Latte", price: "$5.20", status: "Preparing" },
  { id: "3", name: "Cafe Latte", price: "$4.50", status: "Delivered" },
];

export default function OrdersTab() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.cream }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: Platform.OS === "ios" ? 60 : 48,
          paddingHorizontal: 20,
          paddingBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontFamily: "Pacifico_400Regular",
            color: COLORS.brown,
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          Creatix
        </Text>

        <Text
          style={{
            fontSize: 22,
            fontFamily: "BricolageGrotesque_700Bold",
            color: COLORS.brown,
            marginBottom: 20,
          }}
        >
          My Orders
        </Text>

        {orders.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => router.push("/(stack)/order-tracking")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: COLORS.warmWhite,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: COLORS.border,
              padding: 14,
              marginBottom: 12,
              gap: 12,
            }}
          >
            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                backgroundColor: COLORS.coffeeBg,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../assets/mockup.png")}
                style={{ width: 36, height: 36 }}
                resizeMode="contain"
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "BricolageGrotesque_700Bold",
                  color: COLORS.brown,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: COLORS.neutral,
                  marginTop: 2,
                }}
              >
                {item.price}
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 8,
                backgroundColor: item.status === "Delivered" ? COLORS.sage : COLORS.coffeeBg,
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: "700",
                  color: item.status === "Delivered" ? COLORS.white : COLORS.brown,
                }}
              >
                {item.status}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
