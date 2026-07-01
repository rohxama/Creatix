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
import { Minus, Plus, Trash2, MapPin, CreditCard, Truck, Store, ArrowLeft } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useCart } from "@/context/CartContext";

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
  neutralLight: "#a89e93",
  sage: "#6b8f71",
};

const IMAGES: Record<string, any> = {
  coffee: require("../../assets/mockup.png"),
  pastry: require("../../assets/pastery.png"),
  boba: require("../../assets/boba.png"),
  brunch: require("../../assets/brunch.png"),
};

export default function CartTab() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { cart, removeFromCart, updateQty } = useCart();
  const [view, setView] = useState<"cart" | "summary">("cart");
  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery");

  const subtotal = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price * item.qty;
  }, 0);

  const total = subtotal;

  // ─── ORDER SUMMARY VIEW ───
  if (view === "summary") {
    return (
      <View style={{ flex: 1, backgroundColor: COLORS.cream }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: insets.top + 16,
            paddingHorizontal: 20,
            paddingBottom: 80,
          }}
      >
          {/* Header */}
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 20, position: "relative" }}>
            <Pressable onPress={() => setView("cart")} style={{ position: "absolute", left: 0 }}>
              <ArrowLeft size={24} color={COLORS.brown} />
            </Pressable>
          </View>

          {/* Cart Items Summary */}
          <View style={{ backgroundColor: COLORS.warmWhite, borderRadius: 16, borderWidth: 1, borderColor: COLORS.border, padding: 14, marginBottom: 20,marginTop: 20 }}>
            {cart.map((item) => {
              const image = IMAGES[item.category] || IMAGES.coffee;
              return (
                <View key={item.id} style={{ flexDirection: "row", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <View style={{ width: 50, height: 50, borderRadius: 12, backgroundColor: COLORS.coffeeBg, alignItems: "center", justifyContent: "center" }}>
                    <Image source={image} style={{ width: 35, height: 35 }} resizeMode="contain" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 13, fontFamily: "BricolageGrotesque_700Bold", color: COLORS.brown }}>{item.name}</Text>
                    <Text style={{ fontSize: 13, fontWeight: "800", color: COLORS.brown, marginTop: 2 }}>{item.price}</Text>
                  </View>
                  <Text style={{ fontSize: 13, color: COLORS.neutral }}>Qty: {item.qty}</Text>
                </View>
              );
            })}
          </View>

          {/* Order Summary Title */}
          <Text style={{ fontSize: 18, fontFamily: "BricolageGrotesque_700Bold", color: COLORS.brown, marginBottom: 16 }}>
            Order Summary
          </Text>

          {/* My Order */}
          <View style={{ backgroundColor: COLORS.warmWhite, borderRadius: 16, borderWidth: 1, borderColor: COLORS.border, padding: 14, marginBottom: 16 }}>
            <Text style={{ fontSize: 13, color: COLORS.neutral, marginBottom: 10 }}>My Order</Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
              <View style={{ width: 50, height: 50, borderRadius: 12, backgroundColor: COLORS.coffeeBg, alignItems: "center", justifyContent: "center" }}>
                <Image source={cart.length > 0 ? (IMAGES[cart[0].category] || IMAGES.coffee) : IMAGES.coffee} style={{ width: 35, height: 35 }} resizeMode="contain" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, fontWeight: "800", color: COLORS.brown }}>${total.toFixed(2)}</Text>
                <Text style={{ fontSize: 11, color: COLORS.sage, marginTop: 2 }}>Free Delivery $0</Text>
                <Text style={{ fontSize: 11, color: COLORS.neutralLight }}>Buy 2 get 1 free</Text>
              </View>
            </View>
          </View>

          {/* Order Type */}
          <Text style={{ fontSize: 13, color: COLORS.neutral, marginBottom: 10 }}>Order Type</Text>
          <View style={{ flexDirection: "row", gap: 12, marginBottom: 20 }}>
            <Pressable
              onPress={() => setOrderType("delivery")}
              style={{
                flex: 1,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: orderType === "delivery" ? COLORS.brown : COLORS.border,
                padding: 14,
                alignItems: "center",
                gap: 6,
              }}
            >
              <Truck size={20} color={orderType === "delivery" ? COLORS.brown : COLORS.neutralLight} />
              <Text style={{ fontSize: 12, fontWeight: "600", color: orderType === "delivery" ? COLORS.brown : COLORS.neutral }}>Delivery</Text>
              <Text style={{ fontSize: 10, color: COLORS.neutralLight }}>within 4-5 min</Text>
            </Pressable>
            <Pressable
              onPress={() => setOrderType("pickup")}
              style={{
                flex: 1,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: orderType === "pickup" ? COLORS.brown : COLORS.border,
                padding: 14,
                alignItems: "center",
                gap: 6,
              }}
            >
              <Store size={20} color={orderType === "pickup" ? COLORS.brown : COLORS.neutralLight} />
              <Text style={{ fontSize: 12, fontWeight: "600", color: orderType === "pickup" ? COLORS.brown : COLORS.neutral }}>Pickup</Text>
              <Text style={{ fontSize: 10, color: COLORS.neutralLight }}>Ready in 2-3 min</Text>
            </Pressable>
          </View>

          {/* Delivery Address */}
          {orderType === "delivery" ? (
            <>
              <Text style={{ fontSize: 13, color: COLORS.neutral, marginBottom: 10 }}>Delivery Address</Text>
              <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: COLORS.warmWhite, borderRadius: 14, borderWidth: 1, borderColor: COLORS.border, padding: 14, marginBottom: 20, gap: 12 }}>
                <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: COLORS.coffeeBg, alignItems: "center", justifyContent: "center" }}>
                  <MapPin size={18} color={COLORS.brown} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 13, fontWeight: "700", color: COLORS.brown }}>Office</Text>
                  <Text style={{ fontSize: 11, color: COLORS.neutralLight }}>308 Caterina Ranch</Text>
                </View>
                <Pressable onPress={() => router.push("/(stack)/choose-cafe")}>
                  <Text style={{ fontSize: 12, fontWeight: "600", color: COLORS.brown }}>Change</Text>
                </Pressable>
              </View>
            </>
          ) : null}

          {/* Payment Method */}
          <Text style={{ fontSize: 13, color: COLORS.neutral, marginBottom: 10 }}>Payment Method</Text>
          <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: COLORS.warmWhite, borderRadius: 14, borderWidth: 1, borderColor: COLORS.border, padding: 14, marginBottom: 30, gap: 12 }}>
            <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: COLORS.coffeeBg, alignItems: "center", justifyContent: "center" }}>
              <CreditCard size={18} color={COLORS.brown} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 13, fontWeight: "700", color: COLORS.brown }}>Credit Card</Text>
              <Text style={{ fontSize: 11, color: COLORS.neutralLight }}>**1234</Text>
            </View>
            <Pressable onPress={() => router.push("/(stack)/payment")}>
              <Text style={{ fontSize: 12, fontWeight: "600", color: COLORS.brown }}>Change</Text>
            </Pressable>
          </View>

          {/* ORDER NOW Button */}
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
            <Text style={{ fontSize: 15, fontFamily: "BricolageGrotesque_700Bold", color: COLORS.white }}>ORDER NOW</Text>
            <Text style={{ fontSize: 15, color: COLORS.white }}>·</Text>
            <Text style={{ fontSize: 15, fontFamily: "BricolageGrotesque_700Bold", color: COLORS.white }}>${total.toFixed(2)}</Text>
          </Pressable>
        </ScrollView>
      </View>
    );
  }

  // ─── CART VIEW ───
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.cream }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: insets.top + 16,
          paddingHorizontal: 20,
          paddingBottom: 20,
        }}
      >
        {/* Header */}
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 16, position: "relative" }}>
          <Pressable onPress={() => router.back()} style={{ position: "absolute", left: 0 }}>
            <ArrowLeft size={24} color={COLORS.brown} />
          </Pressable>
          <Text style={{ fontSize: 18, fontFamily: "BricolageGrotesque_700Bold", color: COLORS.brown }}>My Cart</Text>
        </View>

        {cart.length === 0 ? (
          <View style={{ alignItems: "center", paddingTop: 60 }}>
            <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: COLORS.coffeeBg, alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
              <Text style={{ fontSize: 40 }}>🛒</Text>
            </View>
            <Text style={{ fontSize: 16, fontFamily: "BricolageGrotesque_700Bold", color: COLORS.brown, marginBottom: 6 }}>Your cart is empty</Text>
            <Text style={{ fontSize: 13, color: COLORS.neutral, textAlign: "center" }}>Add some delicious items to get started</Text>
            <Pressable
              onPress={() => router.push("/(tabs)/menu")}
              style={{ marginTop: 20, backgroundColor: COLORS.brown, paddingHorizontal: 24, paddingVertical: 12, borderRadius: 12 }}
            >
              <Text style={{ fontSize: 14, fontWeight: "600", color: COLORS.white }}>Browse Menu</Text>
            </Pressable>
          </View>
        ) : (
          <>
            {cart.map((item) => {
              const image = IMAGES[item.category] || IMAGES.coffee;
              return (
                <View
                  key={item.id}
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
                  <View style={{ width: 60, height: 60, borderRadius: 14, backgroundColor: COLORS.coffeeBg, alignItems: "center", justifyContent: "center" }}>
                    <Image source={image} style={{ width: 40, height: 40 }} resizeMode="contain" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 14, fontFamily: "BricolageGrotesque_700Bold", color: COLORS.brown }}>{item.name}</Text>
                    <Text style={{ fontSize: 14, fontWeight: "800", color: COLORS.brown, marginTop: 4 }}>{item.price}</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <Pressable
                      onPress={() => updateQty(item.id, -1)}
                      style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: COLORS.coffeeBg, alignItems: "center", justifyContent: "center" }}
                    >
                      <Minus size={14} color={COLORS.brown} />
                    </Pressable>
                    <Text style={{ fontSize: 15, fontWeight: "700", color: COLORS.brown }}>{item.qty}</Text>
                    <Pressable
                      onPress={() => updateQty(item.id, 1)}
                      style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: COLORS.brown, alignItems: "center", justifyContent: "center" }}
                    >
                      <Plus size={14} color={COLORS.white} />
                    </Pressable>
                  </View>
                  <Pressable onPress={() => removeFromCart(item.id)} style={{ padding: 4 }}>
                    <Trash2 size={16} color={COLORS.neutralLight} />
                  </Pressable>
                </View>
              );
            })}

            {/* Summary */}
            <View style={{ backgroundColor: COLORS.warmWhite, borderRadius: 16, borderWidth: 1, borderColor: COLORS.border, padding: 18, marginBottom: 20 }}>
              {cart.map((item) => (
                <View key={item.id} style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
                  <Text style={{ fontSize: 13, color: COLORS.neutral }}>{item.qty}x {item.name}</Text>
                  <Text style={{ fontSize: 13, fontWeight: "700", color: COLORS.brown }}>
                    ${(parseFloat(item.price.replace("$", "")) * item.qty).toFixed(2)}
                  </Text>
                </View>
              ))}
              <View style={{ flexDirection: "row", justifyContent: "space-between", borderTopWidth: 1, borderTopColor: COLORS.border, paddingTop: 10, marginTop: 4 }}>
                <Text style={{ fontSize: 16, fontFamily: "BricolageGrotesque_700Bold", color: COLORS.brown }}>Total</Text>
                <Text style={{ fontSize: 16, fontWeight: "800", color: COLORS.brown }}>${total.toFixed(2)}</Text>
              </View>
            </View>

            <Pressable
              onPress={() => setView("summary")}
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
              <Text style={{ fontSize: 15, fontFamily: "BricolageGrotesque_700Bold", color: COLORS.white }}>Continue</Text>
              <Text style={{ fontSize: 15, color: COLORS.white }}>·</Text>
              <Text style={{ fontSize: 15, fontFamily: "BricolageGrotesque_700Bold", color: COLORS.white }}>${total.toFixed(2)}</Text>
            </Pressable>
          </>
        )}
      </ScrollView>
    </View>
  );
}
