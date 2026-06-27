import React from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { ArrowLeft, Check } from "lucide-react-native";

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

const steps = [
  { label: "Order placed", done: true },
  { label: "Preparing", done: true },
  { label: "On the way", done: false },
  { label: "Delivered", done: false },
];

export default function OrderTrackingScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.cream }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View
          style={{
            paddingTop: Platform.OS === "ios" ? 56 : 44,
            paddingHorizontal: 20,
            marginBottom: 24,
          }}
        >
          <Pressable onPress={() => router.back()} style={{ marginBottom: 8 }}>
            <ArrowLeft size={24} color={COLORS.brown} />
          </Pressable>
          <Text
            style={{
              fontSize: 22,
              fontFamily: "BricolageGrotesque_700Bold",
              color: COLORS.brown,
            }}
          >
            Order Tracking
          </Text>
        </View>

        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          <View
            style={{
              backgroundColor: COLORS.warmWhite,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: COLORS.border,
              padding: 20,
            }}
          >
            {steps.map((step, idx) => (
              <View key={step.label} style={{ flexDirection: "row", alignItems: "flex-start", gap: 14 }}>
                <View style={{ alignItems: "center" }}>
                  <View
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 14,
                      backgroundColor: step.done ? COLORS.sage : COLORS.coffeeBg,
                      borderWidth: 1,
                      borderColor: step.done ? COLORS.sage : COLORS.border,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {step.done ? (
                      <Check size={14} color={COLORS.white} />
                    ) : (
                      <Text style={{ fontSize: 11, fontWeight: "700", color: COLORS.neutral }}>
                        {idx + 1}
                      </Text>
                    )}
                  </View>
                  {idx < steps.length - 1 && (
                    <View
                      style={{
                        width: 2,
                        height: 32,
                        backgroundColor: step.done ? COLORS.sage : COLORS.border,
                        marginTop: 4,
                      }}
                    />
                  )}
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: step.done ? "700" : "500",
                    color: step.done ? COLORS.brown : COLORS.neutral,
                    paddingTop: 3,
                  }}
                >
                  {step.label}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
