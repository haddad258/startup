import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
  View
} from "react-native";
import { Colors } from "../../../../core/theme";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

const windowWidth = Dimensions.get('window').width;

function Item({ item, index }) {
  return (
    <TouchableOpacity
      key={item}
      style={[styles.itemContainer, { backgroundColor: index % 2 === 0 ? "#fff" : "#fff"}]}
      onPress={() => console.log(item)}
    >
      <View style={styles.itemContent}>
        <View style={styles.itemDetails}>
          <Text style={styles.itemId}>N°:{item.name}</Text>
          <Text style={styles.itemSubText}>{item.amended_from}</Text>
          <Text style={styles.itemSubText}>{item.title}</Text>
          <Text style={styles.itemSubText}>{item.payment_type}</Text>
        </View>
        <View style={styles.itemMainContent}>
          <Text style={styles.itemDate}>{item.base_received_amount_after_tax}  {item.paid_from_account_currency}</Text>
          <View>
            <Text style={styles.itemParty}>{item.base_paid_amount_after_tax} {item.paid_from_account_currency} </Text>
            <Text style={styles.itemDate} numberOfLines={1}>{item.posting_date}</Text>
          </View>
          {/* <View style={styles.actionButtons}>
            <View style={[styles.badge, { backgroundColor: Colors.gray }]}>
              <FontAwesome name="trash" color="white" size={15} />
            </View>
            <View style={[styles.badge, { backgroundColor: Colors.gray }]}>
              <FontAwesome name="edit" color="white" size={15} />
            </View>
            <View style={[styles.badge, { backgroundColor: Colors.gray }]}>
              <FontAwesome name="eye" color="white" size={15} />
            </View>
          </View> */}
        </View>
      </View>
      <View style={styles.separator} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: windowWidth - 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.secondary,
    marginVertical: 5,
    padding: 10,
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent:"center"
  },
  itemDetails: {
    flex: 1,
    paddingHorizontal: 16,
  },
  itemMainContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemId: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.secondary,
  },
  itemSubText: {
    fontSize: 12,
    color: '#7d7d7d',
  },
  itemName: {
    fontSize: 18,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  itemParty: {
    fontSize: 14,
    color: '#000',
  },
  itemDate: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  badge: {
    borderRadius: 20,
    padding: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: Colors.secondary,
    marginTop: 10,
  },
});

export default Item;
