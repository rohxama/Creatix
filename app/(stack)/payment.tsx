import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Platform,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const COLORS = {
  cream: "#F5EDE3",
  brown: "#3c2415",
  coffeeBg: "#e8dac8",
  warmWhite: "#f7f0e6",
  white: "#ffffff",
  border: "#ddd0c0",
  neutral: "#7a6e63",
  neutralLight: "#a89e93",
};

const paymentMethods = [
  { id: "card", label: "Card", icon: "💳" },
  { id: "paypal", label: "PayPal", icon: "🅿️" },
  { id: "upi", label: "UPI", icon: "📱" },
];

export default function PaymentScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [selected, setSelected] = useState("card");
  const [upiId, setUpiId] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.cream }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ maxWidth: 480, alignSelf: "center", width: "100%" }}>
        <View
          style={{
            paddingTop: insets.top + 16,
            paddingHorizontal: 20,
            marginBottom: 24,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable onPress={() => router.back()}>
              <ArrowLeft size={24} color={COLORS.brown} />
            </Pressable>
            <Text
              style={{
                flex: 1,
                textAlign: "center",
                fontSize: 18,
                fontFamily: "BricolageGrotesque_700Bold",
                color: COLORS.brown,
              }}
            >
              Payment
            </Text>
            <View style={{ width: 24 }} />
          </View>
        </View>

        <View style={{ paddingHorizontal: 20, gap: 10, marginBottom: 24 }}>
          {paymentMethods.map((pm) => (
            <Pressable
              key={pm.id}
              onPress={() => setSelected(pm.id)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: selected === pm.id ? COLORS.brown : COLORS.warmWhite,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: selected === pm.id ? COLORS.brown : COLORS.border,
                padding: 16,
                gap: 14,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  backgroundColor: selected === pm.id ? "rgba(255,255,255,0.2)" : COLORS.coffeeBg,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 18 }}>{pm.icon}</Text>
              </View>
              <Text
                style={{
                  flex: 1,
                  fontSize: 15,
                  fontWeight: "700",
                  color: selected === pm.id ? COLORS.white : COLORS.brown,
                }}
              >
                {pm.label}
              </Text>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: selected === pm.id ? COLORS.white : COLORS.border,
                  backgroundColor: selected === pm.id ? COLORS.white : "transparent",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {selected === pm.id && <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: COLORS.brown }} />}
              </View>
            </Pressable>
          ))}
        </View>

        {selected === "upi" && (
          <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
            <TextInput
              placeholder="Enter UPI ID"
              placeholderTextColor={COLORS.neutralLight}
              value={upiId}
              onChangeText={setUpiId}
              style={{
                backgroundColor: COLORS.warmWhite,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: COLORS.border,
                paddingHorizontal: 16,
                paddingVertical: Platform.OS === "ios" ? 14 : 12,
                fontSize: 14,
                color: COLORS.brown,
              }}
            />
          </View>
        )}
        </View>
      </ScrollView>
    </View>
  );
}
