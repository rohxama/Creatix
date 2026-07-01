import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { ArrowLeft, Heart, Trash2, Minus, Plus } from "lucide-react-native";
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

interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  deal?: string;
}

export default function CartFlowScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [items, setItems] = useState<CartItem[]>([
    { id: "1", name: "Cappuccino", price: 4.90, qty: 2 },
    { id: "2", name: "Cafe Latte", price: 4.50, qty: 1 },
    { id: "3", name: "Iced Caramel", price: 5.60, qty: 1, deal: "Buy 2 get 1 free deal" },
  ]);

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.cream }}>
      <View
        style={{
          paddingTop: insets.top + 16,
          paddingHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginBottom: 8,
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
          My Cart
        </Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
      >
        <View style={{ maxWidth: 480, alignSelf: "center", width: "100%" }}>
        {items.map((item) => (
          <View
            key={item.id}
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: COLORS.warmWhite,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: COLORS.border,
              padding: 12,
              marginBottom: 12,
              gap: 12,
            }}
          >
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 14,
                backgroundColor: COLORS.coffeeBg,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../assets/mockup.png")}
                style={{ width: 40, height: 40 }}
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
                  fontSize: 14,
                  fontWeight: "800",
                  color: COLORS.brown,
                  marginTop: 2,
                }}
              >
                ${item.price.toFixed(2)}
              </Text>
              {item.deal && (
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "600",
                    color: COLORS.sage,
                    marginTop: 4,
                    backgroundColor: "rgba(107,143,113,0.1)",
                    paddingHorizontal: 8,
                    paddingVertical: 2,
                    borderRadius: 6,
                    overflow: "hidden",
                    alignSelf: "flex-start",
                  }}
                >
                  {item.deal}
                </Text>
              )}
              <View style={{ flexDirection: "row", alignItems: "center", gap: 12, marginTop: 8 }}>
                <Pressable>
                  <Heart size={16} color={COLORS.neutral} />
                </Pressable>
                <Pressable onPress={() => removeItem(item.id)}>
                  <Trash2 size={16} color={COLORS.neutral} />
                </Pressable>
              </View>
            </View>

            <View style={{ alignItems: "center", gap: 6 }}>
              <Pressable
                onPress={() => updateQty(item.id, -1)}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 22,
                  backgroundColor: COLORS.coffeeBg,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Minus size={14} color={COLORS.brown} />
              </Pressable>
              <Text style={{ fontSize: 14, fontWeight: "700", color: COLORS.brown }}>
                0{item.qty}
              </Text>
              <Pressable
                onPress={() => updateQty(item.id, 1)}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 22,
                  backgroundColor: COLORS.brown,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Plus size={14} color={COLORS.white} />
              </Pressable>
            </View>
          </View>
        ))}

        <View
          style={{
            backgroundColor: COLORS.warmWhite,
            borderRadius: 14,
            borderWidth: 1,
            borderColor: COLORS.border,
            padding: 16,
            marginTop: 8,
          }}
        >
          {items.map((item) => (
            <View
              key={item.id}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <Text style={{ fontSize: 13, color: COLORS.neutral }}>
                {item.qty}x {item.name}
              </Text>
              <Text style={{ fontSize: 13, fontWeight: "700", color: COLORS.brown }}>
                ${(item.price * item.qty).toFixed(2)}
              </Text>
            </View>
          ))}
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
            <Text style={{ fontSize: 13, color: COLORS.neutral }}>Delivery</Text>
            <Text style={{ fontSize: 13, fontWeight: "700", color: COLORS.sage }}>Free</Text>
          </View>
        </View>
        </View>
      </ScrollView>

      <View
        style={{
          paddingHorizontal: 20,
          paddingBottom: Platform.OS === "ios" ? 36 : 24,
          paddingTop: 12,
          backgroundColor: COLORS.cream,
        }}
      >
        <Pressable
          onPress={() => router.push("/(stack)/order-summary")}
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
            Continue
          </Text>
          <Text style={{ fontSize: 15, color: COLORS.white }}>·</Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: "BricolageGrotesque_700Bold",
              color: COLORS.white,
            }}
          >
            ${subtotal.toFixed(2)}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
