import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { addToCartMultiple } from '../../../store/cart/actions';
import { useDispatch } from 'react-redux';
import { Colors, units } from '../../../core/theme';
import { ArticleSettings } from '../../../service/doctype';

const ArticleCard = ({ item }) => {
  const [isAddToCartModalVisible, setAddToCartModalVisible] = useState(false);
  const [isDetailsModalVisible, setDetailsModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const toggleAddToCartModal = () => {
    setAddToCartModalVisible(!isAddToCartModalVisible);
  };

  const toggleDetailsModal = () => {
    setDetailsModalVisible(!isDetailsModalVisible);
  };


  const fetchArticles = async (id) => {
    try {
      const list = await ArticleSettings.getarticlesInfo(id);
      if (list) {
        console.log(list?.data);
        setDetailsModalVisible(!isDetailsModalVisible);
      }
    } catch (error) {
      console.error('Error fetching admin list:', error);
    }
  };

  const onAddToCart = () => {
    console.log(`Adding to cart: ${item.name}, Quantity: ${quantity}`);
    dispatch(addToCartMultiple(item.name, item, quantity));

    setAddToCartModalVisible(false); // Close the modal after adding
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <View style={styles.articleCard}>
      <TouchableOpacity onPress={()=>fetchArticles(item.item_code)} style={styles.articleContent}>
        <View style={styles.articleDetails}>
          <Text style={styles.articleTitle}>{item.item_name} - {item.item_name}</Text>
          <Text style={styles.articleStock}>packing unit: {item.packing_unit}</Text>
          <Text style={styles.articleStock}>In Stock: {item.reference}</Text>
          <View style={styles.articlePrice}>
            <Text style={styles.articleStock}>Prix de vente: </Text>
            <Text style={styles.priceValue}> {item.price_list_rate}</Text>
            <Text> ({item.currency})</Text>
          </View>
        </View>
      </TouchableOpacity>
      <MaterialCommunityIcons
        name="plus-circle-multiple"
        size={30}
        color={Colors.primary}
        style={styles.addToCartIcon}
        onPress={toggleAddToCartModal}
      />

      {/* Modal 1 - Add to Cart Modal */}
      <Modal
        transparent={true}
        visible={isAddToCartModalVisible}
        animationType="slide"
        onRequestClose={toggleAddToCartModal}
      >
        <View style={styles.addToCartModalContainer}>
          <View style={styles.addToCartModalContent}>
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
              <Button title="Annuler" onPress={toggleAddToCartModal} color="#ccc" />
              <Button title="Ajouter" onPress={onAddToCart} color="#FF6B35" />
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal 2 - Details Modal */}
      <Modal
        transparent={true}
        visible={isDetailsModalVisible}
        animationType="fade"
        onRequestClose={toggleDetailsModal}
      >
        <View style={styles.detailsModalContainer}>
          <View style={styles.detailsModalContent}>
            <Text style={styles.detailsModalTitle}>Détails de l'Article</Text>
            <Text style={styles.detailsModalText}>Nom: {item.name}</Text>
            <Text style={styles.detailsModalText}>Groupe: {item.item_group}</Text>
            <Text style={styles.detailsModalText}>Stock: {item.bal_qty}</Text>
            <Text style={styles.detailsModalText}>Prix: {item.standard_rate} {item.currency}</Text>
            <Button title="Fermer" onPress={toggleDetailsModal} color="#FF6B35" />
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
  articleDetails: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
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

  // Add to Cart Modal Styles
  addToCartModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  addToCartModalContent: {
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

  // Details Modal Styles
  detailsModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  detailsModalContent: {
    width:units.width*0.9,
    height:units.height*0.9,
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    alignItems: 'flex-start',
  },
  detailsModalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  detailsModalText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
});

export default ArticleCard;
