import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Colors } from "../../../../core/theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ArticleItem = ({ item }) => {
  const handleClick = () => {
    console.log(item);
  };

  return (
    <TouchableOpacity onPress={handleClick} style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.title}>{item.item_name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.row}>
          <Text style={styles.stock}>{item.opening_stock} {item.stock_uom}</Text>
          <Text style={styles.price}>{item.custom_unit_purchase_price} DZD</Text>
        </View>
        <Text style={styles.group}>{item.item_group}</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialCommunityIcons name="plus-circle" size={24} color={Colors.primary} />
            <Text style={styles.actionText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { height: 1, width: 1 },
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginVertical: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  stock: {
    fontSize: 14,
    color: "#4caf50",
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.primary,
  },
  group: {
    fontSize: 13,
    color: "#999",
    marginTop: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 8,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f4f4f9",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  actionText: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.primary,
    marginLeft: 4,
  },
});

export default ArticleItem;
