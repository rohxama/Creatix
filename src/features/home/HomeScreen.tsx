import React, { useState, useEffect, useRef } from "react";
import {
  ScrollView,
  View,
  Text,
  Pressable,
  TextInput,
  Dimensions,
  Platform,
  Image,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { useRouter } from "expo-router";
import {
  Search,
  User,
  Plus,
  SlidersHorizontal,
  Coffee,
  CupSoda,
  Cookie,
  Cake,
} from "lucide-react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const PADDING = 20;
const BANNER_WIDTH = SCREEN_WIDTH - PADDING * 2;
const BANNER_IMAGES = [
  require("../../../assets/banner-img1.png"),
  require("../../../assets/banner-img2.png"),
  require("../../../assets/banner-img3.png"),
  require("../../../assets/banner-img4.png"),
];
const LOOPED_BANNERS = [...BANNER_IMAGES, BANNER_IMAGES[0]];

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

const categories = [
  { id: "coffee", label: "Coffee", icon: Coffee },
  { id: "pastry", label: "Pastry", icon: Cake },
  { id: "boba", label: "Boba", icon: CupSoda },
  { id: "brunch", label: "Brunch", icon: Cookie },
];

const allProducts = [
  { id: "1", name: "Latte Macchiato", price: "$2.59", category: "coffee" },
  { id: "2", name: "Iced Mocha", price: "$2.79", category: "boba" },
  { id: "3", name: "Cappuccino", price: "$3.49", category: "coffee" },
  { id: "4", name: "Lotus Latte", price: "$3.99", category: "coffee" },
  { id: "5", name: "Iced Caramel", price: "$4.29", category: "boba" },
  { id: "6", name: "Espresso", price: "$2.99", category: "coffee" },
  { id: "7", name: "Taro Boba", price: "$3.79", category: "boba" },
  { id: "8", name: "Croissant", price: "$2.49", category: "pastry" },
  { id: "9", name: "Danish Pastry", price: "$3.49", category: "pastry" },
  { id: "10", name: "Blueberry Muffin", price: "$2.99", category: "pastry" },
  { id: "11", name: "Eggs Benedict", price: "$5.99", category: "brunch" },
  { id: "12", name: "Avocado Toast", price: "$4.99", category: "brunch" },
  { id: "13", name: "Pancakes", price: "$4.49", category: "brunch" },
  { id: "14", name: "Matcha Boba", price: "$3.99", category: "boba" },
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
  const [activeCategory, setActiveCategory] = useState("coffee");
  const bannerRef = useRef<any>(null);
  const [bannerIndex, setBannerIndex] = useState(0);
  const float = useSharedValue(0);

  useEffect(() => {
    float.value = withRepeat(
      withTiming(8, {
        duration: 2000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true,
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => {
        const next = prev + 1;
        if (next >= LOOPED_BANNERS.length) {
          bannerRef.current?.scrollTo({ x: 0, animated: false });
          return 0;
        }
        bannerRef.current?.scrollTo({ x: next * BANNER_WIDTH, animated: true });
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [BANNER_WIDTH]);

  const onBannerScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = e.nativeEvent.contentOffset.x;
    const index = Math.round(offset / BANNER_WIDTH);
    if (index >= BANNER_IMAGES.length) {
      bannerRef.current?.scrollTo({ x: 0, animated: false });
      setBannerIndex(0);
    } else {
      setBannerIndex(index);
    }
  };

  const filteredProducts = allProducts.filter((p) => p.category === activeCategory);

  const floatStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: float.value }],
  }));

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.cream }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* ─── 1. HEADER ─── */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: Platform.OS === "ios" ? 16 : 12,
            paddingBottom: 4,
          }}
        >
          <Text
            style={{
              fontSize: 34,
              fontFamily: "Pacifico_400Regular",
              color: COLORS.brown,
              letterSpacing: -0.3,
            }}
          >
            Creatix
          </Text>
        </View>

        {/* ─── 2. GREETING ─── */}
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
              fontSize: 22,
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
              width: 40,
              height: 40,
              borderRadius: 20,
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
            marginBottom: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: COLORS.warmWhite,
              borderRadius: 14,
              paddingHorizontal: 14,
              paddingVertical: Platform.OS === "ios" ? 12 : 10,
              borderWidth: 1,
              borderColor: COLORS.border,
              gap: 10,
            }}
          >
            <Search size={18} color={COLORS.neutralLight} />
            <TextInput
              value={searchText}
              onChangeText={setSearchText}
              placeholder=""
              placeholderTextColor={COLORS.neutralLight}
              selectionColor={COLORS.brown}
              onSubmitEditing={() => {
                if (searchText.trim()) {
                  router.push({
                    pathname: "/(stack)/search",
                    params: { query: searchText.trim() },
                  });
                }
              }}
              returnKeyType="search"
              style={{
                flex: 1,
                fontSize: 14,
                color: COLORS.brown,
                padding: 0,
                outlineStyle: "none" as any,
              }}
            />
            <SlidersHorizontal size={18} color={COLORS.brown} />
          </View>
        </View>

        {/* ─── 4. BANNER SLIDER ─── */}
        <View
          style={{
            marginBottom: 24,
            marginHorizontal: PADDING,
            overflow: "hidden",
          }}
        >
          <ScrollView
            ref={bannerRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={onBannerScroll}
            scrollEventThrottle={16}
          >
            {LOOPED_BANNERS.map((img, idx) => (
              <View
                key={idx}
                style={{
                  width: BANNER_WIDTH,
                  height: 160,
                  borderRadius: 18,
                  overflow: "hidden",
                }}
              >
                <Image
                  source={img}
                  style={{
                    width: BANNER_WIDTH,
                    height: 180,
                  }}
                  resizeMode="stretch"
                />
              </View>
            ))}
          </ScrollView>
        </View>

        {/* ─── 5. CATEGORY ─── */}
        <View style={{ marginBottom: 20, paddingHorizontal: PADDING }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "BricolageGrotesque_700Bold",
              color: COLORS.brown,
              marginBottom: 14,
            }}
          >
            Category
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            {categories.map((cat) => (
              <Pressable
                key={cat.id}
                onPress={() => setActiveCategory(cat.id)}
                style={{
                  alignItems: "center",
                  gap: 8,
                  width: (SCREEN_WIDTH - PADDING * 2 - 48) / 4,
                }}
              >
                <View
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 20,
                    backgroundColor: activeCategory === cat.id ? COLORS.brown : COLORS.warmWhite,
                    borderWidth: 1.5,
                    borderColor: activeCategory === cat.id ? COLORS.brown : COLORS.border,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <cat.icon size={32} color={activeCategory === cat.id ? COLORS.white : COLORS.brown} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: activeCategory === cat.id ? "700" : "500",
                    color: activeCategory === cat.id ? COLORS.brown : COLORS.neutral,
                    textAlign: "center",
                  }}
                >
                  {cat.label}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* ─── 6. PRODUCTS GRID ─── */}
        <View style={{ paddingHorizontal: PADDING, flexDirection: "row", flexWrap: "wrap", gap: 14, marginBottom: 20 }}>
          {filteredProducts.map((item) => (
            <Pressable
              key={item.id}
              onPress={() => router.push({ pathname: "/(stack)/product-details", params: { id: item.id, name: item.name, price: item.price } })}
              style={{
                width: (SCREEN_WIDTH - PADDING * 2 - 14) / 2,
                backgroundColor: COLORS.warmWhite,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: COLORS.border,
                overflow: "hidden",
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 150,
                  backgroundColor: COLORS.coffeeBg,
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                }}
              >
                <Image
                  source={require("../../../assets/mockup.png")}
                  style={{ width: 100, height: 100 }}
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
                  <Text style={{ fontSize: 15, fontWeight: "800", color: COLORS.brown }}>
                    {item.price}
                  </Text>
                  <Pressable
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 16,
                      backgroundColor: COLORS.sage,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Plus size={16} color={COLORS.white} />
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
