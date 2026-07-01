import React from "react";
import {
  View,
  Text,
  Pressable,
  useWindowDimensions,
  Image,
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
  caramel: "#b07a4b",
  darkBg: "#2c1a0e",
};

export default function WelcomeScreen() {
  const router = useRouter();
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const imageSize = Math.min(SCREEN_WIDTH - 80, 280);
  const headingSize = SCREEN_WIDTH < 350 ? 52 : 70;
  const contentWidth = Math.min(SCREEN_WIDTH, 480);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.darkBg }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 20,
          maxWidth: 480,
          alignSelf: "center",
          width: "100%",
        }}
      >

        <Text
          style={{
            fontSize: headingSize,
            fontFamily: "Pacifico_400Regular",
            color: COLORS.white,
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
            width: imageSize,
            height: imageSize,
            marginBottom: 1,
          }}
          resizeMode="contain"
        />

        <Pressable
          onPress={() => router.push("/sign-in")}
          style={{
            width: Math.min(contentWidth - 40, 400),
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
