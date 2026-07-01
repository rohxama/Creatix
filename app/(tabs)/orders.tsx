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
import { useSafeAreaInsets } from "react-native-safe-area-context";

const COLORS = {
  cream: "#F5EDE3",
  brown: "#3c2415",
  coffeeBg: "#e8dac8",
  warmWhite: "#f7f0e6",
  white: "#ffffff",
  border: "#ddd0c0",
  neutral: "#7a6e63",
  sage: "#6b8f71",
  caramel: "#b07a4b",
};

const orders = [
  { id: "016", date: "Today, 09:37 AM", status: "Delivering", price: "$7.98", time: "4-5 min" },
  { id: "001", date: "May 07, 2025", status: "Delivered", price: "$3.99", time: "" },
  { id: "008", date: "May 08, 2025", status: "Delivered", price: "$3.99", time: "" },
  { id: "006", date: "May 02, 2025", status: "Cancelled", price: "$7.15", time: "No answer from you." },
  { id: "009", date: "May 01, 2025", status: "Delivered", price: "$4.50", time: "" },
];

const statusColors: Record<string, string> = {
  Delivering: COLORS.caramel,
  Delivered: COLORS.sage,
  Cancelled: "#c0392b",
};

export default function OrdersTab() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

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
        <Text
          style={{
            fontSize: 22,
            fontFamily: "BricolageGrotesque_700Bold",
            color: COLORS.brown,
            marginBottom: 20,
          }}
        >
          Order History
        </Text>

        {orders.map((order) => (
          <Pressable
            key={order.id}
            onPress={() => {
              if (order.status === "Delivering") {
                router.push("/(stack)/order-tracking");
              }
            }}
            style={{
              backgroundColor: COLORS.warmWhite,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: order.status === "Delivering" ? COLORS.caramel : COLORS.border,
              padding: 16,
              marginBottom: 12,
            }}
          >
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <View>
                <Text style={{ fontSize: 14, fontWeight: "700", color: COLORS.brown }}>
                  Order № {order.id}
                </Text>
                <Text style={{ fontSize: 12, color: COLORS.neutral, marginTop: 2 }}>
                  {order.date}
                </Text>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <View
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    borderRadius: 8,
                    backgroundColor: order.status === "Cancelled" ? "rgba(192,57,43,0.1)" : `${statusColors[order.status]}15`,
                  }}
                >
                  <Text style={{ fontSize: 12, fontWeight: "700", color: statusColors[order.status] }}>
                    {order.status}
                  </Text>
                </View>
                {order.time ? (
                  <Text style={{ fontSize: 11, color: COLORS.neutral, marginTop: 4 }}>
                    {order.time}
                  </Text>
                ) : null}
              </View>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 12 }}>
              {[1, 2, 3].map((i) => (
                <View
                  key={i}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    backgroundColor: COLORS.coffeeBg,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../../assets/mockup.png")}
                    style={{ width: 30, height: 30 }}
                    resizeMode="contain"
                  />
                </View>
              ))}
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ fontSize: 16, fontWeight: "800", color: COLORS.brown }}>{order.price}</Text>
              {order.status === "Delivered" && (
                <Pressable
                  onPress={() => router.push({ pathname: "/(stack)/product-details", params: { id: order.id, name: (order as any).name || "Coffee", price: order.price, description: "", tag: "", category: "coffee" } })}
                  style={{
                    paddingHorizontal: 14,
                    paddingVertical: 6,
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: COLORS.brown,
                  }}
                >
                  <Text style={{ fontSize: 12, fontWeight: "700", color: COLORS.brown }}>Order Again</Text>
                </Pressable>
              )}
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
