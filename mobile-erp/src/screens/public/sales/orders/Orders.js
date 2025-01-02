import * as React from "react";
import { TouchableOpacity, Image, StyleSheet, Text, Dimensions, View } from "react-native";
import { Colors, units } from "../../../../core/theme";
import StatusBadge from "./Order.Details";

function Item({ item, props }) {
  const gotoViewCustomer = (item) => {
    console.log(item);
  };

  return (
    <TouchableOpacity
      key={item}
      style={styles.itemContainer}
      onPress={() => gotoViewCustomer(item)}
    >
      <View style={styles.contentContainer}>
        <View style={styles.itemContent}>
          <Text style={styles.itemBrand}>{item.name} - {item.set_warehouse}</Text>
          <View style={styles.itemDetails}>
            <Text style={styles.itemTitle}>{item.grand_total} {item.currency}</Text>
            <Text style={styles.itemSubtitle} numberOfLines={1}>
              {item.delivery_status}, {item.status}
            </Text>
            <Text style={styles.itemCustomer} numberOfLines={1}>
              {item.customer_name}
            </Text>
          </View>
        </View>

        <View style={styles.metaContainer}>
         <StatusBadge  order={item}  />
        </View>
      </View>

      <View style={styles.divider} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#FFF",
    margin: 8,
    borderRadius: 15,
    borderColor: Colors.info,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 3,
    overflow: "hidden",
  },
  contentContainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemContent: {
    flex: 1,
  },
  itemBrand: {
    fontSize: 14,
    color: Colors.blue,
    fontWeight: "700",
    marginBottom: 8,
  },
  itemDetails: {
    marginVertical: 8,
  },
  itemTitle: {
    fontSize: 13,
    color: "#4CAF50",
    fontWeight: "600",
    marginBottom: 5,
  },
  itemSubtitle: {
    fontSize: 12,
    color: "#757575",
    marginBottom: 3,
  },
  itemCustomer: {
    fontSize: 14,
    color: "#9E9E9E",
  },
  metaContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  badge: {
    backgroundColor: Colors.secondary,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 8,
    alignSelf: "flex-start",
  },
  badgeText: {
    fontSize: 12,
    color: Colors.white,
    fontWeight: "600",
  },
  itemDate: {
    fontSize: 14,
    color: Colors.primary,
  },
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 15,
  },
});

export default Item;
