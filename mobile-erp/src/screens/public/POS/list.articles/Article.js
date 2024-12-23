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
import { useDispatch } from 'react-redux';
import { addToCartMultiple } from '../../../../store/cart/actions';

const ArticleItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log(item);
     dispatch(addToCartMultiple(item.name, item, 1));
  };

  return (
    <View  style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.title}>{item.item_name}</Text>
        <Text style={styles.description}>{item.item_description}</Text>
        <View style={styles.row}>
          <Text style={styles.stock}>{item.opening_stock} {item.item_description}</Text>
          <Text style={styles.price}>{item.price_list_rate} {item.currency}</Text>
        </View>
        <Text style={styles.group}>{item.price_list}</Text>
        <View style={styles.actions}>
          <TouchableOpacity onPress={()=>handleClick(item)}  style={styles.actionButton}>
            <MaterialCommunityIcons name="plus-circle" size={24} color={Colors.primary} />
            <Text style={styles.actionText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
