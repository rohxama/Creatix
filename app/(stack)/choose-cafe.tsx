import React from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Platform,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import { ArrowLeft, MapPin } from "lucide-react-native";

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

const cafes = [
  { id: "1", name: "Creatix Cafe", distance: "0.3 miles away", address: "123 Coffee Lane, Coffeeville" },
  { id: "2", name: "Creatix Downtown", distance: "1.2 miles away", address: "456 Main St, Downtown" },
  { id: "3", name: "Creatix Park", distance: "2.5 miles away", address: "789 Park Ave, Uptown" },
];

export default function ChooseCafeScreen() {
  const router = useRouter();

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
            marginBottom: 16,
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
              marginBottom: 4,
            }}
          >
            Choose your cafe
          </Text>
        </View>

        <View style={{ paddingHorizontal: 20, marginBottom: 16 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: COLORS.warmWhite,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: COLORS.border,
              paddingHorizontal: 14,
              paddingVertical: Platform.OS === "ios" ? 12 : 10,
              gap: 10,
            }}
          >
            <TextInput
              placeholder="Enter your address"
              placeholderTextColor={COLORS.neutralLight}
              style={{ flex: 1, fontSize: 14, color: COLORS.brown, padding: 0 }}
            />
          </View>
        </View>

        <View
          style={{
            height: 180,
            marginHorizontal: 20,
            borderRadius: 16,
            backgroundColor: COLORS.coffeeBg,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
          }}
        >
          <MapPin size={32} color={COLORS.brown} />
          <Text style={{ fontSize: 13, color: COLORS.neutral, marginTop: 8 }}>Map View</Text>
        </View>

        <View style={{ paddingHorizontal: 20, gap: 10 }}>
          {cafes.map((cafe, idx) => (
            <Pressable
              key={cafe.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: idx === 0 ? COLORS.brown : COLORS.warmWhite,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: idx === 0 ? COLORS.brown : COLORS.border,
                padding: 16,
                gap: 14,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  backgroundColor: idx === 0 ? "rgba(255,255,255,0.2)" : COLORS.coffeeBg,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MapPin size={18} color={idx === 0 ? COLORS.white : COLORS.brown} />
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "BricolageGrotesque_700Bold",
                    color: idx === 0 ? COLORS.white : COLORS.brown,
                  }}
                >
                  {cafe.name}
                </Text>
                <Text style={{ fontSize: 12, color: idx === 0 ? "rgba(255,255,255,0.7)" : COLORS.neutral, marginTop: 2 }}>
                  {cafe.distance}
                </Text>
                <Text style={{ fontSize: 11, color: idx === 0 ? "rgba(255,255,255,0.5)" : COLORS.neutralLight, marginTop: 1 }}>
                  {cafe.address}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 16,
          paddingBottom: Platform.OS === "ios" ? 36 : 24,
          backgroundColor: COLORS.cream,
          flexDirection: "row",
          gap: 12,
        }}
      >
        <Pressable
          style={{
            flex: 1,
            paddingVertical: 14,
            borderRadius: 14,
            borderWidth: 1,
            borderColor: COLORS.brown,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "700", color: COLORS.brown }}>Save</Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("/(stack)/delivery-method")}
          style={{
            flex: 1,
            paddingVertical: 14,
            borderRadius: 14,
            backgroundColor: COLORS.brown,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "700", color: COLORS.white }}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
}
