import React from "react";
import {
  View,
  Text,
  Pressable,
  Platform,
  Image,
  Dimensions,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { ArrowLeft } from "lucide-react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

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
};

export default function ProductDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id?: string; name?: string; price?: string }>();

  const name = params.name || "Cappuccino";
  const price = params.price || "$4.90";

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.cream }}>
      <View
        style={{
          paddingTop: Platform.OS === "ios" ? 56 : 22,
          paddingHorizontal: 20,
        }}
      >
        <Pressable onPress={() => router.back()} hitSlop={20}>
          <ArrowLeft size={24} color={COLORS.brown} />
        </Pressable>
        <Text
          style={{
            fontSize: 40,
            fontFamily: "Pacifico_400Regular",
            color: COLORS.brown,
            textAlign: "center",
            marginTop: 12,
          }}
        >
          {name}
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: 1,
        }}
      >
        <Image
          source={require("../../assets/mockup.png")}
          style={{ width: 550, height: 550 }}
          resizeMode="contain"
        />
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          paddingBottom: Platform.OS === "ios" ? 36 : 24,
        }}
      >
        <Pressable
          onPress={() => router.push("/(stack)/cart-flow")}
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
            {price}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("/(tabs)/menu")}
          style={{ paddingVertical: 12, alignItems: "center" }}
        >
          <Text style={{ fontSize: 14, fontWeight: "600", color: COLORS.brown }}>
            Need more &gt;
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
