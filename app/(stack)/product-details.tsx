import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  Platform,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { ArrowLeft } from "lucide-react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const COLORS = {
  cream: "#F5EDE3",
  brown: "#3c2415",
  brownMid: "#5c3a24",
  brownLight: "#8b6240",
  caramel: "#b07a4b",
  caramelLight: "#d4a76a",
  coffeeBg: "#e8dac8",
  warmWhite: "#f7f0e6",
  white: "#ffffff",
  border: "#ddd0c0",
  neutral: "#7a6e63",
  neutralLight: "#a89e93",
};

const IMAGES: Record<string, any> = {
  coffee: require("../../assets/mockup.png"),
  pastry: require("../../assets/pastery.png"),
  boba: require("../../assets/boba.png"),
  brunch: require("../../assets/brunch.png"),
};

const INGREDIENTS: Record<string, string[]> = {
  coffee: ["Espresso", "Steamed Milk", "Milk Foam", "Chocolate", "Vanilla", "Ice"],
  pastry: ["Butter", "Flour", "Sugar", "Cream", "Eggs", "Vanilla"],
  boba: ["Tapioca Pearls", "Milk Tea", "Brown Sugar", "Ice", "Jelly", "Cream Top"],
  brunch: ["Eggs", "Avocado", "Sourdough", "Bacon", "Tomato", "Herbs"],
};

export default function ProductDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    id?: string;
    name?: string;
    price?: string;
    description?: string;
    tag?: string;
    category?: string;
  }>();

  const name = params.name || "Cappuccino";
  const price = params.price || "$4.90";
  const description = params.description || "";
  const category = params.category || "coffee";
  const image = IMAGES[category] || IMAGES.coffee;
  const ingredients = INGREDIENTS[category] || INGREDIENTS.coffee;

  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const float = Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, { toValue: -10, duration: 2000, useNativeDriver: true }),
        Animated.timing(floatAnim, { toValue: 0, duration: 2000, useNativeDriver: true }),
      ])
    );
    float.start();
    return () => float.stop();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.cream }}>
      {/* Header */}
      <View
        style={{
          paddingTop: Platform.OS === "ios" ? 56 : 22,
          paddingHorizontal: 20,
        }}
      >
        <Pressable onPress={() => router.back()} hitSlop={20}>
          <ArrowLeft size={24} color={COLORS.brown} />
        </Pressable>
      </View>

      {/* Product Name - Centered */}
      <View style={{ alignItems: "center", marginTop: 8, paddingHorizontal: 20 }}>
        <Text
          style={{
            fontSize: 32,
            fontFamily: "Pacifico_400Regular",
            color: COLORS.brown,
            letterSpacing: -0.3,
            textAlign: "center",
          }}
        >
          {name}
        </Text>
        {description ? (
          <Text
            style={{
              fontSize: 13,
              color: COLORS.neutral,
              lineHeight: 18,
              textAlign: "center",
              marginTop: 6,
            }}
          >
            {description}
          </Text>
        ) : null}
      </View>

      {/* Product Image - Floating */}
      <View style={{ alignItems: "center", justifyContent: "center", marginTop: 10 }}>
        <Animated.View style={{ transform: [{ translateY: floatAnim }] }}>
          <Image
            source={image}
            style={{ width: 400, height: 340 }}
            resizeMode="contain"
          />
        </Animated.View>
      </View>

      {/* Ingredients List */}
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 12, paddingHorizontal: 30, marginTop: 10, marginBottom: 10 }}>
        {ingredients.map((item, idx) => (
          <View key={idx} style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: COLORS.brown }} />
            <Text style={{ fontSize: 13, color: COLORS.brown, fontWeight: "600" }}>{item}</Text>
          </View>
        ))}
      </View>

      {/* Bottom Actions */}
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
