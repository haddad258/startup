import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ArticleCard = ({ item, onAddToCart, onPress }) => {
  return (
    <View style={styles.articleCard}>
      <TouchableOpacity onPress={onPress} style={styles.articleContent}>
        <Image source={{ uri: item.imageUrl }} style={styles.articleImage} />
        <View style={styles.articleDetails}>
          <Text style={styles.articleTitle}>{item.name} - {item.item_name}</Text>
          <Text style={styles.articleStock}>Group: {item.item_group}</Text>
          <Text style={styles.articleStock}>In Stock: {item.bal_qty}</Text>
          <View style={styles.articlePrice}>
            <Text style={styles.articleStock}>Prix de vente: </Text>
            <Text style={styles.priceValue}> {item.selling_price_list_rate}</Text>
            <Text> ({item.currency})</Text>
          </View>
        </View>
      </TouchableOpacity>
      <MaterialCommunityIcons
        name="cart-plus"
        size={30}
        color="#FF6B35"
        style={styles.addToCartIcon}
        onPress={onAddToCart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  articleCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginVertical: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  articleContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  articleImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  articleDetails: {
    justifyContent: 'center',
    flex: 1,
  },
  articleTitle: {
    fontSize: 16,
    color: '#333',
  },
  articleStock: {
    fontSize: 14,
    color: '#606060',
  },
  articlePrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceValue: {
    fontSize: 16,
    color: '#FF6B35',
  },
  addToCartIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default ArticleCard;
