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
import { Search, Plus } from "lucide-react-native";

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
};

const categories = ["Cappuccino", "Iced Coffee", "Latte", "Mocha", "Espresso"];

const menuItems = [
  { id: "1", name: "Cappuccino", price: "$4.90", category: "Cappuccino" },
  { id: "2", name: "Iced Latte", price: "$5.20", category: "Iced Coffee" },
  { id: "3", name: "Cafe Latte", price: "$4.50", category: "Latte" },
  { id: "4", name: "Iced Caramel", price: "$5.60", category: "Iced Coffee" },
  { id: "5", name: "Mocha", price: "$5.00", category: "Mocha" },
  { id: "6", name: "Espresso", price: "$3.50", category: "Espresso" },
];

export default function MenuTab() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("Cappuccino");

  const filtered = menuItems.filter((i) => i.category === activeCategory);

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
            marginBottom: 16,
          }}
        >
          Menu
        </Text>

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
            marginBottom: 18,
            gap: 10,
          }}
        >
          <Search size={18} color={COLORS.neutralLight} />
          <Text
            style={{
              flex: 1,
              fontSize: 14,
              color: COLORS.neutralLight,
            }}
          >
            Search coffee...
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 8, marginBottom: 20 }}
        >
          {categories.map((cat) => (
            <Pressable
              key={cat}
              onPress={() => setActiveCategory(cat)}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 20,
                backgroundColor: activeCategory === cat ? COLORS.brown : COLORS.warmWhite,
                borderWidth: 1,
                borderColor: activeCategory === cat ? COLORS.brown : COLORS.border,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "600",
                  color: activeCategory === cat ? COLORS.white : COLORS.brown,
                }}
              >
                {cat}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 14 }}>
          {filtered.map((item) => (
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
      </ScrollView>
    </View>
  );
}
