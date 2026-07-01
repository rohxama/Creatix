import React from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";

const COLORS = {
  cream: "#F5EDE3",
  brown: "#3c2415",
  coffeeBg: "#e8dac8",
  warmWhite: "#f7f0e6",
  white: "#ffffff",
  border: "#ddd0c0",
  neutral: "#7a6e63",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: "By accessing and using the Creatix Cafe mobile application, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our application.",
  },
  {
    title: "2. Account Registration",
    content: "You must be at least 18 years old to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
  },
  {
    title: "3. Orders and Payments",
    content: "All orders are subject to availability. Prices are subject to change without notice. We accept payment via credit/debit cards, PayPal, and UPI. Payment is charged at the time of order placement.",
  },
  {
    title: "4. Delivery Policy",
    content: "We offer free delivery within 2 miles of our cafe locations. Estimated delivery times are approximate and may vary based on demand and weather conditions. Risk of loss and title for items pass to you upon delivery.",
  },
  {
    title: "5. Cancellation and Refunds",
    content: "Orders may be cancelled within 2 minutes of placement. Refunds for cancelled orders will be processed within 3-5 business days. Contact support for any order-related issues.",
  },
  {
    title: "6. Privacy Policy",
    content: "Your use of our application is also governed by our Privacy Policy. We collect and process personal data in accordance with applicable data protection laws. Your data is used solely to provide and improve our services.",
  },
  {
    title: "7. Intellectual Property",
    content: "All content on this application, including logos, designs, text, and graphics, is the property of Creatix Cafe and is protected by copyright and trademark laws. You may not reproduce or distribute any content without prior written consent.",
  },
  {
    title: "8. Limitation of Liability",
    content: "Creatix Cafe shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the application. Our total liability shall not exceed the amount paid by you for the order in question.",
  },
  {
    title: "9. Changes to Terms",
    content: "We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting in the application. Your continued use of the app constitutes acceptance of the modified terms.",
  },
  {
    title: "10. Contact Us",
    content: "If you have any questions about these Terms and Conditions, please contact us at support@crea.com or call +1 (555) 123-4567.",
  },
];

export default function TermsConditionsScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.cream }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View
          style={{
            paddingTop: Platform.OS === "ios" ? 56 : 44,
            paddingHorizontal: 20,
            marginBottom: 24,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <Pressable onPress={() => router.back()} style={{ position: "absolute", left: 0 }}>
              <ArrowLeft size={24} color={COLORS.brown} />
            </Pressable>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "BricolageGrotesque_700Bold",
                color: COLORS.brown,
              }}
            >
              Terms & Conditions
            </Text>
          </View>
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 12, color: COLORS.neutral, marginBottom: 20 }}>Last updated: July 2025</Text>

          <View
            style={{
              backgroundColor: COLORS.warmWhite,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: COLORS.border,
              padding: 18,
            }}
          >
            {sections.map((section, idx) => (
              <View key={idx} style={{ marginBottom: idx < sections.length - 1 ? 20 : 0 }}>
                <Text style={{ fontSize: 14, fontFamily: "BricolageGrotesque_700Bold", color: COLORS.brown, marginBottom: 6 }}>
                  {section.title}
                </Text>
                <Text style={{ fontSize: 13, color: COLORS.neutral, lineHeight: 20 }}>
                  {section.content}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
