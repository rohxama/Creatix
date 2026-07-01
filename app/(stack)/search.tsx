import React, { useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { ArrowLeft, Search } from "lucide-react-native";

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

const IMAGES: Record<string, any> = {
  coffee: require("../../assets/mockup.png"),
  pastry: require("../../assets/pastery.png"),
  boba: require("../../assets/boba.png"),
  brunch: require("../../assets/brunch.png"),
};

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

export default function SearchScreen() {
  const router = useRouter();
  const { query } = useLocalSearchParams<{ query?: string }>();

  const searchTerm = (query || "").trim().toLowerCase();

  const exactMatch = searchTerm
    ? allProducts.find((p) => p.name.toLowerCase() === searchTerm)
    : null;

  const results = searchTerm
    ? allProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm) &&
          p.name.toLowerCase() !== searchTerm
      )
    : [];

  useEffect(() => {
    if (exactMatch) {
      router.replace({
        pathname: "/(stack)/product-details",
        params: {
          id: exactMatch.id,
          name: exactMatch.name,
          price: exactMatch.price,
          description: exactMatch.description,
          tag: exactMatch.tag || "",
          category: exactMatch.category,
        },
      });
    }
  }, [exactMatch]);

  if (exactMatch) return null;

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
        <View style={{ maxWidth: 480, alignSelf: "center", width: "100%" }}>
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
          <View style={{ alignItems: "center", paddingTop: 80 }}>
            <View style={{ width: 120, height: 120, borderRadius: 60, backgroundColor: COLORS.coffeeBg, alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
              <Search size={40} color={COLORS.neutralLight} />
            </View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "BricolageGrotesque_700Bold",
                color: COLORS.brown,
                marginBottom: 6,
              }}
            >
              No results found
            </Text>
            <Text style={{ fontSize: 13, color: COLORS.neutral, textAlign: "center" }}>
              We couldn't find anything matching{"\n"}"{query}"
            </Text>
            <Pressable
              onPress={() => router.back()}
              style={{
                marginTop: 24,
                backgroundColor: COLORS.brown,
                paddingHorizontal: 24,
                paddingVertical: 12,
                borderRadius: 12,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "600", color: COLORS.white }}>Search again</Text>
            </Pressable>
          </View>
        ) : (
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 14 }}>
            {results.map((item) => {
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
        )}
        </View>
      </ScrollView>
    </View>
  );
}
