import React from "react";
import { View, Text, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "../../../core/theme";

const { width, height } = Dimensions.get("window");

export default function Displaycard({ data }) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: height * 0.02, // 2% of screen height
        borderRadius: width * 0.03, // 3% of screen width
        marginRight: width * 0.02, // 2% of screen width
      }}
    >
      <FontAwesome5
        name="bitcoin"
        size={32}
        color="orange"
        style={{ paddingBottom: 5 }}
      />
      <Text
        style={{ color: Colors.primary, fontSize: 18, fontWeight: "bold" }}
      >
        {data.amount}
      </Text>
      <Text style={{ color: "grey" }}>{data.text}</Text>
    </View>
  );
}
