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
  { id: "1", name: "Classic Latte", description: "Velvety espresso, steamed milk, a little leaf on top.", price: "$4.50", category: "coffee", tag: "Hot Pick" },
  { id: "2", name: "Caramel Macchiato", description: "Vanilla, espresso, caramel drizzle. Sweet heaven.", price: "$5.25", category: "coffee", tag: "Hot Pick" },
  { id: "3", name: "Espresso Doppio", description: "Two shots of pure magic. For the brave.", price: "$3.50", category: "coffee", tag: "Hot Pick" },
  { id: "4", name: "Mocha Dream", description: "Chocolate, espresso, whipped cloud.", price: "$5.00", category: "coffee" },
  { id: "5", name: "Iced Vanilla Cold Brew", description: "Slow-steeped 18 hours, vanilla cream foam.", price: "$5.50", category: "coffee", tag: "New" },
  { id: "6", name: "Golden Flat White", description: "Honey + cinnamon flat white. Cozy in a cup.", price: "$5.25", category: "coffee" },
  { id: "7", name: "Honey Oat Latte", description: "Oat milk, local honey, toasted cinnamon.", price: "$5.00", category: "coffee" },
  { id: "8", name: "Hazelnut Mocha", description: "Nutty chocolate, espresso, cocoa dust.", price: "$5.50", category: "coffee" },
  { id: "9", name: "Brown Sugar Boba", description: "Tiger stripes, chewy pearls, milky sweet.", price: "$6.00", category: "boba", tag: "Hot Pick" },
  { id: "10", name: "Strawberry Milk Tea", description: "Real fruit, creamy milk, pop of boba.", price: "$6.25", category: "boba", tag: "Hot Pick" },
  { id: "11", name: "Mango Slush Boba", description: "Frozen mango, popping yolk, sunshine sip.", price: "$6.50", category: "boba", tag: "New" },
  { id: "12", name: "Matcha Latte Boba", description: "Ceremonial matcha, oat milk, tapioca pearls.", price: "$6.50", category: "boba" },
  { id: "13", name: "Coconut Taro Boba", description: "Taro cream, coconut jelly, dreamy purple.", price: "$6.75", category: "boba", tag: "Veggie" },
  { id: "14", name: "Ube Taro Wave", description: "Purple yam, taro pearls, sweet condensed.", price: "$6.75", category: "boba", tag: "Veggie" },
  { id: "15", name: "Yuzu Green Tea", description: "Citrus yuzu, jade tea, crystal boba.", price: "$6.25", category: "boba", tag: "New" },
  { id: "16", name: "Chocolate Boba", description: "Dark cocoa, milk, chewy pearls, whipped top.", price: "$6.50", category: "boba" },
  { id: "13", name: "Butter Croissant", description: "Flaky, golden, 32 layers of buttery joy.", price: "$3.75", category: "pastry" },
  { id: "14", name: "Caramel Cupcake", description: "Salted caramel frosting, sprinkle of magic.", price: "$4.25", category: "pastry", tag: "Hot Pick" },
  { id: "15", name: "Strawberry Danish", description: "Fresh berries, vanilla cream, sugar dust.", price: "$4.50", category: "pastry", tag: "Hot Pick" },
  { id: "16", name: "Glazed Donut", description: "Pillow-soft, classic glaze, melts in mouth.", price: "$3.25", category: "pastry" },
  { id: "17", name: "Choco Chip Cookie", description: "Warm, gooey center, crunchy edges.", price: "$2.75", category: "pastry" },
  { id: "18", name: "Mini Apple Pie", description: "Cinnamon apples, lattice crust, hug inside.", price: "$4.75", category: "pastry", tag: "New" },
  { id: "19", name: "Peach Frangipane", description: "Almond cream, ripe peaches, flaky base.", price: "$4.50", category: "pastry", tag: "New" },
  { id: "20", name: "Honey Walnut Scone", description: "Crunchy walnuts, honey glaze, buttery.", price: "$3.50", category: "pastry" },
  { id: "21", name: "Avocado Toast", description: "Smashed avo, chili, lime, sourdough. Classic.", price: "$8.50", category: "brunch", tag: "Veggie" },
  { id: "22", name: "Fluffy Pancakes", description: "Stack of three, maple, berry butter.", price: "$9.25", category: "brunch", tag: "Hot Pick" },
  { id: "23", name: "Breakfast Bowl", description: "Eggs, beans, avocado, salsa, tortilla.", price: "$10.50", category: "brunch" },
  { id: "24", name: "Bacon Egg Bagel", description: "Crispy bacon, fried egg, melty cheddar.", price: "$8.75", category: "brunch" },
  { id: "25", name: "Banana Walnut Loaf", description: "Toasted, buttered, with honey drizzle.", price: "$5.50", category: "brunch", tag: "Veggie" },
  { id: "26", name: "Shakshuka", description: "Spiced tomatoes, baked eggs, crusty bread.", price: "$11.00", category: "brunch", tag: "New" },
  { id: "27", name: "Full English", description: "Eggs, beans, sausage, bacon, toast, tomato.", price: "$12.50", category: "brunch", tag: "Hot Pick" },
  { id: "28", name: "Eggs Benedict", description: "Poached eggs, hollandaise, spinach, muffin.", price: "$11.50", category: "brunch", tag: "New" },
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
  const [showSuggestions, setShowSuggestions] = useState(false);
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
              onChangeText={(text) => { setSearchText(text); setShowSuggestions(true); }}
              placeholder=""
              placeholderTextColor={COLORS.neutralLight}
              selectionColor={COLORS.brown}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              onSubmitEditing={() => {
                setShowSuggestions(false);
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
          {showSuggestions && searchText.trim().length > 0 ? (
            <View style={{ position: "absolute", top: 50, left: PADDING, right: PADDING, backgroundColor: COLORS.cream, borderRadius: 12, maxHeight: 200, zIndex: 10 }}>
              <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
                {allProducts
                  .filter((p) => p.name.toLowerCase().includes(searchText.trim().toLowerCase()))
                  .slice(0, 10)
                  .map((item) => (
                    <Pressable
                      key={item.id}
                      onPress={() => {
                        setSearchText(item.name);
                        setShowSuggestions(false);
                        router.push({ pathname: "/(stack)/search", params: { query: item.name } });
                      }}
                      style={{ paddingHorizontal: 14, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: COLORS.border }}
                    >
                    <Text style={{ fontSize: 13, color: COLORS.brown }}>{item.name}</Text>
                    <Text style={{ fontSize: 11, color: COLORS.neutralLight }}>{item.price}</Text>
                   </Pressable>
                ))}
              </ScrollView>
            </View>
          ) : null}
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
                  <cat.icon size={30} color={activeCategory === cat.id ? COLORS.white : COLORS.brown} />
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
              onPress={() => router.push({ pathname: "/(stack)/product-details", params: { id: item.id, name: item.name, price: item.price, description: item.description, tag: item.tag } })}
              style={{
                width: (SCREEN_WIDTH - PADDING * 2 - 14) / 2,
                backgroundColor: COLORS.warmWhite,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: COLORS.border,
                padding: 12,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 120,
                  backgroundColor: COLORS.creamDark,
                  borderRadius: 14,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 10,
                }}
              >
                <Image
                  source={item.category === "pastry" ? require("../../../assets/pastery.png") : item.category === "boba" ? require("../../../assets/boba.png") : item.category === "brunch" ? require("../../../assets/brunch.png") : require("../../../assets/mockup.png")}
                  style={{ width: 90, height: 100 }}
                  resizeMode="contain"
                />
                {item.tag ? (
                  <View style={{ position: "absolute", top: 8, left: 8, backgroundColor: item.tag === "Hot Pick" ? "#E53935" : item.tag === "Veggie" ? "#2E7D32" : "#43A047", borderRadius: 8, paddingHorizontal: 8, paddingVertical: 3 }}>
                    <Text style={{ fontSize: 9, fontWeight: "700", color: COLORS.white }}>{item.tag}</Text>
                  </View>
                ) : null}
              </View>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "BricolageGrotesque_700Bold",
                  color: COLORS.brown,
                  marginBottom: 2,
                  textAlign: "center",
                }}
              >
                {item.name}
              </Text>
              {item.description ? (
                <Text
                  style={{
                    fontSize: 11,
                    color: COLORS.neutral,
                    textAlign: "center",
                    marginBottom: 6,
                    lineHeight: 12,
                  }}
                  numberOfLines={2}
                >
                  {item.description}
                </Text>
              ) : null}
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", marginTop: 2 }}>
                <Text style={{ fontSize: 14, fontWeight: "800", color: COLORS.brown }}>
                  {item.price}
                </Text>
                <Pressable
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    backgroundColor: COLORS.brownLight,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Plus size={16} color={COLORS.white} />
                </Pressable>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
