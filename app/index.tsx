import React from "react";
import {
  View,
  Text,
  Pressable,
  Dimensions,
  Platform,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const COLORS = {
  cream: "#F5EDE3",
  brown: "#3c2415",
  brownMid: "#5c3a24",
  coffeeBg: "#e8dac8",
  warmWhite: "#f7f0e6",
  white: "#ffffff",
  border: "#ddd0c0",
  neutral: "#7a6e63",
  caramel: "#b07a4b",
};

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.cream }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 20,
        }}
      >
        

        <Text
          style={{
            fontSize: 70,
            fontFamily: "Pacifico_400Regular",
            color: COLORS.brown,
            letterSpacing: -0.5,
          }}
        >
          Creatix
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Pacifico_400Regular",
            color: COLORS.caramel,
            marginBottom: 20,
          }}
        >
          Sip. Savor. Smile.
        </Text>

        <Image
          source={require("../assets/home-banner-img.png")}
          style={{
            width: 280,
            height: 280,
            marginBottom: 1,
          }}
          resizeMode="contain"
        />

        <Pressable
          onPress={() => router.push("/sign-in")}
          style={{
            width: "100%",
            backgroundColor: COLORS.brown,
            paddingVertical: 16,
            borderRadius: 14,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "BricolageGrotesque_700Bold",
              color: COLORS.white,
            }}
          >
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
