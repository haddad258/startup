import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from '../../../core/theme';
import {
  addToCartMultiple,
  clearCart,
  removeFromCart,
} from '../../../store/cart/actions';
import SelectInputDocs from '../../../components/Doctype/SelectInputDocs';
import { OrderSettings } from '../../../service/doctype';
import { formatDate } from '../../../core/helpers/formdate';

function CartScreen({ navigation }) {
  const cartReducer = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const [deliveryDate, setDeliveryDate] = useState(formatDate(new Date()));
  const [customer, setCustomer] = useState('');
  const [taxes, setTaxes] = useState([]);

  const handleIncrement = (product, quantity) => {
    dispatch(addToCartMultiple(product.name, product, quantity + 1));
  };

  const handleDecrement = (product, quantity) => {
    if (quantity > 1) {
      dispatch(addToCartMultiple(product.name, product, quantity - 1));
    } else {
      dispatch(removeFromCart(product.name));
    }
  };

  const handleOrderCreation = async () => {
    try {
      const payload = {
        customer,
        delivery_date: deliveryDate,
        items: Object.values(cartReducer.products).map((item) => ({
          qty: item.quantity,
          item_code: item?.product?.item_code,
          rate: item.product?.price_list_rate,
          amount: item.quantity * item.product?.price_list_rate,
        })),
      };

      console.log(payload)

      const response = await OrderSettings.addorders(payload);
      if (response) {
        alert('Order Created');
        console.log(response)
        dispatch(clearCart());
      }
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  const renderEmptyCart = () => (
    <View style={styles.emptyCartContainer}>
      <Image
        style={styles.emptyCartImage}
        source={{ uri: 'https://i.ibb.co/80t9PPy/Screenshot-from-2024-02-13-11-59-08.png' }}
      />
      <Text style={styles.emptyCartText}>Cart Vide!</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Articles')}
        style={styles.shopButton}
      >
        <Text style={styles.shopButtonText}>Articles</Text>
      </TouchableOpacity>
    </View>
  );

  const renderCartItem = ({ item }) => (
    <View style={styles.productCard}>
      <View style={styles.productDetails}>
        <Text style={styles.productName}>Product: {item.product?.name}</Text>
        <Text style={styles.productPrice}>Price: {item.product?.price_list_rate}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => handleDecrement(item.product, item.quantity)}
          >
            <MaterialIcons name="remove" size={20} color={Colors.secondary} />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => handleIncrement(item.product, item.quantity)}
          >
            <MaterialIcons name="add" size={20} color={Colors.secondary} />
          </TouchableOpacity>
        </View>
        <Entypo
          name="trash"
          size={20}
          color={Colors.error}
          onPress={() => dispatch(removeFromCart(item.product.name))}
          style={styles.trashIcon}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.inputDate}>Date: {deliveryDate}</Text>
      <SelectInputDocs
        placeholder="Clients"
        value={customer}
        onChangeText={(option) => setCustomer(option.name)}
        style={styles.input}
        doctype="Customer"
      />
      <SelectInputDocs
        placeholder="Taxes"
        value={taxes}
        onChangeText={(option) => setTaxes([option])}
        style={styles.input}
        doctype="Sales Taxes and Charges Template"
      />
      <FlatList
        data={Object.values(cartReducer.products)}
        keyExtractor={(item) => item.name}
        renderItem={renderCartItem}
        ListEmptyComponent={renderEmptyCart()}
        showsVerticalScrollIndicator={false}
      />
      {Object.values(cartReducer.products).length > 0 && (
        <TouchableOpacity
          onPress={handleOrderCreation}
          style={styles.checkoutButton}
        >
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    padding: 10,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.gray,
    marginBottom: 10,
  },
  shopButton: {
    backgroundColor: Colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  shopButtonText: {
    color: Colors.white,
    fontSize: 16,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 3,
    borderColor:Colors.primary,
    borderWidth:1
  },
  input: {
    height: 60,
    width: '99%',
    borderColor: Colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    paddingLeft: 12,
    backgroundColor: '#fff',
  },
  inputDate: {
    height: 30,
    width: '99%',
    borderColor: Colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    textAlign: 'center',
    backgroundColor: '#fff',
    fontWeight:"bold"
  },
  productDetails: {
    flex: 1,
    marginLeft: 30,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primary,
  },
  productPrice: {
    fontSize: 14,
    color: Colors.gray,
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  trashIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  checkoutButton: {
    backgroundColor: Colors.secondary,
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  checkoutButtonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CartScreen;
