import React from 'react';
import { StyleSheet, View,ScrollView } from 'react-native';
import Advertisements from '../advertisements';
import Categories from '../categories';
import ItemKits from '../ItemKits';

const Help = () => {
  return (
    <ScrollView>
      <View
        style={styles.container}>
        <Advertisements />
        <Categories />
        <ItemKits />
        <ItemKits />
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