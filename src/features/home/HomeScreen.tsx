import React, { useState, useEffect, useRef } from "react";
import {
  ScrollView,
  View,
  Text,
  Pressable,
  TextInput,
  useWindowDimensions,
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
  SlidersHorizontal,
  Coffee,
  CupSoda,
  Cookie,
  Cake,
  Heart,
  Bell,
  MapPin,
} from "lucide-react-native";

const PADDING = 20;
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
  { id: "13p", name: "Butter Croissant", description: "Flaky, golden, 32 layers of buttery joy.", price: "$3.75", category: "pastry" },
  { id: "14p", name: "Caramel Cupcake", description: "Salted caramel frosting, sprinkle of magic.", price: "$4.25", category: "pastry", tag: "Hot Pick" },
  { id: "15p", name: "Strawberry Danish", description: "Fresh berries, vanilla cream, sugar dust.", price: "$4.50", category: "pastry", tag: "Hot Pick" },
  { id: "16p", name: "Glazed Donut", description: "Pillow-soft, classic glaze, melts in mouth.", price: "$3.25", category: "pastry" },
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

const flashSaleFilters = ["All", "Newest", "Popular", "Hot Picks"];

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

export function HomeScreen() {
  const router = useRouter();
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const BANNER_WIDTH = SCREEN_WIDTH - PADDING * 2;
  const [searchText, setSearchText] = useState("");
  const [activeCategory, setActiveCategory] = useState("coffee");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeFlashFilter, setActiveFlashFilter] = useState("All");
  const bannerRef = useRef<any>(null);
  const [bannerIndex, setBannerIndex] = useState(0);
  const float = useSharedValue(0);
  const [timer, setTimer] = useState({ hours: 2, minutes: 12, seconds: 56 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds -= 1;
        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        if (hours < 0) {
          hours = 2;
          minutes = 12;
          seconds = 56;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  useEffect(() => {
    Image.prefetch(require("../../../assets/mockup.png"));
    Image.prefetch(require("../../../assets/pastery.png"));
    Image.prefetch(require("../../../assets/boba.png"));
    Image.prefetch(require("../../../assets/brunch.png"));
    BANNER_IMAGES.forEach((img) => Image.prefetch(img));
  }, []);

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

  const filteredByCategory = allProducts.filter((p) => p.category === activeCategory);

  const flashSaleProducts = allProducts.filter((p) => {
    if (activeFlashFilter === "Newest") return p.tag === "New";
    if (activeFlashFilter === "Popular") return p.tag === "Hot Pick";
    if (activeFlashFilter === "Hot Picks") return p.tag === "Hot Pick";
    return true;
  }).slice(0, 6);

  const floatStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: float.value }],
  }));

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* ─── 1. HEADER: Location + Bell ─── */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: Platform.OS === "ios" ? 16 : 12,
            paddingHorizontal: PADDING,
            paddingBottom: 4,
          }}
        >
          <View>
            <Text style={{ fontSize: 12, color: COLORS.neutralLight }}>Location</Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 4, marginTop: 2 }}>
              <MapPin size={14} color={COLORS.brown} />
              <Text style={{ fontSize: 14, fontFamily: "BricolageGrotesque_700Bold", color: COLORS.brown }}>
                Creatix Cafe
              </Text>
            </View>
          </View>
          <Pressable
            onPress={() => router.push("/(stack)/notifications")}
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              backgroundColor: COLORS.cream,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Bell size={20} color={COLORS.brown} />
          </Pressable>
        </View>

        {/* ─── 2. GREETING ─── */}
        <View style={{ paddingHorizontal: PADDING, paddingTop: 10, paddingBottom: 12 }}>
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
          <Text style={{ fontSize: 13, color: COLORS.neutralLight, marginTop: 2 }}>
            It's time for coffee break
          </Text>
        </View>

        {/* ─── 3. SEARCH BAR ─── */}
        <View
          style={{
            paddingHorizontal: PADDING,
            marginBottom: 20,
            zIndex: 100,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: COLORS.cream,
                borderRadius: 14,
                paddingHorizontal: 14,
                paddingVertical: Platform.OS === "ios" ? 12 : 10,
                gap: 10,
              }}
            >
              <Search size={18} color={COLORS.neutralLight} />
              <TextInput
                value={searchText}
                onChangeText={(text) => { setSearchText(text); setShowSuggestions(true); }}
                placeholder="Search"
                placeholderTextColor={COLORS.neutralLight}
                selectionColor={COLORS.brown}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 300)}
                onSubmitEditing={() => {
                  setShowSuggestions(false);
                  if (searchText.trim()) {
                    router.push({
                      pathname: "/(stack)/search",
                      params: { query: searchText.trim() },
                    });
                    setSearchText("");
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
            </View>
            <Pressable
              onPress={() => router.push("/(tabs)/menu")}
              style={{
                width: 44,
                height: 44,
                borderRadius: 14,
                backgroundColor: COLORS.brown,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SlidersHorizontal size={18} color={COLORS.white} />
            </Pressable>
          </View>
          {showSuggestions && searchText.trim().length > 0 ? (
            <View
              style={{
                position: "absolute",
                top: 54,
                left: -PADDING,
                right: -PADDING,
                backgroundColor: COLORS.cream,
                borderRadius: 14,
                marginHorizontal: PADDING,
                maxHeight: 220,
                overflow: "hidden",
                zIndex: 200,
              }}
            >
              <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
                {allProducts
                  .filter((p) => p.name.toLowerCase().includes(searchText.trim().toLowerCase()))
                  .slice(0, 10)
                  .map((item) => (
                    <Pressable
                      key={item.id}
                      onPress={() => {
                        setSearchText("");
                        setShowSuggestions(false);
                        router.push({ pathname: "/(stack)/search", params: { query: item.name } });
                      }}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingHorizontal: 14,
                        paddingVertical: 12,
                      }}
                    >
                      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                        <Search size={14} color={COLORS.neutralLight} />
                        <Text style={{ fontSize: 13, color: COLORS.brown }}>{item.name}</Text>
                      </View>
                      <Text style={{ fontSize: 12, color: COLORS.neutralLight }}>{item.price}</Text>
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
                  height: 180,
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
        <View style={{ marginBottom: 24, paddingHorizontal: PADDING }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "BricolageGrotesque_700Bold",
                color: COLORS.brown,
              }}
            >
              Category
            </Text>
            <Pressable onPress={() => router.push("/(tabs)/menu")}>
              <Text style={{ fontSize: 13, color: COLORS.neutral, fontWeight: "500" }}>See All</Text>
            </Pressable>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            {categories.map((cat) => (
              <Pressable
                key={cat.id}
                onPress={() => router.push({ pathname: "/(tabs)/menu", params: { category: cat.id } })}
                style={{
                  alignItems: "center",
                  gap: 8,
                  width: (SCREEN_WIDTH - PADDING * 2 - 48) / 4,
                }}
              >
                <View
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: activeCategory === cat.id ? COLORS.brown : COLORS.cream,
                    borderWidth: 1.5,
                    borderColor: activeCategory === cat.id ? COLORS.brown : COLORS.border,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <cat.icon size={24} color={activeCategory === cat.id ? COLORS.white : COLORS.brown} />
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

        {/* ─── 6. FLASH SALE ─── */}
        <View style={{ marginBottom: 24, paddingHorizontal: PADDING }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "BricolageGrotesque_700Bold",
                color: COLORS.brown,
              }}
            >
              Flash Sale
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
              <Text style={{ fontSize: 12, color: COLORS.neutral }}>Closing in:</Text>
              <View style={{ flexDirection: "row", gap: 4 }}>
                {[pad(timer.hours), pad(timer.minutes), pad(timer.seconds)].map((t, i) => (
                  <React.Fragment key={i}>
                    <View style={{ backgroundColor: COLORS.cream, borderRadius: 6, paddingHorizontal: 6, paddingVertical: 3 }}>
                      <Text style={{ fontSize: 12, fontWeight: "700", color: COLORS.brown }}>{t}</Text>
                    </View>
                    {i < 2 && <Text style={{ fontSize: 12, color: COLORS.neutral, alignSelf: "center" }}>:</Text>}
                  </React.Fragment>
                ))}
              </View>
            </View>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 14 }}>
            <View style={{ flexDirection: "row", gap: 8 }}>
              {flashSaleFilters.map((filter) => (
                <Pressable
                  key={filter}
                  onPress={() => setActiveFlashFilter(filter)}
                  style={{
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                    borderRadius: 20,
                    backgroundColor: activeFlashFilter === filter ? COLORS.brown : COLORS.cream,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "600",
                      color: activeFlashFilter === filter ? COLORS.white : COLORS.neutral,
                    }}
                  >
                    {filter}
                  </Text>
                </Pressable>
              ))}
            </View>
          </ScrollView>

          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 14 }}>
            {flashSaleProducts.map((item) => (
              <Pressable
                key={item.id}
                onPress={() => router.push({ pathname: "/(stack)/product-details", params: { id: item.id, name: item.name, price: item.price, description: item.description || "", tag: item.tag || "", category: item.category } })}
                style={{
                  width: (SCREEN_WIDTH - PADDING * 2 - 14) / 2,
                  backgroundColor: COLORS.cream,
                  borderRadius: 18,
                  overflow: "hidden",
                }}
              >
                <View style={{ width: "100%", height: 140, backgroundColor: COLORS.coffeeBg }}>
                  <Image
                    source={item.category === "pastry" ? require("../../../assets/pastery.png") : item.category === "boba" ? require("../../../assets/boba.png") : item.category === "brunch" ? require("../../../assets/brunch.png") : require("../../../assets/mockup.png")}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="contain"
                  />
                  <Pressable
                    style={{ position: "absolute", top: 10, right: 10 }}
                    onPress={() => {}}
                  >
                    <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: COLORS.white, alignItems: "center", justifyContent: "center" }}>
                      <Heart size={14} color={COLORS.brown} />
                    </View>
                  </Pressable>
                  {item.tag ? (
                    <View style={{ position: "absolute", top: 10, left: 10, backgroundColor: item.tag === "Hot Pick" ? "#E53935" : item.tag === "Veggie" ? "#2E7D32" : "#43A047", borderRadius: 8, paddingHorizontal: 8, paddingVertical: 3 }}>
                      <Text style={{ fontSize: 9, fontWeight: "700", color: COLORS.white }}>{item.tag}</Text>
                    </View>
                  ) : null}
                </View>
                <View style={{ padding: 10 }}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: "BricolageGrotesque_700Bold",
                      color: COLORS.brown,
                      marginBottom: 4,
                    }}
                    numberOfLines={1}
                  >
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: 14, fontWeight: "800", color: COLORS.brown }}>
                    {item.price}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
