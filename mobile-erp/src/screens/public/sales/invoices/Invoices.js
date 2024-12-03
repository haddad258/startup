import * as React from "react";
import { TouchableOpacity, Image, StyleSheet, Text, Dimensions, View } from "react-native";
import {Colors} from "../../../../core/theme";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function Item({ item, props }) {
  const gotoViewCustomer = (item) => {
    console.log(item)
  }
  return (
    <TouchableOpacity
      key={item}
      style={styles.itemThreeContainer}
      onPress={() => gotoViewCustomer(item)}
    >
      <View style={styles.itemThreeSubContainer}>
        <View style={styles.itemThreeContent}>
          <Text style={styles.itemThreeBrand}>{item.name}-{item.set_warehouse}</Text>
          <View>
            <Text style={styles.itemThreeTitle}>{item.total}  </Text>
            <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
              {item.company_address_display}  {item.city} { }
            </Text>
            <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
              {item.customer_name}
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
    backgroundColor: 'white',
    width: windowWidth - 10,
    // height: windowHeight / 6
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