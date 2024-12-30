import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function DetailedDisplayCard({ data, styles }) {
  const renderFlatlistItem = ({ item, index }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomColor: "grey",
          borderBottomWidth: 0.5,
          paddingVertical: height * 0.02, // 2% of screen height
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesome5
            name="bitcoin"
            size={24}
            color="orange"
            style={{ paddingRight: width * 0.03 }} // 3% of screen width
          />
          <Text
            style={{
              fontSize: 20,
            }}
          >
            {item.name}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            color: "grey",
          }}
        >
          {item.amount}
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderFlatlistItem}
      keyExtractor={(item, index) => `${item.name}${index}`}
      contentContainerStyle={{
        ...styles,
        backgroundColor: "#fff",
        borderRadius: width * 0.05, // 5% of screen width
        padding: height * 0.02, // 2% of screen height
      }}
    />
  );
}
