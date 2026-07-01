import React from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const COLORS = {
  cream: "#F5EDE3",
  brown: "#3c2415",
  coffeeBg: "#e8dac8",
  warmWhite: "#f7f0e6",
  white: "#ffffff",
  border: "#ddd0c0",
  neutral: "#7a6e63",
};

const orderItems = [
  { name: "Cappuccino", price: "$4.90", qty: 1 },
  { name: "Cafe Latte", price: "$4.50", qty: 2 },
];

export default function ReviewOrderScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
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
                fontSize: 22,
                fontFamily: "BricolageGrotesque_700Bold",
                color: COLORS.brown,
              }}
            >
              Review Order
            </Text>
            <View style={{ width: 24 }} />
          </View>
        </View>

        <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "BricolageGrotesque_700Bold",
              color: COLORS.brown,
              marginBottom: 12,
            }}
          >
            Order details
          </Text>
          <View
            style={{
              backgroundColor: COLORS.warmWhite,
              borderRadius: 14,
              borderWidth: 1,
              borderColor: COLORS.border,
              padding: 16,
            }}
          >
            {orderItems.map((item, idx) => (
              <View
                key={item.name}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingVertical: 8,
                  borderBottomWidth: idx < orderItems.length - 1 ? 1 : 0,
                  borderBottomColor: COLORS.border,
                }}
              >
                <Text style={{ fontSize: 14, color: COLORS.neutral }}>
                  {item.name} x{item.qty}
                </Text>
                <Text style={{ fontSize: 14, fontWeight: "700", color: COLORS.brown }}>
                  {item.price}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
          <View
            style={{
              backgroundColor: COLORS.warmWhite,
              borderRadius: 14,
              borderWidth: 1,
              borderColor: COLORS.border,
              padding: 16,
            }}
          >
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
              <Text style={{ fontSize: 14, color: COLORS.neutral }}>Subtotal</Text>
              <Text style={{ fontSize: 14, fontWeight: "700", color: COLORS.brown }}>$13.90</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
              <Text style={{ fontSize: 14, color: COLORS.neutral }}>Pickup</Text>
              <Text style={{ fontSize: 14, fontWeight: "700", color: COLORS.brown }}>Creatix Cafe</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
              <Text style={{ fontSize: 14, color: COLORS.neutral }}>Payment</Text>
              <Text style={{ fontSize: 14, fontWeight: "700", color: COLORS.brown }}>Card</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", borderTopWidth: 1, borderTopColor: COLORS.border, paddingTop: 10, marginTop: 4 }}>
              <Text style={{ fontSize: 16, fontFamily: "BricolageGrotesque_700Bold", color: COLORS.brown }}>Total</Text>
              <Text style={{ fontSize: 16, fontWeight: "800", color: COLORS.brown }}>$13.90</Text>
            </View>
          </View>
        </View>
        </View>
      </ScrollView>

      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 16,
          paddingBottom: Platform.OS === "ios" ? 36 : 24,
          backgroundColor: COLORS.cream,
          flexDirection: "row",
          gap: 12,
        }}
      >
        <Pressable
          style={{
            flex: 1,
            paddingVertical: 14,
            borderRadius: 14,
            borderWidth: 1,
            borderColor: COLORS.brown,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "700", color: COLORS.brown }}>Track Order</Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("/(stack)/order-confirmation")}
          style={{
            flex: 1,
            paddingVertical: 14,
            borderRadius: 14,
            backgroundColor: COLORS.brown,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "700", color: COLORS.white }}>Confirm</Text>
        </Pressable>
      </View>
    </View>
  );
}
