import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from 'react-redux';
import { addToCartMultiple } from '../../../../store/cart/actions';
import { units } from "../../../../core/theme";

const ArticleItem = ({ item }) => {
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(addToCartMultiple(item.name, item, 1));
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.item_name}</Text>
        <Text style={styles.price}>{item.price_list_rate} {item.currency}</Text>
      </View>
      <Text style={styles.description}>{item.item_description}</Text>
      <View style={styles.footer}>
        <Text style={styles.stock}>
          Stock: {item.opening_stock}
        </Text>
        <TouchableOpacity onPress={handleClick} style={styles.addButton}>
          <MaterialCommunityIcons name="plus" size={20} color="#fff" />
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width:units.width*0.48,
    margin: 6,
    marginVertical: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { height: 2, width: 0 },
    elevation: 3,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3559E0", // Secondary color
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 12,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  stock: {
    fontSize: 14,
    color: "#4caf50",
    fontWeight: "600",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3559E0", // Secondary color
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 8,
  },
});

export default ArticleItem;
