import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { ArrowLeft, Clock } from "lucide-react-native";

const COLORS = {
  cream: "#F5EDE3",
  brown: "#3c2415",
  coffeeBg: "#e8dac8",
  warmWhite: "#f7f0e6",
  white: "#ffffff",
  border: "#ddd0c0",
  neutral: "#7a6e63",
};

const timeSlots = ["8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM"];

export default function DeliveryMethodScreen() {
  const router = useRouter();
  const [method, setMethod] = useState<"pickup" | "delivery">("pickup");
  const [scheduled, setScheduled] = useState(false);

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
            marginBottom: 20,
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
            Delivery Method
          </Text>
        </View>

        <View style={{ paddingHorizontal: 20, flexDirection: "row", gap: 10, marginBottom: 24 }}>
          <Pressable
            onPress={() => setMethod("pickup")}
            style={{
              flex: 1,
              paddingVertical: 14,
              borderRadius: 12,
              borderWidth: 1.5,
              borderColor: method === "pickup" ? COLORS.brown : COLORS.border,
              backgroundColor: method === "pickup" ? COLORS.brown : COLORS.warmWhite,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "700", color: method === "pickup" ? COLORS.white : COLORS.brown }}>
              Pick up
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setMethod("delivery")}
            style={{
              flex: 1,
              paddingVertical: 14,
              borderRadius: 12,
              borderWidth: 1.5,
              borderColor: method === "delivery" ? COLORS.brown : COLORS.border,
              backgroundColor: method === "delivery" ? COLORS.brown : COLORS.warmWhite,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "700", color: method === "delivery" ? COLORS.white : COLORS.brown }}>
              Delivery
            </Text>
          </Pressable>
        </View>

        <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
          <Pressable
            onPress={() => setScheduled(!scheduled)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: COLORS.warmWhite,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: COLORS.border,
              padding: 16,
              gap: 12,
            }}
          >
            <View
              style={{
                width: 22,
                height: 22,
                borderRadius: 6,
                borderWidth: 2,
                borderColor: scheduled ? COLORS.brown : COLORS.border,
                backgroundColor: scheduled ? COLORS.brown : "transparent",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {scheduled && <Text style={{ fontSize: 12, color: COLORS.white }}>✓</Text>}
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, fontWeight: "700", color: COLORS.brown }}>Scheduled pick-up</Text>
              <Text style={{ fontSize: 12, color: COLORS.neutral, marginTop: 2 }}>Schedule for later</Text>
            </View>
          </Pressable>
        </View>

        {scheduled && (
          <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "BricolageGrotesque_700Bold",
                color: COLORS.brown,
                marginBottom: 10,
              }}
            >
              Pick-up time
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
              {timeSlots.map((time, idx) => (
                <Pressable
                  key={time}
                  style={{
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: idx === 2 ? COLORS.brown : COLORS.border,
                    backgroundColor: idx === 2 ? COLORS.brown : COLORS.warmWhite,
                  }}
                >
                  <Text style={{ fontSize: 13, fontWeight: "600", color: idx === 2 ? COLORS.white : COLORS.brown }}>
                    {time}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        )}

        <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: COLORS.warmWhite,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: COLORS.border,
              padding: 16,
              gap: 12,
            }}
          >
            <Clock size={18} color={COLORS.brown} />
            <Text style={{ flex: 1, fontSize: 14, color: COLORS.brown }}>
              {scheduled ? "Pickup at 9:00 AM" : "Ready in 10-15 min"}
            </Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 16,
          paddingBottom: Platform.OS === "ios" ? 36 : 24,
          backgroundColor: COLORS.cream,
        }}
      >
        <Pressable
          onPress={() => router.push("/(stack)/payment")}
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
            Next
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
