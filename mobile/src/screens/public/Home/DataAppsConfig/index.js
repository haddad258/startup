import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  View,
  Image,
  TextInput,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const Order = (props) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [infoPage, setInfoPage] = useState({ maxPage: 0, totalAllProduct: 0 });
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const fetchDataProduct = async () => {
    await console.log(rowsPerPage, page + 1, props.item.token)
      .then((response) => {
        console.log(response.value.data.result.infoPage);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchDataProduct();
  }, [page, rowsPerPage]);

  return (
    <>
      <StatusBar backgroundColor="#f7b81f" />

      {/* Header */}
     

      {/* Search Navigation & Chart Navigation */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="What MSG do you want to search...."
          style={styles.searchInput}
        />
        <Image
          style={styles.searchIcon}
          source={require('../../../../../assets/favicon.png')}
        />
        <Image
          style={styles.cartIcon}
          source={require('../../../../../assets/favicon.png')}
        />
      </View>

      {/* Feature Apps */}
      <View style={styles.viewFeature}>
        <View style={styles.viewMenu}>
          <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.textMenu}>New</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.textMenu}>Category</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.textMenu}>Name</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.textMenu}>Name</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.textMenu}>Name</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.textMenu}>Name</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Product Apps */}
      <FlatList
        data={[0,12,3,4,12,3,4,12,3,4]}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.scrollMargin}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <TouchableOpacity style={styles.productRow}>
              {/* Product Image */}
              <Image source={{ uri: item.image }} style={styles.productImage} />
              
              {/* Product Details */}
              <View style={styles.productDetails}>
                <Text style={styles.productName}>{"product_name"}</Text>
                <Text style={styles.productDescription}>{"description"}</Text>
                <Text style={styles.productPrice}>{"price"}</Text>
              </View>

              {/* Add to Cart Button */}
              <TouchableOpacity style={styles.addToCartButton}>
                <Text style={styles.addToCartText}>Add To Cart</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        )}
      />
    </>
  );
};

export default Order;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#f7b81f',
  },
  headerTitle: {
    marginHorizontal: 17,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  searchContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  searchInput: {
    borderWidth: 3,
    borderColor: '#ffce1e',
    borderRadius: 20,
    height: 50,
    fontSize: 13,
    paddingLeft: 45,
    paddingRight: 20,
    backgroundColor: 'white',
    marginRight: 5,
  },
  searchIcon: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: 12,
    left: 35,
  },
  cartIcon: {
    marginLeft: '2%',
    marginTop: '3%',
  },
  viewFeature: {
    marginHorizontal: 17,
    marginTop: 15,
  },
  viewMenu: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 14,
    backgroundColor: 'white',
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  },
  TouchableOpacity: {
    backgroundColor: '#f7b81f',
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    height: 35,
    marginHorizontal: 5,
  },
  textMenu: {
    color: 'white',
    fontWeight: 'bold',
  },
  scrollMargin: {
    marginTop: -5,
    paddingHorizontal: 10,
  },
  productCard: {
    borderWidth: 3,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginBottom: 10,
  },
  productRow: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  productDescription: {
    marginTop: 5,
    color: 'gray',
  },
  productPrice: {
    marginTop: 5,
    color: 'green',
    fontWeight: 'bold',
  },
  addToCartButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  addToCartText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
