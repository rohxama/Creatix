import React from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Platform,
  TextInput,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { Minus, Plus } from "lucide-react-native";

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

const cartItems = [
  { id: "1", name: "Cappuccino", price: "$4.90", qty: 1 },
  { id: "2", name: "Cafe Latte", price: "$4.50", qty: 2 },
];

export default function CartTab() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.cream }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: Platform.OS === "ios" ? 60 : 48,
          paddingHorizontal: 20,
          paddingBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontFamily: "Pacifico_400Regular",
            color: COLORS.brown,
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          Creatix
        </Text>

        <Text
          style={{
            fontSize: 22,
            fontFamily: "BricolageGrotesque_700Bold",
            color: COLORS.brown,
            marginBottom: 20,
          }}
        >
          My Cart
        </Text>

        {cartItems.map((item) => (
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
                  marginTop: 4,
                }}
              >
                {item.price}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Pressable
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  backgroundColor: COLORS.coffeeBg,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Minus size={14} color={COLORS.brown} />
              </Pressable>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "700",
                  color: COLORS.brown,
                }}
              >
                {item.qty}
              </Text>
              <Pressable
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
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
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: COLORS.warmWhite,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: COLORS.border,
            paddingHorizontal: 14,
            paddingVertical: 12,
            marginBottom: 20,
            gap: 10,
          }}
        >
          <TextInput
            placeholder="Promo code"
            placeholderTextColor={COLORS.neutralLight}
            style={{
              flex: 1,
              fontSize: 14,
              color: COLORS.brown,
              padding: 0,
            }}
          />
          <Pressable
            style={{
              backgroundColor: COLORS.brown,
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: "700", color: COLORS.white }}>Apply</Text>
          </Pressable>
        </View>

        <View
          style={{
            backgroundColor: COLORS.warmWhite,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: COLORS.border,
            padding: 18,
            marginBottom: 24,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
            <Text style={{ fontSize: 14, color: COLORS.neutral }}>Subtotal</Text>
            <Text style={{ fontSize: 14, fontWeight: "700", color: COLORS.brown }}>$13.90</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
            <Text style={{ fontSize: 14, color: COLORS.neutral }}>Discount</Text>
            <Text style={{ fontSize: 14, fontWeight: "700", color: COLORS.sage }}>$0.00</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", borderTopWidth: 1, borderTopColor: COLORS.border, paddingTop: 10 }}>
            <Text style={{ fontSize: 16, fontFamily: "BricolageGrotesque_700Bold", color: COLORS.brown }}>Total</Text>
            <Text style={{ fontSize: 16, fontWeight: "800", color: COLORS.brown }}>$13.90</Text>
          </View>
        </View>

        <Pressable
          onPress={() => router.push("/(stack)/delivery-method")}
          style={{
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
            Checkout
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
