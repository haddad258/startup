import { Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Colors } from "../../../../core/theme";

export default function CustomButton({ label, onPress }) {

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: Colors.accent,
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: 16,
          color: "#fff",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
