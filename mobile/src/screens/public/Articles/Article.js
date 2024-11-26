import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Colors } from "../../../core/theme";

const ArticleItem = ({ item }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    console.log(item);
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: item.image }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.item_name}</Text>
          <Text style={styles.title}>{item.description}</Text>
          <Text style={styles.vegText}>{item.name}</Text>
          <Text style={styles.nonVegText}>{item.item_group}</Text>
          <Text style={styles.labelText}>{item.custom_unit_purchase_price} DZD</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>qty: {item.opening_stock} {item.stock_uom}</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.nonVegText}>++</Text>

        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent:"space-between",
    backgroundColor: "#ffffff",
    marginHorizontal: 24,
    marginVertical: 8,
    borderRadius: 4,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  image: {
    width: 90,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: Colors.primary
  },
  textContainer: {
    padding: 16
  },
  title: {
    fontSize: 18,
    color: "#333"
  },
  cuisineText: {
    fontSize: 14,
    color: "#666"
  },
  vegText: {
    color: "#4caf50",
    fontWeight: "bold"
  },
  nonVegText: {
    color: "#a92319",
    fontWeight: "bold"
  },
  labelText: {
    fontSize: 14,
    color: "#999"
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  priceText: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.primary
  }
});

export default ArticleItem;
