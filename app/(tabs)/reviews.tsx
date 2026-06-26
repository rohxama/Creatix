import React from "react";
import { View, ScrollView, Pressable, Text, Platform } from "react-native";
import { Star, ThumbsUp } from "lucide-react-native";

const COLORS = {
  cream: "#fdf8f3",
  brown: "#6b341a",
  caramel: "#c8641c",
  caramelLight: "#df9748",
  coffee: "#bc7a3f",
  coffeeLight: "#d5ae80",
  coffeeBg: "#f2e8d9",
  neutral: "#78716c",
  neutralLight: "#a8a29e",
  warmWhite: "#fefcf7",
  border: "#f2e8d9",
  sage: "#5a7d5a",
  sageLight: "#e4ebe4",
};

const allReviews = [
  {
    id: "1",
    name: "Sarah M.",
    rating: 5,
    text: "The best caramel latte I've ever had. The atmosphere is so warm and inviting!",
    time: "2 days ago",
    helpful: 12,
  },
  {
    id: "2",
    name: "James K.",
    rating: 5,
    text: "Perfect morning spot. Their croissants are freshly baked and absolutely divine.",
    time: "1 week ago",
    helpful: 8,
  },
  {
    id: "3",
    name: "Emily R.",
    rating: 4,
    text: "Love the cozy vibes here. The staff is incredibly friendly and the coffee is top notch.",
    time: "2 weeks ago",
    helpful: 15,
  },
  {
    id: "4",
    name: "Michael T.",
    rating: 5,
    text: "My new go-to café. The lavender honey latte is incredible. Must try!",
    time: "3 weeks ago",
    helpful: 6,
  },
  {
    id: "5",
    name: "Olivia P.",
    rating: 5,
    text: "Beautiful interior, amazing coffee, and the pastries are to die for. 10/10.",
    time: "1 month ago",
    helpful: 20,
  },
];

export default function ReviewsTab() {
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
        <Text
          style={{
            fontSize: 28,
            fontWeight: "800",
            color: COLORS.brown,
            marginBottom: 6,
            letterSpacing: -0.5,
          }}
        >
          Reviews
        </Text>
        <Text style={{ fontSize: 14, color: COLORS.neutral, marginBottom: 24 }}>
          What our customers are saying
        </Text>

        <View style={{ gap: 14 }}>
          {allReviews.map((review) => (
            <View
              key={review.id}
              style={{
                borderRadius: 20,
                backgroundColor: COLORS.warmWhite,
                borderWidth: 1,
                borderColor: COLORS.border,
                padding: 20,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <View
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 22,
                    backgroundColor: COLORS.coffeeBg,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 17, fontWeight: "700", color: COLORS.brown }}>
                    {review.name.charAt(0)}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15, fontWeight: "700", color: COLORS.brown }}>
                    {review.name}
                  </Text>
                  <Text style={{ fontSize: 12, color: COLORS.neutralLight, marginTop: 1 }}>
                    {review.time}
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: "row", gap: 2, marginBottom: 10 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    color={i < review.rating ? COLORS.caramelLight : COLORS.neutralLight}
                    fill={i < review.rating ? COLORS.caramelLight : "transparent"}
                  />
                ))}
              </View>

              <Text style={{ fontSize: 14, lineHeight: 21, color: COLORS.neutral, marginBottom: 12 }}>
                "{review.text}"
              </Text>

              <Pressable
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                <ThumbsUp size={14} color={COLORS.neutralLight} />
                <Text style={{ fontSize: 12, color: COLORS.neutralLight }}>
                  Helpful ({review.helpful})
                </Text>
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
