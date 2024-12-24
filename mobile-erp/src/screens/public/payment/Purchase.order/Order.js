import * as React from "react";
import { TouchableOpacity, Image, StyleSheet, Text, Dimensions, View } from "react-native";
import {Colors, units} from "../../../../core/theme";
function Item({ item, props }) {
  const gotoViewCustomer = (item) => {
    console.log('item',item)
  }
  return (
    <TouchableOpacity
      key={item}
      style={styles.itemThreeContainer}
      onPress={() => gotoViewCustomer(item)}
    >
      <View style={styles.itemThreeSubContainer}>
        <View style={styles.itemThreeContent}>
          <Text style={styles.itemThreeBrand}>Invoices {item.name}-{item.set_warehouse}</Text>
          <View>
            <Text style={styles.itemThreeTitle}>{item.total} {item.currency}  </Text>
            <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
              {item.supplier}  {item.supplier_group} { }
            </Text>
            <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
              {item.reference_date}
            </Text>
          </View>
          <View style={styles.itemThreeMetaContainer}>

            <View
              style={styles.badge}
            >
              <Text
                style={{ fontSize: 10, color: Colors.white }}
                styleName="bright"
              >
                {item.status}
              </Text>
            </View>

            <Text style={styles.itemThreePrice}>{item.due_date}</Text>
          </View>
        </View>
      </View>
      <View style={styles.itemThreeHr} />
    </TouchableOpacity>

  )

}


const styles = StyleSheet.create({
  itemThreeContainer: {
    backgroundColor: '#fff',
    width: units.width - 10,
    borderColor: Colors.primary,
    borderWidth: 2,
    margin: 4,
    borderRadius: 20
  },
  itemThreeSubContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  itemThreeImage: {
    height: 100,
    width: 100,
  },
  itemThreeContent: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'space-between',
  },
  itemThreeBrand: {
    fontSize: 14,
    color: Colors.blue,
    fontWeight: "bold"
  },
  itemThreeTitle: {
    fontSize: 16,
    color: '#5F5F5F',
  },
  itemThreeSubtitle: {
    fontSize: 15,
    color: '#a4a4a4',
  },
  itemThreeMetaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemThreePrice: {
    fontSize: 15,
    color: Colors.primary,
    textAlign: 'left',
    marginRight: 15

  },
  itemThreeHr: {
    flex: 1,
    height: 4,
  },
  badge: {
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignContent: "center"
  },
});
export default Item