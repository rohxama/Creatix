import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Platform,
  Image,
  TextInput,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Search, Heart, Bell } from "lucide-react-native";

const COLORS = {
  cream: "#F5EDE3",
  brown: "#3c2415",
  brownMid: "#5c3a24",
  brownLight: "#8b6240",
  caramel: "#b07a4b",
  coffeeBg: "#e8dac8",
  warmWhite: "#f7f0e6",
  white: "#ffffff",
  border: "#ddd0c0",
  neutral: "#7a6e63",
  neutralLight: "#a89e93",
};

const IMAGES: Record<string, any> = {
  coffee: require("../../assets/mockup.png"),
  pastry: require("../../assets/pastery.png"),
  boba: require("../../assets/boba.png"),
  brunch: require("../../assets/brunch.png"),
};

const categories = [
  { id: "coffee", label: "Coffee" },
  { id: "pastry", label: "Pastry" },
  { id: "boba", label: "Boba" },
  { id: "brunch", label: "Brunch" },
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

export default function MenuTab() {
  const router = useRouter();
  const params = useLocalSearchParams<{ category?: string }>();
  const [activeCategory, setActiveCategory] = useState(params.category || "coffee");
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (params.category) {
      setActiveCategory(params.category);
    }
  }, [params.category]);

  const filtered = allProducts.filter((i) => i.category === activeCategory);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.cream }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: Platform.OS === "ios" ? 16 : 12,
          paddingHorizontal: 20,
          paddingBottom: 20,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Pacifico_400Regular",
              color: COLORS.brown,
            }}
          >
            Creatix
          </Text>
          <Image
            source={require("../../assets/logo.png")}
            style={{ width: 60, height: 60 }}
            resizeMode="contain"
          />
          <Pressable
            onPress={() => router.push("/(stack)/notifications")}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: COLORS.coffeeBg,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Bell size={18} color={COLORS.brown} />
          </Pressable>
        </View>

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

        {/* Search Bar */}
        <View style={{ marginBottom: 18, zIndex: 100 }}>
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
            <Search size={18} color={COLORS.neutralLight} />
            <TextInput
              value={searchText}
              onChangeText={(text) => { setSearchText(text); setShowSuggestions(true); }}
              placeholder=""
              placeholderTextColor={COLORS.neutralLight}
              selectionColor={COLORS.brown}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 300)}
              onSubmitEditing={() => {
                setShowSuggestions(false);
                if (searchText.trim()) {
                  router.push({ pathname: "/(stack)/search", params: { query: searchText.trim() } });
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
          {showSuggestions && searchText.trim().length > 0 ? (
            <View
              style={{
                position: "absolute",
                top: 50,
                left: 0,
                right: 0,
                backgroundColor: COLORS.cream,
                borderRadius: 12,
                maxHeight: 200,
                overflow: "hidden",
                zIndex: 200,
              }}
            >
              <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
                {allProducts
                  .filter((p) => p.name.toLowerCase().includes(searchText.trim().toLowerCase()))
                  .slice(0, 8)
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

        {/* Category Pills */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 8, marginBottom: 20 }}
        >
          {categories.map((cat) => (
            <Pressable
              key={cat.id}
              onPress={() => setActiveCategory(cat.id)}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 20,
                backgroundColor: activeCategory === cat.id ? COLORS.brown : COLORS.warmWhite,
                borderWidth: 1,
                borderColor: activeCategory === cat.id ? COLORS.brown : COLORS.border,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "600",
                  color: activeCategory === cat.id ? COLORS.white : COLORS.brown,
                }}
              >
                {cat.label}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Product Grid */}
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 14 }}>
          {filtered.map((item) => {
            const image = IMAGES[item.category] || IMAGES.coffee;
            return (
              <Pressable
                key={item.id}
                onPress={() =>
                  router.push({
                    pathname: "/(stack)/product-details",
                    params: { id: item.id, name: item.name, price: item.price, description: item.description, tag: item.tag || "", category: item.category },
                  })
                }
                style={{
                  width: "47%",
                  backgroundColor: COLORS.cream,
                  borderRadius: 18,
                  overflow: "hidden",
                }}
              >
                <View style={{ width: "100%", height: 130, backgroundColor: COLORS.coffeeBg }}>
                  <Image
                    source={image}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="contain"
                  />
                  <Pressable
                    style={{ position: "absolute", top: 10, right: 10 }}
                    onPress={() => {}}
                  >
                    <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: COLORS.white, alignItems: "center", justifyContent: "center" }}>
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
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
