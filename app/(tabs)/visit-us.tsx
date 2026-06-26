import React from "react";
import { View, ScrollView, Pressable, Text, Platform } from "react-native";
import { MapPin, Clock, Phone, Globe, Navigation } from "lucide-react-native";

const COLORS = {
  cream: "#fdf8f3",
  brown: "#6b341a",
  brownMid: "#853e1c",
  caramel: "#c8641c",
  caramelLight: "#df9748",
  coffee: "#bc7a3f",
  coffeeBg: "#f2e8d9",
  sage: "#5a7d5a",
  sageLight: "#e4ebe4",
  neutral: "#78716c",
  neutralLight: "#a8a29e",
  warmWhite: "#fefcf7",
  border: "#f2e8d9",
  terracotta: "#e55d2a",
};

const hours = [
  { day: "Monday", time: "7:00 AM - 8:00 PM" },
  { day: "Tuesday", time: "7:00 AM - 8:00 PM" },
  { day: "Wednesday", time: "7:00 AM - 8:00 PM" },
  { day: "Thursday", time: "7:00 AM - 8:00 PM" },
  { day: "Friday", time: "7:00 AM - 9:00 PM" },
  { day: "Saturday", time: "8:00 AM - 9:00 PM" },
  { day: "Sunday", time: "8:00 AM - 6:00 PM" },
];

export default function VisitUsTab() {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.cream }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: Platform.OS === "ios" ? 60 : 48,
          paddingHorizontal: 20,
          paddingBottom: 40,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "800",
            color: COLORS.brown,
            marginBottom: 6,
            letterSpacing: -0.5,
          }}
        >
          Visit Us
        </Text>
        <Text style={{ fontSize: 14, color: COLORS.neutral, marginBottom: 24 }}>
          Come say hello
        </Text>

        {/* Map Placeholder */}
        <View
          style={{
            height: 200,
            borderRadius: 24,
            backgroundColor: COLORS.coffeeBg,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
            overflow: "hidden",
          }}
        >
          <Text style={{ fontSize: 60, marginBottom: 8 }}>📍</Text>
          <Text style={{ fontSize: 14, fontWeight: "600", color: COLORS.brown }}>
            123 Coffee Lane, Coffeeville
          </Text>
        </View>

        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.brown,
            paddingVertical: 14,
            borderRadius: 16,
            marginBottom: 20,
            gap: 8,
          }}
        >
          <Navigation size={18} color="#fff" />
          <Text style={{ fontSize: 15, fontWeight: "700", color: "#fff" }}>
            Get Directions
          </Text>
        </Pressable>

        {/* Info Cards */}
        <View style={{ gap: 12, marginBottom: 24 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 14,
              backgroundColor: COLORS.warmWhite,
              borderRadius: 18,
              padding: 18,
              borderWidth: 1,
              borderColor: COLORS.border,
            }}
          >
            <View style={{ width: 42, height: 42, borderRadius: 14, backgroundColor: COLORS.coffeeBg, alignItems: "center", justifyContent: "center" }}>
              <MapPin size={20} color={COLORS.brown} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, fontWeight: "700", color: COLORS.brown }}>Address</Text>
              <Text style={{ fontSize: 13, color: COLORS.neutral, marginTop: 2 }}>123 Coffee Lane, Coffeeville, CA 90210</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 14,
              backgroundColor: COLORS.warmWhite,
              borderRadius: 18,
              padding: 18,
              borderWidth: 1,
              borderColor: COLORS.border,
            }}
          >
            <View style={{ width: 42, height: 42, borderRadius: 14, backgroundColor: COLORS.sageLight, alignItems: "center", justifyContent: "center" }}>
              <Phone size={20} color={COLORS.sage} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, fontWeight: "700", color: COLORS.brown }}>Phone</Text>
              <Text style={{ fontSize: 13, color: COLORS.neutral, marginTop: 2 }}>+1 (555) 123-4567</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 14,
              backgroundColor: COLORS.warmWhite,
              borderRadius: 18,
              padding: 18,
              borderWidth: 1,
              borderColor: COLORS.border,
            }}
          >
            <View style={{ width: 42, height: 42, borderRadius: 14, backgroundColor: "#fdf4f0", alignItems: "center", justifyContent: "center" }}>
              <Globe size={20} color={COLORS.terracotta} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, fontWeight: "700", color: COLORS.brown }}>Website</Text>
              <Text style={{ fontSize: 13, color: COLORS.neutral, marginTop: 2 }}>creatixcafe.com</Text>
            </View>
          </View>
        </View>

        {/* Opening Hours */}
        <View
          style={{
            borderRadius: 20,
            backgroundColor: COLORS.warmWhite,
            borderWidth: 1,
            borderColor: COLORS.border,
            padding: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <Clock size={20} color={COLORS.brown} />
            <Text style={{ fontSize: 18, fontWeight: "700", color: COLORS.brown }}>Opening Hours</Text>
          </View>
          {hours.map((h, i) => {
            const isToday = new Date().getDay() === i + 1;
            return (
              <View
                key={h.day}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingVertical: 10,
                  borderBottomWidth: i < hours.length - 1 ? 1 : 0,
                  borderBottomColor: COLORS.border,
                  backgroundColor: isToday ? COLORS.sageLight : "transparent",
                  marginHorizontal: isToday ? -10 : 0,
                  paddingHorizontal: isToday ? 10 : 0,
                  borderRadius: isToday ? 10 : 0,
                }}
              >
                <Text style={{ fontSize: 14, fontWeight: isToday ? "700" : "500", color: isToday ? COLORS.sage : COLORS.neutral }}>
                  {h.day}
                </Text>
                <Text style={{ fontSize: 14, fontWeight: isToday ? "700" : "500", color: isToday ? COLORS.brown : COLORS.neutral }}>
                  {h.time}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
