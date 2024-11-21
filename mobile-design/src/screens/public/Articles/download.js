import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { Colors } from '../../../core/theme';
import { useDispatch } from 'react-redux';

function DiscoverScreen({ navigation }) {
  const cartReducer = useState([0,1,2,3,4,89]);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Object.keys(cartReducer)");
  }, []);

  const handlePress = async () => {
    console.log("cartReducer")
  
    // Perform any actions you want when the button is pressed
  };

  function empty() {
    return (
      <TouchableOpacity
      onPress={() => navigation.navigate('PlanPacks')}
    >
      <View style={styles.EmptyCarte}>
        <Image style={styles.EmptyCarteImage} source={{ uri: "https://i.ibb.co/80t9PPy/Screenshot-from-2024-02-13-11-59-08.png" }} />

        <View style={styles.emptyButton}>
         
            <View >
              <Text style={styles.descriptionEmpty} >{'There is no item in the cart.'}</Text>
            </View>
        </View>
      </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.bestSellersContainer}>
        {/* Order Header */}
        <View style={styles.orderHeader}>
          <Text>2</Text>
          <Text>1</Text>
          <Text>6</Text>
        </View>

        {/* Product List */}
        <FlatList
          data={[0,1,2,3,7]}
          renderItem={({ item }) => (
            <View style={styles.productContainer}>
              <Image source={{ uri: 'https://i.ibb.co/vVKPrLN/imp.png' }} style={styles.productImage} />
              <View style={styles.productDetails}>
                <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
                  name
                </Text>
                <Text style={styles.productPrice}>30 $</Text>
                <View style={styles.productActions}>
                  <Text style={styles.productKeyword} numberOfLines={1}>
                    test
                  </Text>
                  <FontAwesome5 onPress={() => console.log(item)} name="trash" color={Colors.error} size={20} />
                </View>
              </View>
            </View>
          )}
          ListEmptyComponent={empty()}
          showsVerticalScrollIndicator={false}
        />

        {/* Confirm Order Button */}
          {/* <TouchableOpacity onPress={handlePress} style={styles.button}>
            <Text style={styles.buttonText}>Confirm Order</Text>
          </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 10,
  },
  EmptyCarte: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 100
  },
  orderHeader: {
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    backgroundColor: Colors.gray,
    marginBottom: 10,
    paddingVertical: 8,
  },
  bestSellersContainer: {
    flex: 1,
    padding: 2,
  },
  productContainer: {
    borderRadius:20,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.primary,
    backgroundColor: Colors.white,
    borderWidth: 1,
    padding: 15,
    margin:2
  },
  productImage: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  EmptyCarteImage: {
    borderRadius: 30,
    width: 120,
    height: 120,
  },

  descriptionEmpty: {

    color: Colors.white,
    fontWeight: "600",
    fontSize: 20
  },

  productDetails: {
    marginLeft: 15,
    flex: 1,
  },
  productName: {
    fontWeight: '600',
    color: '#222',
    fontSize: 18,
    width: 200,
  },
  productPrice: {
    fontWeight: '600',
    color: Colors.gray,
    fontSize: 15,
  },
  productActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  productKeyword: {
    fontWeight: '700',
    color: Colors.secondary,
    fontSize: 12,
    width: 150,
  },
  button: {
    backgroundColor: Colors.info,
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
  },
});

export default DiscoverScreen;
