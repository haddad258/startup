import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { addToCartMultiple, removeFromCart } from '../../../store/cart/actions';
import { useDispatch } from 'react-redux';
import { Colors } from '../../../core/theme';

const ArticleCard = ({ item }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onAddToCart = () => {
    console.log(`Adding to cart: ${item.name}, Quantity: ${quantity}`);
    dispatch(addToCartMultiple(item.name, item, quantity));

    setModalVisible(false); // Ferme la modal après l'ajout
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <View style={styles.articleCard}>
      <TouchableOpacity onPress={()=>console.log(item)} style={styles.articleContent}>
        <Image source={{ uri: item.imageUrl }} style={styles.articleImage} />
        <View style={styles.articleDetails}>
          <Text style={styles.articleTitle}>{item.name} - {item.item_name}</Text>
          <Text style={styles.articleStock}>Group: {item.item_group}</Text>
          <Text style={styles.articleStock}>In Stock: {item.bal_qty}</Text>
          <View style={styles.articlePrice}>
            <Text style={styles.articleStock}>Prix de vente: </Text>
            <Text style={styles.priceValue}> {item.standard_rate}</Text>
            <Text> ({item.currency})</Text>
          </View>
        </View>
      </TouchableOpacity>
      <MaterialCommunityIcons
        name="plus-circle-multiple"
        size={30}
        color={Colors.primary}
        style={styles.addToCartIcon}
        onPress={toggleModal}
      />

      {/* Modal */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Ajouter au Panier</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={decrementQuantity} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity onPress={incrementQuantity} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modalActions}>
              <Button title="Annuler" onPress={toggleModal} color="#ccc" />
              <Button title="Ajouter" onPress={onAddToCart} color="#FF6B35" />
            </View>
          </View>
        </View>
      </Modal>
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
  // Modal Styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
    width: '60%',
  },
  quantityButton: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#FF6B35',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 10,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
});

export default ArticleCard;
