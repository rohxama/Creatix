import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Pressable,
  TextInput,
  Dimensions,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { Search, User, ChevronRight } from "lucide-react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const PADDING = 20;

const COLORS = {
  cream: "#F5EDE3",
  creamDark: "#e5d5be",
  brown: "#3c2415",
  brownMid: "#5c3a24",
  brownLight: "#8b6240",
  caramel: "#b07a4b",
  caramelLight: "#d4a76a",
  coffee: "#c49a6c",
  coffeeLight: "#d9c4a0",
  coffeeBg: "#e8dac8",
  sage: "#6b8f71",
  sageBg: "#3a6b4a",
  sageDark: "#2c5238",
  neutral: "#7a6e63",
  neutralLight: "#a89e93",
  warmWhite: "#f7f0e6",
  white: "#ffffff",
  border: "#ddd0c0",
};

const popularItems = [
  { id: "1", name: "Latte Macchiato", price: "$4.50", emoji: "☕" },
  { id: "2", name: "Espresso", price: "$3.50", emoji: "🫗" },
  { id: "3", name: "Caramel Macchiato", price: "$5.00", emoji: "🧋" },
  { id: "4", name: "Hazelnut Latte", price: "$5.50", emoji: "☕" },
];

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

export function HomeScreen() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.cream }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* ─── 1. HEADER (centered cafe name) ─── */}
        <View
          style={{
            alignItems: "center",
            paddingTop: Platform.OS === "ios" ? 16 : 12,
            paddingBottom: 4,
          }}
        >
          <Text
            style={{
              fontSize: 26,
              fontFamily: "Pacifico_400Regular",
              color: COLORS.brown,
              letterSpacing: -0.3,
            }}
          >
            Creatix Cafe
          </Text>
        </View>

        {/* ─── 2. GREETING (with user icon) ─── */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: PADDING,
            paddingTop: 8,
            paddingBottom: 12,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontFamily: "BricolageGrotesque_700Bold",
              color: COLORS.brown,
              letterSpacing: -0.3,
            }}
          >
            {getGreeting()}
          </Text>
          <Pressable
            onPress={() => router.push("/(tabs)/profile")}
            style={{
              width: 42,
              height: 42,
              borderRadius: 21,
              backgroundColor: COLORS.coffeeBg,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <User size={20} color={COLORS.brown} />
          </Pressable>
        </View>

        {/* ─── 3. SEARCH BAR ─── */}
        <View
          style={{
            paddingHorizontal: PADDING,
            marginBottom: 24,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "transparent",
              borderRadius: 50,
              paddingHorizontal: 14,
              paddingVertical: Platform.OS === "ios" ? 14 : 12,
              borderWidth: 2.5,
              borderColor: COLORS.brown,
              gap: 10,
            }}
          >
            <Search size={18} color={COLORS.brown} />
            <TextInput
              value={searchText}
              onChangeText={setSearchText}
              placeholder=""
              placeholderTextColor={COLORS.neutralLight}
              style={{
                flex: 1,
                fontSize: 14,
                color: COLORS.brown,
                padding: 0,
              }}
            />
          </View>
        </View>

        {/* ─── 4. HERO BANNER ─── */}
        <View
          style={{
            marginHorizontal: PADDING,
            marginBottom: 24,
            borderRadius: 20,
            backgroundColor: COLORS.sageDark,
            height: 180,
            overflow: "hidden",
          }}
        >
          {/* Decorative background circles */}
          <View
            style={{
              position: "absolute",
              top: -30,
              right: -20,
              width: 120,
              height: 120,
              borderRadius: 60,
              backgroundColor: "rgba(90,125,90,0.4)",
            }}
          />
          <View
            style={{
              position: "absolute",
              bottom: -20,
              right: 60,
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: "rgba(90,125,90,0.25)",
            }}
          />
          {/* Coffee bean decorations */}
          <View
            style={{
              position: "absolute",
              top: 20,
              right: 50,
              width: 30,
              height: 30,
              borderRadius: 15,
              backgroundColor: "rgba(188,122,63,0.3)",
            }}
          />
          <View
            style={{
              position: "absolute",
              bottom: 30,
              right: 20,
              width: 20,
              height: 20,
              borderRadius: 10,
              backgroundColor: "rgba(188,122,63,0.2)",
            }}
          />

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              padding: 24,
              alignItems: "center",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "800",
                  color: COLORS.white,
                  lineHeight: 28,
                  marginBottom: 8,
                  letterSpacing: -0.3,
                }}
              >
                Enjoy Your{"\n"}Favorite Coffee{"\n"}Every Morning!
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: 16,
                  lineHeight: 17,
                }}
              >
                20% OFF on your first order
              </Text>
              <Pressable
                onPress={() => router.push("/(tabs)/menu")}
                style={{
                  backgroundColor: COLORS.caramelLight,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 12,
                  alignSelf: "flex-start",
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "700",
                    color: COLORS.brown,
                  }}
                >
                  Order Now
                </Text>
              </Pressable>
            </View>

            {/* Coffee cup illustration area */}
            <View
              style={{
                width: 110,
                height: 140,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 80 }}>☕</Text>
            </View>
          </View>
        </View>

        {/* ─── 5. POPULAR NOW ─── */}
        <View style={{ marginBottom: 28 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: PADDING,
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                fontSize: 18,
              fontFamily: "BricolageGrotesque_700Bold",
              color: COLORS.brown,
              letterSpacing: -0.2,
            }}
          >
            Popular Now
            </Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: PADDING,
              gap: 16,
            }}
          >
            {popularItems.map((item) => (
              <Pressable
                key={item.id}
                onPress={() =>
                  router.push({
                    pathname: "/(stack)/product-details",
                    params: { id: item.id },
                  })
                }
                style={{
                  width: 100,
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <View
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                    backgroundColor: COLORS.coffeeBg,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 36 }}>{item.emoji}</Text>
                </View>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "600",
                    color: COLORS.brown,
                    textAlign: "center",
                    lineHeight: 17,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "800",
                    color: COLORS.caramel,
                  }}
                >
                  {item.price}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* ─── 6. TODAY'S SPECIAL ─── */}
        <View style={{ paddingHorizontal: PADDING }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                fontSize: 18,
              fontFamily: "BricolageGrotesque_700Bold",
              color: COLORS.brown,
              letterSpacing: -0.2,
            }}
          >
            Today's Special
            </Text>
            <Pressable
              onPress={() => router.push("/(tabs)/menu")}
              style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "600",
                  color: COLORS.caramel,
                }}
              >
                See All
              </Text>
              <ChevronRight size={16} color={COLORS.caramel} />
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: COLORS.white,
              borderRadius: 18,
              padding: 14,
              gap: 14,
            }}
          >
            <View
              style={{
                width: 90,
                height: 90,
                borderRadius: 16,
                backgroundColor: COLORS.coffeeBg,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 44 }}>🧊</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  color: COLORS.brown,
                  marginBottom: 4,
                }}
              >
                Iced Caramel
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.neutral,
                  lineHeight: 17,
                  marginBottom: 10,
                }}
              >
                Cold brew with caramel drizzle
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "800",
                    color: COLORS.caramel,
                  }}
                >
                  $5.00
                </Text>
                <View
                  style={{
                    backgroundColor: COLORS.brown,
                    width: 32,
                    height: 32,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: COLORS.white, fontSize: 18, marginTop: -1 }}>+</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
