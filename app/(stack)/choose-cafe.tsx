import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Platform,
  TextInput,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { ArrowLeft, MapPin, Plus, Check } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const COLORS = {
  cream: "#F5EDE3",
  brown: "#3c2415",
  brownLight: "#8b6240",
  coffeeBg: "#e8dac8",
  warmWhite: "#f7f0e6",
  white: "#ffffff",
  border: "#ddd0c0",
  neutral: "#7a6e63",
  neutralLight: "#a89e93",
  sage: "#6b8f71",
};

const initialAddresses = [
  { id: "1", name: "Creatix Cafe", distance: "0.3 miles away", address: "123 Coffee Lane, Coffeeville" },
  { id: "2", name: "Creatix Downtown", distance: "1.2 miles away", address: "456 Main St, Downtown" },
  { id: "3", name: "Creatix Park", distance: "2.5 miles away", address: "789 Park Ave, Uptown" },
];

export default function ChooseCafeScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [addresses, setAddresses] = useState(initialAddresses);
  const [selectedId, setSelectedId] = useState("1");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newAddress, setNewAddress] = useState("");

  const filtered = addresses.filter(
    (a) =>
      a.name.toLowerCase().includes(searchText.toLowerCase()) ||
      a.address.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAddAddress = () => {
    if (!newName.trim() || !newAddress.trim()) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    const newId = String(addresses.length + 1);
    const newItem = {
      id: newId,
      name: newName.trim(),
      distance: "0.0 miles away",
      address: newAddress.trim(),
    };
    setAddresses([...addresses, newItem]);
    setSelectedId(newId);
    setNewName("");
    setNewAddress("");
    setShowAddForm(false);
  };

  const handleSave = () => {
    const selected = addresses.find((a) => a.id === selectedId);
    if (selected) {
      Alert.alert("Saved", `${selected.name} has been saved as your delivery address`);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.cream }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ maxWidth: 480, alignSelf: "center", width: "100%" }}>
        <View
          style={{
            paddingTop: insets.top + 16,
            paddingHorizontal: 20,
            marginBottom: 16,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
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
              Choose your cafe
            </Text>
            <View style={{ width: 24 }} />
          </View>
        </View>

        {/* Search Bar */}
        <View style={{ paddingHorizontal: 20, marginBottom: 16 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: COLORS.warmWhite,
              borderRadius: 12,
              paddingHorizontal: 14,
              paddingVertical: Platform.OS === "ios" ? 12 : 10,
              gap: 10,
            }}
          >
            <MapPin size={18} color={COLORS.neutralLight} />
            <TextInput
              value={searchText}
              onChangeText={setSearchText}
              placeholder="Enter your address"
              placeholderTextColor={COLORS.neutralLight}
              selectionColor={COLORS.brown}
              style={{ flex: 1, fontSize: 14, color: COLORS.brown, padding: 0, outlineStyle: "none" as any }}
            />
          </View>
        </View>

        {/* Map View */}
        <View
          style={{
            height: 180,
            marginHorizontal: 20,
            borderRadius: 16,
            backgroundColor: COLORS.coffeeBg,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
            overflow: "hidden",
          }}
        >
          <MapPin size={32} color={COLORS.brown} />
          <Text style={{ fontSize: 13, color: COLORS.neutral, marginTop: 8, fontWeight: "600" }}>
            {addresses.find((a) => a.id === selectedId)?.name || "Select a location"}
          </Text>
          <Text style={{ fontSize: 11, color: COLORS.neutralLight, marginTop: 2 }}>
            {addresses.find((a) => a.id === selectedId)?.address || ""}
          </Text>
          <Pressable
            style={{
              position: "absolute",
              bottom: 10,
              right: 10,
              backgroundColor: COLORS.brown,
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 11, fontWeight: "600", color: COLORS.white }}>Open Map</Text>
          </Pressable>
        </View>

        {/* Address List */}
        <View style={{ paddingHorizontal: 20, gap: 10 }}>
          {filtered.map((cafe) => {
            const isSelected = cafe.id === selectedId;
            return (
              <Pressable
                key={cafe.id}
                onPress={() => setSelectedId(cafe.id)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: isSelected ? COLORS.brown : COLORS.warmWhite,
                  borderRadius: 14,
                  borderWidth: 1,
                  borderColor: isSelected ? COLORS.brown : COLORS.border,
                  padding: 16,
                  gap: 14,
                }}
              >
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    backgroundColor: isSelected ? "rgba(255,255,255,0.2)" : COLORS.coffeeBg,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {isSelected ? (
                    <Check size={18} color={COLORS.white} />
                  ) : (
                    <MapPin size={18} color={COLORS.brown} />
                  )}
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 14, fontFamily: "BricolageGrotesque_700Bold", color: isSelected ? COLORS.white : COLORS.brown }}>
                    {cafe.name}
                  </Text>
                  <Text style={{ fontSize: 12, color: isSelected ? "rgba(255,255,255,0.7)" : COLORS.neutral, marginTop: 2 }}>
                    {cafe.distance}
                  </Text>
                  <Text style={{ fontSize: 11, color: isSelected ? "rgba(255,255,255,0.5)" : COLORS.neutralLight, marginTop: 1 }}>
                    {cafe.address}
                  </Text>
                </View>
              </Pressable>
            );
          })}

          {/* Add New Address */}
          {showAddForm ? (
            <View style={{ backgroundColor: COLORS.warmWhite, borderRadius: 14, borderWidth: 1, borderColor: COLORS.border, padding: 16, gap: 10 }}>
              <Text style={{ fontSize: 14, fontFamily: "BricolageGrotesque_700Bold", color: COLORS.brown, marginBottom: 4 }}>New Address</Text>
              <TextInput
                value={newName}
                onChangeText={setNewName}
                placeholder="Address name (e.g. Home)"
                placeholderTextColor={COLORS.neutralLight}
                selectionColor={COLORS.brown}
                style={{ backgroundColor: COLORS.cream, borderRadius: 10, paddingHorizontal: 14, paddingVertical: 10, fontSize: 14, color: COLORS.brown, outlineStyle: "none" as any }}
              />
              <TextInput
                value={newAddress}
                onChangeText={setNewAddress}
                placeholder="Full address"
                placeholderTextColor={COLORS.neutralLight}
                selectionColor={COLORS.brown}
                style={{ backgroundColor: COLORS.cream, borderRadius: 10, paddingHorizontal: 14, paddingVertical: 10, fontSize: 14, color: COLORS.brown, outlineStyle: "none" as any }}
              />
              <View style={{ flexDirection: "row", gap: 10, marginTop: 4 }}>
                <Pressable
                  onPress={() => { setShowAddForm(false); setNewName(""); setNewAddress(""); }}
                  style={{ flex: 1, paddingVertical: 10, borderRadius: 10, borderWidth: 1, borderColor: COLORS.border, alignItems: "center" }}
                >
                  <Text style={{ fontSize: 13, fontWeight: "600", color: COLORS.neutral }}>Cancel</Text>
                </Pressable>
                <Pressable
                  onPress={handleAddAddress}
                  style={{ flex: 1, paddingVertical: 10, borderRadius: 10, backgroundColor: COLORS.brown, alignItems: "center" }}
                >
                  <Text style={{ fontSize: 13, fontWeight: "600", color: COLORS.white }}>Add</Text>
                </Pressable>
              </View>
            </View>
          ) : (
            <Pressable
              onPress={() => setShowAddForm(true)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: COLORS.warmWhite,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: COLORS.border,
                borderStyle: "dashed",
                padding: 16,
                gap: 14,
              }}
            >
              <View style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: COLORS.coffeeBg, alignItems: "center", justifyContent: "center" }}>
                <Plus size={18} color={COLORS.brown} />
              </View>
              <Text style={{ fontSize: 14, fontWeight: "600", color: COLORS.brown }}>Add new address</Text>
            </Pressable>
          )}
        </View>
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 16,
          paddingBottom: Platform.OS === "ios" ? 36 : 24,
          backgroundColor: COLORS.cream,
          flexDirection: "row",
          gap: 12,
        }}
      >
        <Pressable
          onPress={handleSave}
          style={{
            flex: 1,
            paddingVertical: 14,
            borderRadius: 14,
            borderWidth: 1,
            borderColor: COLORS.brown,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "700", color: COLORS.brown }}>Save</Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("/(stack)/payment")}
          style={{
            flex: 1,
            paddingVertical: 14,
            borderRadius: 14,
            backgroundColor: COLORS.brown,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "700", color: COLORS.white }}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
}
