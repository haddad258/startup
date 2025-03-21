import React, { useContext } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Colors } from "../../../../core/theme";

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) {

  return (
    <View
      style={{
        flexDirection: "row",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}
    >
      {icon}
      {inputType == "password" ? (
        <TextInput
          placeholderTextColor={Colors.text}
          placeholder={label}
          keyboardAppearance={Colors.primary}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0, color: Colors.tint }}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
          placeholderTextColor={Colors.text}
          placeholder={label}
          keyboardAppearance={Colors.primary}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0, color: Colors.tint }}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{ color: Colors.accent, fontWeight: "700" }}>
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
