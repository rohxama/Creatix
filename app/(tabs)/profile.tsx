import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Platform,
  Image,
  Alert,
  TextInput,
  Modal,
} from "react-native";
import { useRouter } from "expo-router";
import { ChevronRight, LogOut, Camera, X } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const COLORS = {
  cream: "#F5EDE3",
  brown: "#3c2415",
  coffeeBg: "#e8dac8",
  warmWhite: "#f7f0e6",
  white: "#ffffff",
  border: "#ddd0c0",
  neutral: "#7a6e63",
  red: "#c0392b",
};

export default function ProfileTab() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [name, setName] = useState("Roma");
  const [showNameModal, setShowNameModal] = useState(false);
  const [editName, setEditName] = useState(name);

  const handlePress = (label: string) => {
    switch (label) {
      case "Account Details":
        router.push("/(stack)/account-details");
        break;
      case "Payment Methods":
        router.push("/(stack)/payment");
        break;
      case "Order History":
        router.push("/(tabs)/orders");
        break;
      case "Notification Settings":
        router.push("/(stack)/notification-settings");
        break;
      case "Help Center":
        router.push("/(stack)/help-center");
        break;
      case "Terms & Conditions":
        router.push("/(stack)/terms-conditions");
        break;
    }
  };

  const handleSaveName = () => {
    if (editName.trim()) {
      setName(editName.trim());
      setShowNameModal(false);
    }
  };

  const handleChangeImage = () => {
    Alert.alert("Change Profile Photo", "Choose an option", [
      { text: "Take Photo", onPress: () => Alert.alert("Camera", "Camera feature coming soon") },
      { text: "Choose from Library", onPress: () => Alert.alert("Gallery", "Gallery feature coming soon") },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: insets.top + 16,
          paddingHorizontal: 20,
          paddingBottom: 40,
        }}
      >
        <View style={{ maxWidth: 480, alignSelf: "center", width: "100%" }}>
        <View style={{ alignItems: "center", marginBottom: 28 }}>
          <View style={{ position: "relative", marginBottom: 12 }}>
            <View
              style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                backgroundColor: COLORS.coffeeBg,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../assets/mockup.png")}
                style={{ width: 50, height: 50 }}
                resizeMode="contain"
              />
            </View>
            <Pressable
              onPress={handleChangeImage}
              hitSlop={12}
              style={{
                position: "absolute",
                bottom: 0,
                right: -4,
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: COLORS.brown,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 2,
                borderColor: COLORS.cream,
              }}
            >
              <Camera size={12} color={COLORS.white} />
            </Pressable>
          </View>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "BricolageGrotesque_700Bold",
              color: COLORS.brown,
            }}
          >
            {name}
          </Text>
          <Pressable onPress={() => { setEditName(name); setShowNameModal(true); }}>
            <Text style={{ fontSize: 13, color: COLORS.neutral, marginTop: 4 }}>Edit profile</Text>
          </Pressable>
        </View>

        {[
          {
            title: "Account",
            items: [
              { icon: "👤", label: "Account Details" },
              { icon: "💳", label: "Payment Methods" },
            ],
          },
          {
            title: "Orders",
            items: [
              { icon: "📋", label: "Order History" },
              { icon: "🔔", label: "Notification Settings" },
            ],
          },
          {
            title: "Preferences",
            items: [
              { icon: "❓", label: "Help Center" },
              { icon: "📄", label: "Terms & Conditions" },
            ],
          },
        ].map((section) => (
          <View key={section.title} style={{ marginBottom: 20 }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "600",
                color: COLORS.neutral,
                marginBottom: 10,
                textTransform: "uppercase",
                letterSpacing: 0.5,
              }}
            >
              {section.title}
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
              {section.items.map((item, idx) => (
                <Pressable
                  key={item.label}
                  onPress={() => handlePress(item.label)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 16,
                    borderBottomWidth: idx < section.items.length - 1 ? 1 : 0,
                    borderBottomColor: COLORS.border,
                    gap: 14,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>{item.icon}</Text>
                  <Text
                    style={{
                      flex: 1,
                      fontSize: 14,
                      fontWeight: "600",
                      color: COLORS.brown,
                    }}
                  >
                    {item.label}
                  </Text>
                  <ChevronRight size={18} color={COLORS.neutral} />
                </Pressable>
              ))}
            </View>
          </View>
        ))}

        <Pressable
          onPress={() => {
            Alert.alert("Log Out", "Are you sure you want to log out?", [
              { text: "Cancel", style: "cancel" },
              { text: "Log Out", style: "destructive", onPress: () => router.replace("/(tabs)") },
            ]);
          }}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(192,57,43,0.1)",
            borderRadius: 14,
            borderWidth: 1,
            borderColor: COLORS.red,
            paddingVertical: 14,
            gap: 8,
            marginTop: 8,
          }}
        >
          <LogOut size={18} color={COLORS.red} />
          <Text
            style={{
              fontSize: 14,
              fontWeight: "700",
              color: COLORS.red,
            }}
          >
            Log Out
          </Text>
        </Pressable>
        </View>
      </ScrollView>

      <Modal visible={showNameModal} transparent animationType="fade">
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.4)", justifyContent: "center", alignItems: "center", paddingHorizontal: 20 }}>
          <View style={{ backgroundColor: COLORS.white, borderRadius: 20, padding: 24, width: "100%", maxWidth: 340 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <Text style={{ fontSize: 18, fontFamily: "BricolageGrotesque_700Bold", color: COLORS.brown }}>Edit Name</Text>
              <Pressable onPress={() => setShowNameModal(false)}>
                <X size={20} color={COLORS.neutral} />
              </Pressable>
            </View>
            <TextInput
              value={editName}
              onChangeText={setEditName}
              placeholder="Enter your name"
              placeholderTextColor={COLORS.neutral}
              selectionColor={COLORS.brown}
              style={{
                backgroundColor: COLORS.cream,
                borderRadius: 12,
                paddingHorizontal: 16,
                paddingVertical: 14,
                fontSize: 15,
                color: COLORS.brown,
                marginBottom: 20,
              }}
            />
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Pressable
                onPress={() => setShowNameModal(false)}
                style={{
                  flex: 1,
                  paddingVertical: 12,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: COLORS.border,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 14, fontWeight: "600", color: COLORS.neutral }}>Cancel</Text>
              </Pressable>
              <Pressable
                onPress={handleSaveName}
                style={{
                  flex: 1,
                  paddingVertical: 12,
                  borderRadius: 12,
                  backgroundColor: COLORS.brown,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 14, fontWeight: "600", color: COLORS.white }}>Save</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
