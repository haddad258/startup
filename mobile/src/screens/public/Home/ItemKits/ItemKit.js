import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Colors, units } from '../../../../core/theme';
import { API_URLPublic } from '../../../../service/Api/config';

const ItemKits = ({ item }) => {
  const [currentSelected, setCurrentSelected] = useState(null);

  return (
    <TouchableOpacity
      style={[
        styles.itemKitsTouchable,
        currentSelected === item.id && styles.selectedTouchable,
      ]}
      onPress={() => console.log(item.id)}
      activeOpacity={0.8}
    >
      <View
        style={[
          styles.itemKitsContainer,
          currentSelected === item.id && styles.selectedContainer,
        ]}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: API_URLPublic + 'categories/' + item.images }}
            style={styles.image}
          />
        </View>
        <Text
          style={[
            styles.itemKitsText,
            currentSelected === item.id && styles.selectedText,
          ]}
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemKitsTouchable: {
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
  itemKitsContainer: {
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
  itemKitsText: {
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

export default ItemKits;
