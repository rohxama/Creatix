import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Heart, ArrowLeft } from "lucide-react-native";

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

const sizes = [
  { label: "S", price: "" },
  { label: "M", price: "" },
  { label: "L", price: "+$0.80" },
];

const customizations = [
  { id: "1", label: "Milk", options: ["Whole", "Oat", "Almond", "Soy"] },
  { id: "2", label: "Sugar", options: ["Normal", "Less", "Extra", "None"] },
  { id: "3", label: "Extra shots", options: ["1 shot", "2 shots", "3 shots"] },
];

export default function ProductDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id?: string; name?: string; price?: string }>();
  const [selectedSize, setSelectedSize] = useState("M");
  const [liked, setLiked] = useState(false);

  const name = params.name || "Cappuccino";
  const price = params.price || "$4.90";

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.cream }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingTop: Platform.OS === "ios" ? 56 : 44, paddingHorizontal: 20 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <Pressable onPress={() => router.back()}>
              <ArrowLeft size={24} color={COLORS.brown} />
            </Pressable>
            <Pressable onPress={() => setLiked(!liked)}>
              <Heart size={24} color={liked ? "#e74c3c" : COLORS.brown} fill={liked ? "#e74c3c" : "none"} />
            </Pressable>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            height: 280,
            backgroundColor: COLORS.coffeeBg,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/mockup.png")}
            style={{ width: 150, height: 150 }}
            resizeMode="contain"
          />
        </View>

        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: "BricolageGrotesque_700Bold",
              color: COLORS.brown,
              marginBottom: 8,
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: COLORS.neutral,
              lineHeight: 22,
              marginBottom: 20,
            }}
          >
            Rich and aromatic coffee crafted to perfection. A smooth blend that delivers a comforting, bold flavor with every sip.
          </Text>

          <Text
            style={{
              fontSize: 16,
              fontFamily: "BricolageGrotesque_700Bold",
              color: COLORS.brown,
              marginBottom: 12,
            }}
          >
            Size
          </Text>
          <View style={{ flexDirection: "row", gap: 10, marginBottom: 24 }}>
            {sizes.map((s) => (
              <Pressable
                key={s.label}
                onPress={() => setSelectedSize(s.label)}
                style={{
                  flex: 1,
                  paddingVertical: 14,
                  borderRadius: 12,
                  borderWidth: 1.5,
                  borderColor: selectedSize === s.label ? COLORS.brown : COLORS.border,
                  backgroundColor: selectedSize === s.label ? COLORS.brown : COLORS.warmWhite,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    color: selectedSize === s.label ? COLORS.white : COLORS.brown,
                  }}
                >
                  {s.label}
                </Text>
                {s.price ? (
                  <Text style={{ fontSize: 11, color: selectedSize === s.label ? COLORS.white : COLORS.neutral }}>
                    {s.price}
                  </Text>
                ) : null}
              </Pressable>
            ))}
          </View>

          {customizations.map((c) => (
            <View key={c.id} style={{ marginBottom: 18 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "BricolageGrotesque_700Bold",
                  color: COLORS.brown,
                  marginBottom: 8,
                }}
              >
                {c.label}
              </Text>
              <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
                {c.options.map((opt, idx) => (
                  <Pressable
                    key={opt}
                    style={{
                      paddingHorizontal: 14,
                      paddingVertical: 8,
                      borderRadius: 20,
                      borderWidth: 1,
                      borderColor: idx === 0 ? COLORS.brown : COLORS.border,
                      backgroundColor: idx === 0 ? COLORS.brown : COLORS.warmWhite,
                    }}
                  >
                    <Text style={{ fontSize: 12, fontWeight: "600", color: idx === 0 ? COLORS.white : COLORS.brown }}>
                      {opt}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 16,
          paddingBottom: Platform.OS === "ios" ? 36 : 24,
          backgroundColor: COLORS.cream,
          borderTopWidth: 1,
          borderTopColor: COLORS.border,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "800",
            color: COLORS.brown,
          }}
        >
          {price}
        </Text>
        <Pressable
          onPress={() => router.push("/(tabs)/cart")}
          style={{
            backgroundColor: COLORS.brown,
            paddingHorizontal: 28,
            paddingVertical: 14,
            borderRadius: 14,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontFamily: "BricolageGrotesque_700Bold",
              color: COLORS.white,
            }}
          >
            Add to cart
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
