import React from "react";
import {
  View,
  Text,
  Pressable,
  Platform,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

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

export default function OrderConfirmationScreen() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.cream,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 32,
      }}
    >
      <View style={{ maxWidth: 480, alignSelf: "center", width: "100%" }}>
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: COLORS.coffeeBg,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 24,
        }}
      >
        <Image
          source={require("../../assets/mockup.png")}
          style={{ width: 70, height: 70 }}
          resizeMode="contain"
        />
      </View>

      <Text
        style={{
          fontSize: 22,
          fontFamily: "BricolageGrotesque_700Bold",
          color: COLORS.brown,
          textAlign: "center",
          marginBottom: 8,
        }}
      >
        Thank you for your order!
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: COLORS.neutral,
          textAlign: "center",
          marginBottom: 24,
        }}
      >
        Your order has been placed successfully
      </Text>

      <View
        style={{
          backgroundColor: COLORS.warmWhite,
          borderRadius: 14,
          borderWidth: 1,
          borderColor: COLORS.border,
          paddingHorizontal: 24,
          paddingVertical: 14,
          marginBottom: 40,
        }}
      >
        <Text style={{ fontSize: 12, color: COLORS.neutral, textAlign: "center" }}>Order number</Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "800",
            color: COLORS.brown,
            textAlign: "center",
            marginTop: 4,
          }}
        >
          #3
        </Text>
      </View>

      <Pressable
        onPress={() => router.push("/(tabs)")}
        style={{
          width: "100%",
          backgroundColor: COLORS.brown,
          paddingVertical: 16,
          borderRadius: 14,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "BricolageGrotesque_700Bold",
            color: COLORS.white,
          }}
        >
          Back to Home
        </Text>
      </Pressable>
      </View>
    </View>
  );
}
