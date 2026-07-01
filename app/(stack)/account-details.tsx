import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Platform,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import { ArrowLeft, User, Mail, Phone, MapPin, Save } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const COLORS = {
  cream: "#F5EDE3",
  brown: "#3c2415",
  coffeeBg: "#e8dac8",
  warmWhite: "#f7f0e6",
  white: "#ffffff",
  border: "#ddd0c0",
  neutral: "#7a6e63",
  neutralLight: "#a89e93",
  sage: "#6b8f71",
};

export default function AccountDetailsScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [name, setName] = useState("Roma");
  const [email, setEmail] = useState("rohxama@gmail.com");
  const [phone, setPhone] = useState("+1 234 567 890");
  const [address, setAddress] = useState("308 Caterina Ranch");

  const handleSave = () => {
    router.back();
  };

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
              Account Details
            </Text>
            <View style={{ width: 24 }} />
          </View>
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          <View style={{ alignItems: "center", marginBottom: 30 }}>
            <View
              style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                backgroundColor: COLORS.coffeeBg,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 12,
              }}
            >
              <User size={32} color={COLORS.brown} />
            </View>
            <Text style={{ fontSize: 14, color: COLORS.neutral }}>Profile Photo</Text>
          </View>

          <View style={{ gap: 16 }}>
            <View>
              <Text style={{ fontSize: 13, fontWeight: "600", color: COLORS.neutral, marginBottom: 8 }}>Full Name</Text>
              <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: COLORS.warmWhite, borderRadius: 12, borderWidth: 1, borderColor: COLORS.border, paddingHorizontal: 14, gap: 12 }}>
                <User size={18} color={COLORS.neutralLight} />
                <TextInput
                  value={name}
                  onChangeText={setName}
                  placeholder="Enter your name"
                  placeholderTextColor={COLORS.neutralLight}
                  selectionColor={COLORS.brown}
                  style={{ flex: 1, paddingVertical: 14, fontSize: 14, color: COLORS.brown, outlineStyle: "none" as any }}
                />
              </View>
            </View>

            <View>
              <Text style={{ fontSize: 13, fontWeight: "600", color: COLORS.neutral, marginBottom: 8 }}>Email</Text>
              <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: COLORS.warmWhite, borderRadius: 12, borderWidth: 1, borderColor: COLORS.border, paddingHorizontal: 14, gap: 12 }}>
                <Mail size={18} color={COLORS.neutralLight} />
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Enter your email"
                  placeholderTextColor={COLORS.neutralLight}
                  selectionColor={COLORS.brown}
                  keyboardType="email-address"
                  style={{ flex: 1, paddingVertical: 14, fontSize: 14, color: COLORS.brown, outlineStyle: "none" as any }}
                />
              </View>
            </View>

            <View>
              <Text style={{ fontSize: 13, fontWeight: "600", color: COLORS.neutral, marginBottom: 8 }}>Phone</Text>
              <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: COLORS.warmWhite, borderRadius: 12, borderWidth: 1, borderColor: COLORS.border, paddingHorizontal: 14, gap: 12 }}>
                <Phone size={18} color={COLORS.neutralLight} />
                <TextInput
                  value={phone}
                  onChangeText={setPhone}
                  placeholder="Enter your phone"
                  placeholderTextColor={COLORS.neutralLight}
                  selectionColor={COLORS.brown}
                  keyboardType="phone-pad"
                  style={{ flex: 1, paddingVertical: 14, fontSize: 14, color: COLORS.brown, outlineStyle: "none" as any }}
                />
              </View>
            </View>

            <View>
              <Text style={{ fontSize: 13, fontWeight: "600", color: COLORS.neutral, marginBottom: 8 }}>Address</Text>
              <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: COLORS.warmWhite, borderRadius: 12, borderWidth: 1, borderColor: COLORS.border, paddingHorizontal: 14, gap: 12 }}>
                <MapPin size={18} color={COLORS.neutralLight} />
                <TextInput
                  value={address}
                  onChangeText={setAddress}
                  placeholder="Enter your address"
                  placeholderTextColor={COLORS.neutralLight}
                  selectionColor={COLORS.brown}
                  style={{ flex: 1, paddingVertical: 14, fontSize: 14, color: COLORS.brown, outlineStyle: "none" as any }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 16,
          paddingBottom: Platform.OS === "ios" ? 36 : 24,
          backgroundColor: COLORS.cream,
        }}
      >
        <Pressable
          onPress={handleSave}
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
          <Save size={18} color={COLORS.white} />
          <Text
            style={{
              fontSize: 15,
              fontFamily: "BricolageGrotesque_700Bold",
              color: COLORS.white,
            }}
          >
            Save Changes
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
