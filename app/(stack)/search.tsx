import React from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { ArrowLeft, Plus } from "lucide-react-native";

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

const allItems = [
  { id: "1", name: "Cappuccino", price: "$4.90", category: "Cappuccino" },
  { id: "2", name: "Iced Latte", price: "$5.20", category: "Iced Coffee" },
  { id: "3", name: "Cafe Latte", price: "$4.50", category: "Latte" },
  { id: "4", name: "Iced Caramel", price: "$5.60", category: "Iced Coffee" },
  { id: "5", name: "Mocha", price: "$5.00", category: "Mocha" },
  { id: "6", name: "Espresso", price: "$3.50", category: "Espresso" },
  { id: "7", name: "Americano", price: "$4.50", category: "Espresso" },
  { id: "8", name: "Macchiato", price: "$5.30", category: "Espresso" },
  { id: "9", name: "Flat White", price: "$4.80", category: "Latte" },
  { id: "10", name: "Iced Mocha", price: "$5.80", category: "Iced Coffee" },
];

export default function SearchScreen() {
  const router = useRouter();
  const { query } = useLocalSearchParams<{ query?: string }>();

  const results = query
    ? allItems.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

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
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <Pressable onPress={() => router.back()}>
            <ArrowLeft size={24} color={COLORS.brown} />
          </Pressable>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "BricolageGrotesque_700Bold",
              color: COLORS.brown,
              flex: 1,
            }}
          >
            Results for "{query}"
          </Text>
        </View>

        {results.length === 0 ? (
          <View style={{ alignItems: "center", paddingTop: 60 }}>
            <Text style={{ fontSize: 40, marginBottom: 12 }}>🔍</Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "BricolageGrotesque_700Bold",
                color: COLORS.brown,
                marginBottom: 6,
              }}
            >
              No results found
            </Text>
            <Text style={{ fontSize: 13, color: COLORS.neutral }}>
              Try searching for something else
            </Text>
          </View>
        ) : (
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 14 }}>
            {results.map((item) => (
              <Pressable
                key={item.id}
                onPress={() =>
                  router.push({
                    pathname: "/(stack)/product-details",
                    params: { id: item.id, name: item.name, price: item.price, description: (item as any).description || "", tag: (item as any).tag || "", category: item.category },
                  })
                }
                style={{
                  width: "47%",
                  backgroundColor: COLORS.warmWhite,
                  borderRadius: 18,
                  borderWidth: 1,
                  borderColor: COLORS.border,
                  overflow: "hidden",
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 110,
                    backgroundColor: COLORS.coffeeBg,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../../assets/mockup.png")}
                    style={{ width: 60, height: 60 }}
                    resizeMode="contain"
                  />
                </View>
                <View style={{ padding: 12 }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "BricolageGrotesque_700Bold",
                      color: COLORS.brown,
                      marginBottom: 6,
                    }}
                  >
                    {item.name}
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "800",
                        color: COLORS.brown,
                      }}
                    >
                      {item.price}
                    </Text>
                    <Pressable
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 14,
                        backgroundColor: COLORS.brown,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Plus size={14} color={COLORS.white} />
                    </Pressable>
                  </View>
                </View>
              </Pressable>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
