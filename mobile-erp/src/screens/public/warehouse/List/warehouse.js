import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors, units } from "../../../../core/theme";

const Card = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => console.log('DetailsScreen', item)}>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardSubtitle}>{item.company}</Text>
          <Text style={styles.cardDetails}>{item.warehouse_name}</Text>
        </View>
        <View style={styles.cardFooter}>
          <Text style={styles.cardPrice}>{item.rgt}</Text>
          <View style={styles.addToCartBtn}>
            <Icon name="eye" size={20} color={Colors.white} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 180,
    width: units.width *0.45,
    marginHorizontal: 10,
    marginBottom: 20,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.white,
    overflow: 'hidden',
    elevation: 4, // Slight shadow for floating effect
  },
  cardContent: {
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
  },
  cardSubtitle: {
    fontSize: 14,
    color: Colors.grey,
    marginTop: 4,
  },
  cardDetails: {
    fontSize: 14,
    color: Colors.darkGray,
    marginTop: 6,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Card;
