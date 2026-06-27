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
import { Search, User, Star, Plus, SlidersHorizontal } from "lucide-react-native";

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

const whatsNewItems = [
  { id: "1", name: "Cappuccino" },
  { id: "2", name: "Iced Coffee" },
  { id: "3", name: "Mocha" },
];

const popularItems = [
  { id: "1", name: "Cafe Latte", rating: 4.8, price: "$4.50" },
  { id: "2", name: "Iced Caramel Latte", rating: 4.9, price: "$5.20" },
  { id: "3", name: "Cappuccino", rating: 4.7, price: "$4.90" },
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
  const bannerRef = useRef<ScrollView>(null);
  const [bannerIndex, setBannerIndex] = useState(0);
  const float = useSharedValue(0);

  useEffect(() => {
    float.value = withRepeat(
      withTiming(8, {
        duration: 2000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
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
              style={{
                flex: 1,
                fontSize: 14,
                color: COLORS.brown,
                padding: 0,
              }}
            />
            <SlidersHorizontal size={18} color={COLORS.brown} />
          </View>
        </View>

        {/* ─── 4. BANNER SLIDER ─── */}
        <View style={{ marginBottom: 24, marginHorizontal: PADDING, overflow: "hidden" }}>
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

        {/* ─── 5. POPULAR NOW ─── */}
        <View style={{ marginBottom: 24 }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "BricolageGrotesque_700Bold",
              color: COLORS.brown,
              paddingHorizontal: PADDING,
              marginBottom: 12,
            }}
          >
            Popular Now
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: PADDING,
              gap: 12,
            }}
          >
            {popularItems.map((item) => (
              <View
                key={item.id}
                style={{
                  width: 140,
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
                    height: 100,
                    backgroundColor: COLORS.coffeeBg,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../../../assets/mockup.png")}
                    style={{ width:80, height: 80 }}
                    resizeMode="contain"
                  />
                </View>
                <View style={{ padding: 10 }}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: "BricolageGrotesque_700Bold",
                      color: COLORS.brown,
                      marginBottom: 4,
                    }}
                  >
                    {item.name}
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 3, marginBottom: 8 }}>
                    <Star size={11} color="#F5A623" fill="#F5A623" />
                    <Text
                      style={{
                        fontSize: 11,
                        fontWeight: "600",
                        color: COLORS.neutral,
                      }}
                    >
                      {item.rating}
                    </Text>
                  </View>
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
              </View>
            ))}
          </ScrollView>
        </View>

        {/* ─── 7. BOTTOM PROMO ─── */}
        <View style={{ paddingHorizontal: PADDING }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: COLORS.warmWhite,
              borderRadius: 18,
              borderWidth: 1,
              borderColor: COLORS.border,
              padding: 14,
              gap: 14,
            }}
          >
            <View
              style={{
                width: 70,
                height: 70,
                borderRadius: 14,
                backgroundColor: COLORS.coffeeBg,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../../assets/mockup.png")}
                style={{ width: 48, height: 48 }}
                resizeMode="contain"
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "BricolageGrotesque_700Bold",
                  color: COLORS.brown,
                  marginBottom: 4,
                }}
              >
                Cafe Latte
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.neutral,
                  marginBottom: 10,
                }}
              >
                Rich espresso with steamed milk
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "800",
                    color: COLORS.brown,
                  }}
                >
                  $4.50
                </Text>
                <Pressable
                  style={{
                    backgroundColor: COLORS.brown,
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ color: COLORS.white, fontSize: 12, fontWeight: "700" }}>Add to cart</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
