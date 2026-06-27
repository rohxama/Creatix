import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Platform,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

const COLORS = {
  cream: "#F5EDE3",
  brown: "#3c2415",
  brownMid: "#5c3a24",
  coffeeBg: "#e8dac8",
  warmWhite: "#f7f0e6",
  white: "#ffffff",
  border: "#ddd0c0",
  neutral: "#7a6e63",
  neutralLight: "#a89e93",
};

export default function SignInScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.cream }}>
      <View style={{ position: "absolute", top: Platform.OS === "ios" ? 10 : 18, right: 20, zIndex: 10 }}>
        <Pressable
          onPress={() => router.push("/(tabs)")}
          style={{
            backgroundColor: COLORS.coffeeBg,
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 20,
          }}
        >
          <Text style={{ fontSize: 13, fontWeight: "600", color: COLORS.brown }}>Skip now</Text>
        </Pressable>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 28,
          paddingTop: Platform.OS === "ios" ? 80 : 60,
          paddingBottom: 40,
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontFamily: "Pacifico_400Regular",
            color: COLORS.brown,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Creatix
        </Text>

        <Text
          style={{
            fontSize:22,
            fontFamily: "BricolageGrotesque_700Bold",
            color: COLORS.brown,
            marginBottom: 22,
            marginTop: 30,
          }}
        >
          Sign In
        </Text>

        <Text
          style={{
            fontSize: 13,
            fontWeight: "600",
            color: COLORS.neutral,
            marginBottom: 8,
          }}
        >
          Your Email
        </Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email address"
          placeholderTextColor={COLORS.neutralLight}
          keyboardType="email-address"
          autoCapitalize="none"
          style={{
            backgroundColor: COLORS.warmWhite,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: COLORS.border,
            paddingHorizontal: 16,
            paddingVertical: Platform.OS === "ios" ? 14 : 12,
            fontSize: 14,
            color: COLORS.brown,
            marginBottom: 18,
          }}
        />

        <Text
          style={{
            fontSize: 13,
            fontWeight: "600",
            color: COLORS.neutral,
            marginBottom: 8,
          }}
        >
          Your Password
        </Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password"
          placeholderTextColor={COLORS.neutralLight}
          secureTextEntry
          style={{
            backgroundColor: COLORS.warmWhite,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: COLORS.border,
            paddingHorizontal: 16,
            paddingVertical: Platform.OS === "ios" ? 14 : 12,
            fontSize: 14,
            color: COLORS.brown,
            marginBottom: 32,
          }}
        />

        <Pressable
          onPress={() => router.push("/(tabs)")}
          style={{
            backgroundColor: COLORS.brown,
            paddingVertical: 16,
            borderRadius: 14,
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "BricolageGrotesque_700Bold",
              color: COLORS.white,
            }}
          >
            Sign In
          </Text>
        </Pressable>

        <Pressable onPress={() => router.push("/sign-up")}>
          <Text
            style={{
              fontSize: 13,
              color: COLORS.neutral,
              textAlign: "center",
            }}
          >
            Don't have an account?{" "}
            <Text style={{ fontWeight: "700", color: COLORS.brown }}>
              Sign Up
            </Text>
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
