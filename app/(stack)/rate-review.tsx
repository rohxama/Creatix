import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Platform,
  Image,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import { Star } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
  sage: "#6b8f71",
};

export default function RateReviewScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ maxWidth: 480, alignSelf: "center", width: "100%" }}>
      <View
        style={{
          width: "100%",
          height: 300,
          backgroundColor: COLORS.brown,
          alignItems: "center",
          justifyContent: "center",
          paddingTop: insets.top + 16,
        }}
      >
        <Text
          style={{
            fontSize: 26,
            fontFamily: "BricolageGrotesque_700Bold",
            color: COLORS.white,
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: 1,
            lineHeight: 32,
            marginBottom: 20,
          }}
        >
          Your Cappuccino{"\n"}On The Way
        </Text>
        <Image
          source={require("../../assets/mockup.png")}
          style={{ width: 140, height: 140 }}
          resizeMode="contain"
        />
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.cream,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          marginTop: -24,
          paddingHorizontal: 24,
          paddingTop: 28,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontFamily: "BricolageGrotesque_700Bold",
            color: COLORS.brown,
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          Rate Coffee & Delivery
        </Text>

        <View style={{ flexDirection: "row", justifyContent: "center", gap: 8, marginBottom: 24 }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Pressable key={star} onPress={() => setRating(star)}>
              <Star
                size={36}
                color={star <= rating ? COLORS.caramel : COLORS.border}
                fill={star <= rating ? COLORS.caramel : "none"}
              />
            </Pressable>
          ))}
        </View>

        <Text
          style={{
            fontSize: 14,
            fontFamily: "BricolageGrotesque_700Bold",
            color: COLORS.brown,
            marginBottom: 10,
          }}
        >
          Your Feedback
        </Text>
        <TextInput
          value={feedback}
          onChangeText={setFeedback}
          placeholder="How was your coffee? Does it arrive within the time frame on the app?"
          placeholderTextColor={COLORS.neutralLight}
          multiline
          numberOfLines={5}
          textAlignVertical="top"
          style={{
            backgroundColor: COLORS.warmWhite,
            borderRadius: 14,
            borderWidth: 1,
            borderColor: COLORS.border,
            padding: 16,
            fontSize: 13,
            color: COLORS.brown,
            minHeight: 120,
            marginBottom: 24,
          }}
        />

        <Pressable
          onPress={() => router.push("/(tabs)/orders")}
          style={{
            backgroundColor: COLORS.brown,
            paddingVertical: 16,
            borderRadius: 14,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontFamily: "BricolageGrotesque_700Bold",
              color: COLORS.white,
            }}
          >
            SUBMIT REVIEW
          </Text>
          <Text style={{ fontSize: 15, color: COLORS.white }}>·</Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: "BricolageGrotesque_700Bold",
              color: COLORS.white,
            }}
          >
            {rating}★
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/(tabs)/orders")}
          style={{ paddingVertical: 14, alignItems: "center" }}
        >
          <Text style={{ fontSize: 14, fontWeight: "600", color: COLORS.brown }}>
            Skip now &gt;
          </Text>
        </Pressable>
      </View>
      </View>
    </View>
  );
}
