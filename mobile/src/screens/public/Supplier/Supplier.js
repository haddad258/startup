import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Colors, units } from '../../../core/theme';
import { API_URLPublic } from '../../../service/Api/config';
import { useNavigation } from '@react-navigation/native';
const Supplier = ({ supplier }) => {
  const [currentSelected, setCurrentSelected] = useState(null);
  const navigation = useNavigation(); // Access navigation object
  const handlePress = () => {
    console.log("heheheeh")
    setCurrentSelected(supplier.id);
    navigation.navigate('ArticlesFiltered', { supplierId: supplier.id }); // Pass supplier ID as a parameter
  };
  return (
    <TouchableOpacity
      style={[
        styles.supplierTouchable,
        currentSelected === supplier.id && styles.selectedTouchable,
      ]}
      onPress={() => handlePress()}
      activeOpacity={0.8}
    >
      <View
        style={[
          styles.supplierContainer,
          currentSelected === supplier.id && styles.selectedContainer,
        ]}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: API_URLPublic + 'categories/' + supplier.images }}
            style={styles.image}
          />
        </View>
        <Text
          style={[
            styles.supplierText,
            currentSelected === supplier.id && styles.selectedText,
          ]}
        >
          {supplier.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  supplierTouchable: {
    borderRadius: 15,
    margin: 8,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'hidden',
  },
  selectedTouchable: {
    shadowColor: Colors.primary,
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  supplierContainer: {
    width: units.width / 3.5,
    height: units.height / 6.5,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    borderRadius: 15,
    padding: 10,
    justifyContent: 'space-between',
  },
  selectedContainer: {
    backgroundColor: Colors.primary,
  },
  imageContainer: {
    width: '100%',
    height: units.height / 12,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  supplierText: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 5,
  },
  selectedText: {
    color: Colors.white,
  },
});

export default Supplier;
