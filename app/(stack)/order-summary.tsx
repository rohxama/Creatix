import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { ArrowLeft, MapPin, CreditCard, Store, Truck } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const COLORS = {
  cream: "#F5EDE3",
  brown: "#3c2415",
  brownMid: "#5c3a24",
  caramel: "#b07a4b",
  coffeeBg: "#e8dac8",
  warmWhite: "#f7f0e6",
  white: "#ffffff",
  border: "#ddd0c0",
  neutral: "#7a6e63",
  sage: "#6b8f71",
};

export default function OrderSummaryScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery");

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.cream }}>
      <View
        style={{
          paddingTop: insets.top + 16,
          paddingHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginBottom: 16,
        }}
      >
        <Pressable onPress={() => router.back()}>
          <ArrowLeft size={24} color={COLORS.brown} />
        </Pressable>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "BricolageGrotesque_700Bold",
            color: COLORS.brown,
            flex: 1,
            textAlign: "center",
          }}
        >
          Order Summary
        </Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
      >
        <View style={{ maxWidth: 480, alignSelf: "center", width: "100%" }}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "BricolageGrotesque_700Bold",
            color: COLORS.brown,
            marginBottom: 12,
          }}
        >
          My Order
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: COLORS.warmWhite,
            borderRadius: 14,
            borderWidth: 1,
            borderColor: COLORS.border,
            padding: 14,
            marginBottom: 24,
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
              style={{ width: 38, height: 38 }}
              resizeMode="contain"
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 14, fontWeight: "700", color: COLORS.brown }}>2x Brew Coffee</Text>
            <Text style={{ fontSize: 11, color: COLORS.sage, marginTop: 2 }}>Free Delivery $0 · Buy 2 get 1 free</Text>
          </View>
          <Text style={{ fontSize: 16, fontWeight: "800", color: COLORS.brown }}>$7.98</Text>
        </View>

        <Text
          style={{
            fontSize: 14,
            fontFamily: "BricolageGrotesque_700Bold",
            color: COLORS.brown,
            marginBottom: 12,
          }}
        >
          Order Type
        </Text>
        <View style={{ flexDirection: "row", gap: 12, marginBottom: 24 }}>
          <Pressable
            onPress={() => setOrderType("delivery")}
            style={{
              flex: 1,
              paddingVertical: 16,
              borderRadius: 14,
              borderWidth: 1.5,
              borderColor: orderType === "delivery" ? COLORS.brown : COLORS.border,
              backgroundColor: orderType === "delivery" ? COLORS.warmWhite : COLORS.white,
              alignItems: "center",
              gap: 6,
            }}
          >
            <Truck size={22} color={orderType === "delivery" ? COLORS.brown : COLORS.neutral} />
            <Text style={{ fontSize: 13, fontWeight: "700", color: orderType === "delivery" ? COLORS.brown : COLORS.neutral }}>
              Delivery
            </Text>
            <Text style={{ fontSize: 11, color: COLORS.neutral }}>within 4-5 min</Text>
          </Pressable>
          <Pressable
            onPress={() => setOrderType("pickup")}
            style={{
              flex: 1,
              paddingVertical: 16,
              borderRadius: 14,
              borderWidth: 1.5,
              borderColor: orderType === "pickup" ? COLORS.brown : COLORS.border,
              backgroundColor: orderType === "pickup" ? COLORS.warmWhite : COLORS.white,
              alignItems: "center",
              gap: 6,
            }}
          >
            <Store size={22} color={orderType === "pickup" ? COLORS.brown : COLORS.neutral} />
            <Text style={{ fontSize: 13, fontWeight: "700", color: orderType === "pickup" ? COLORS.brown : COLORS.neutral }}>
              Pickup
            </Text>
            <Text style={{ fontSize: 11, color: COLORS.neutral }}>Ready in 2-3 min</Text>
          </Pressable>
        </View>

        <Text
          style={{
            fontSize: 14,
            fontFamily: "BricolageGrotesque_700Bold",
            color: COLORS.brown,
            marginBottom: 10,
          }}
        >
          Delivery Address
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: COLORS.warmWhite,
            borderRadius: 14,
            borderWidth: 1,
            borderColor: COLORS.border,
            padding: 14,
            marginBottom: 24,
            gap: 12,
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              backgroundColor: COLORS.coffeeBg,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MapPin size={18} color={COLORS.brown} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 13, fontWeight: "700", color: COLORS.brown }}>Office</Text>
            <Text style={{ fontSize: 12, color: COLORS.neutral, marginTop: 2 }}>305 Caterina Ranch</Text>
          </View>
          <Pressable>
            <Text style={{ fontSize: 13, fontWeight: "700", color: COLORS.brown }}>Change</Text>
          </Pressable>
        </View>

        <Text
          style={{
            fontSize: 14,
            fontFamily: "BricolageGrotesque_700Bold",
            color: COLORS.brown,
            marginBottom: 10,
          }}
        >
          Payment Method
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: COLORS.warmWhite,
            borderRadius: 14,
            borderWidth: 1,
            borderColor: COLORS.border,
            padding: 14,
            gap: 12,
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              backgroundColor: COLORS.coffeeBg,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CreditCard size={18} color={COLORS.brown} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 13, fontWeight: "700", color: COLORS.brown }}>Credit Card</Text>
            <Text style={{ fontSize: 12, color: COLORS.neutral, marginTop: 2 }}>**1234</Text>
          </View>
          <Pressable>
            <Text style={{ fontSize: 13, fontWeight: "700", color: COLORS.brown }}>Change</Text>
          </Pressable>
        </View>
        </View>
      </ScrollView>

      <View
        style={{
          maxWidth: 480,
          alignSelf: "center",
          width: "100%",
          paddingHorizontal: 20,
          paddingBottom: insets.bottom + 16,
          paddingTop: 12,
          backgroundColor: COLORS.cream,
        }}
      >
        <Pressable
          onPress={() => router.push("/(stack)/order-tracking")}
          style={{
            backgroundColor: COLORS.brown,
            paddingVertical: 16,
            borderRadius: 14,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontFamily: "BricolageGrotesque_700Bold",
              color: COLORS.white,
            }}
          >
            ORDER NOW
          </Text>
          <Text style={{ fontSize: 15, color: COLORS.white }}>·</Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: "BricolageGrotesque_700Bold",
              color: COLORS.white,
            }}
          >
            $12.99
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
