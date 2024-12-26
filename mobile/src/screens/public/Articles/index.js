import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors, units } from '../../../core/theme';
import { API_URLPublic } from '../../../service/Api/config';

const Articles = ({ Article }) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={0.9}
      onPress={() => console.log('DetailsScreen', Article)}>
      <View style={styles.imageContainer}>
        <Image source={{uri:API_URLPublic+"articles/"+Article.images}} style={styles.articleImage} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.articleName}>{Article.name}</Text>
        <Text style={styles.articleDescription}>{Article.description}</Text>
        <View style={styles.bottomRow}>
          <Text style={styles.articlePrice}>${Article.price}</Text>
          <TouchableOpacity style={styles.addToCartBtn}>
            <Icon name="add" size={20} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: units.width * 0.45,
    borderRadius: 15,
    backgroundColor: Colors.white,
    margin: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: Colors.light,
  },
  articleImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 15,
  },
  articleName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 5,
  },
  articleDescription: {
    fontSize: 12,
    color: Colors.gray,
    marginBottom: 10,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  articlePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Articles;
