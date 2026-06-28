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
import { ArrowLeft, Check, Phone, MessageCircle } from "lucide-react-native";

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

const steps = [
  { time: "09:37", label: "Brewing...", done: true },
  { time: "09:40", label: "Picked For Delivery", done: true },
  { time: "09:43", label: "Delivering...", done: true },
  { time: "09:45", label: "Enjoying your coffee", done: false },
];

export default function OrderTrackingScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.cream }}>
      <View
        style={{
          paddingTop: Platform.OS === "ios" ? 56 : 44,
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
            fontSize: 16,
            fontFamily: "BricolageGrotesque_700Bold",
            color: COLORS.brown,
            flex: 1,
          }}
        >
          Tracking: Order № 016
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
      >
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
            marginBottom: 8,
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

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: COLORS.warmWhite,
            borderRadius: 14,
            borderWidth: 1,
            borderColor: COLORS.border,
            padding: 14,
            marginBottom: 24,
          }}
        >
          <View>
            <Text style={{ fontSize: 13, fontWeight: "700", color: COLORS.brown }}>Order № 016</Text>
            <Text style={{ fontSize: 12, color: COLORS.neutral, marginTop: 2 }}>Today, 09:37 AM</Text>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 4,
              borderRadius: 8,
              backgroundColor: "rgba(176,122,75,0.15)",
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "700", color: COLORS.caramel }}>Delivering</Text>
          </View>
        </View>

        <Text
          style={{
            fontSize: 14,
            fontFamily: "BricolageGrotesque_700Bold",
            color: COLORS.brown,
            marginBottom: 16,
          }}
        >
          Order Tracking
        </Text>

        <View style={{ backgroundColor: COLORS.warmWhite, borderRadius: 14, borderWidth: 1, borderColor: COLORS.border, padding: 18 }}>
          {steps.map((step, idx) => (
            <View key={step.label} style={{ flexDirection: "row", alignItems: "flex-start", gap: 14 }}>
              <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    backgroundColor: step.done ? COLORS.sage : COLORS.coffeeBg,
                    borderWidth: 1,
                    borderColor: step.done ? COLORS.sage : COLORS.border,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {step.done ? (
                    <Check size={13} color={COLORS.white} />
                  ) : (
                    <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: COLORS.neutral }} />
                  )}
                </View>
                {idx < steps.length - 1 && (
                  <View
                    style={{
                      width: 2,
                      height: 36,
                      backgroundColor: step.done ? COLORS.sage : COLORS.border,
                      marginTop: 4,
                    }}
                  />
                )}
              </View>
              <View style={{ flex: 1, paddingBottom: idx < steps.length - 1 ? 12 : 0 }}>
                <Text style={{ fontSize: 11, color: COLORS.neutral }}>{step.time}</Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: step.done ? "700" : "500",
                    color: step.done ? COLORS.brown : COLORS.neutral,
                    marginTop: 2,
                  }}
                >
                  {step.label}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <Pressable
          onPress={() => router.push("/(stack)/rate-review")}
          style={{
            backgroundColor: COLORS.brown,
            paddingVertical: 16,
            borderRadius: 14,
            alignItems: "center",
            marginTop: 24,
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
            CUSTOMER SERVICE
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
