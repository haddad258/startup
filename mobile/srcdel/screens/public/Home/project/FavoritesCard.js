import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors,units} from '../../../../core/theme';


const FavoritesCard = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="heart" size={15} color={Colors.white} />
    </TouchableOpacity>
  );
};

export default FavoritesCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingHorizontal: units.width / 53,
    paddingVertical: units.height / 116,
    borderRadius: 100,
    alignSelf: 'baseline',
  },
});
