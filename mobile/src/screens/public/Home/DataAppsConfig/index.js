import React from 'react';
import { StyleSheet, View,ScrollView } from 'react-native';
import Advertisements from '../advertisements';
import Categories from '../categories';
import ItemKits from '../ItemKits';
import ArticleRecommends from '../articles.recommended';
import ArticleDiscounts from '../articles.discounts';

const Help = () => {
  return (
    <ScrollView>
      <View
        style={styles.container}>
        <Advertisements />
        <Categories />
        <ArticleRecommends />
        <ItemKits />
        <ArticleDiscounts />
      </View>
    </ScrollView>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
export default Help;