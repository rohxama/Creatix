import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { ArrowLeft, ChevronDown, ChevronUp, MessageCircle, Mail, Phone } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const COLORS = {
  cream: "#F5EDE3",
  brown: "#3c2415",
  coffeeBg: "#e8dac8",
  warmWhite: "#f7f0e6",
  white: "#ffffff",
  border: "#ddd0c0",
  neutral: "#7a6e63",
  sage: "#6b8f71",
};

const faqs = [
  {
    question: "How do I track my order?",
    answer: "Go to Orders tab and tap on your active order. You'll see real-time tracking of your order from brewing to delivery.",
  },
  {
    question: "Can I cancel my order?",
    answer: "You can cancel your order within 2 minutes of placing it. After that, the preparation has already started.",
  },
  {
    question: "How does delivery work?",
    answer: "We offer free delivery within 2 miles. Orders are delivered by our in-house team within 10-15 minutes.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept credit/debit cards, PayPal, UPI, and cash on delivery.",
  },
  {
    question: "How do I change my delivery address?",
    answer: "Go to Cart > Change Address, or add a new address in the Choose Cafe screen.",
  },
  {
    question: "What are your working hours?",
    answer: "We're open from 7:00 AM to 10:00 PM, Monday through Sunday.",
  },
];

export default function HelpCenterScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.cream }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View
          style={{
            paddingTop: insets.top + 16,
            paddingHorizontal: 20,
            marginBottom: 24,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable onPress={() => router.back()}>
              <ArrowLeft size={24} color={COLORS.brown} />
            </Pressable>
            <Text
              style={{
                flex: 1,
                textAlign: "center",
                fontSize: 18,
                fontFamily: "BricolageGrotesque_700Bold",
                color: COLORS.brown,
              }}
            >
              Help Center
            </Text>
            <View style={{ width: 24 }} />
          </View>
        </View>

        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          <Text style={{ fontSize: 13, fontWeight: "600", color: COLORS.neutral, marginBottom: 10, textTransform: "uppercase", letterSpacing: 0.5 }}>
            Frequently Asked Questions
          </Text>
          <View
            style={{
              backgroundColor: COLORS.warmWhite,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: COLORS.border,
              overflow: "hidden",
            }}
          >
            {faqs.map((faq, idx) => {
              const isExpanded = expandedIdx === idx;
              return (
                <View
                  key={idx}
                  style={{
                    borderBottomWidth: idx < faqs.length - 1 ? 1 : 0,
                    borderBottomColor: COLORS.border,
                  }}
                >
                  <Pressable
                    onPress={() => setExpandedIdx(isExpanded ? null : idx)}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 16,
                      gap: 12,
                    }}
                  >
                    <Text style={{ flex: 1, fontSize: 14, fontWeight: "600", color: COLORS.brown }}>{faq.question}</Text>
                    {isExpanded ? <ChevronUp size={18} color={COLORS.neutral} /> : <ChevronDown size={18} color={COLORS.neutral} />}
                  </Pressable>
                  {isExpanded && (
                    <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
                      <Text style={{ fontSize: 13, color: COLORS.neutral, lineHeight: 20 }}>{faq.answer}</Text>
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 13, fontWeight: "600", color: COLORS.neutral, marginBottom: 10, textTransform: "uppercase", letterSpacing: 0.5 }}>
            Contact Support
          </Text>
          <View style={{ gap: 10 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: COLORS.warmWhite,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: COLORS.border,
                padding: 16,
                gap: 14,
              }}
            >
              <View style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: COLORS.coffeeBg, alignItems: "center", justifyContent: "center" }}>
                <MessageCircle size={18} color={COLORS.brown} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, fontWeight: "600", color: COLORS.brown }}>Live Chat</Text>
                <Text style={{ fontSize: 12, color: COLORS.neutral, marginTop: 2 }}>Available 7am - 10pm</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: COLORS.warmWhite,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: COLORS.border,
                padding: 16,
                gap: 14,
              }}
            >
              <View style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: COLORS.coffeeBg, alignItems: "center", justifyContent: "center" }}>
                <Mail size={18} color={COLORS.brown} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, fontWeight: "600", color: COLORS.brown }}>Email</Text>
                <Text style={{ fontSize: 12, color: COLORS.neutral, marginTop: 2 }}>support@crea.com</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: COLORS.warmWhite,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: COLORS.border,
                padding: 16,
                gap: 14,
              }}
            >
              <View style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: COLORS.coffeeBg, alignItems: "center", justifyContent: "center" }}>
                <Phone size={18} color={COLORS.brown} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, fontWeight: "600", color: COLORS.brown }}>Phone</Text>
                <Text style={{ fontSize: 12, color: COLORS.neutral, marginTop: 2 }}>+1 (555) 123-4567</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
