import React from 'react';
import {Image, Text, View, TouchableHighlight, StyleSheet,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from "../../../../core/theme";

const Card = ({item, navigation}) => {
  return (
    <TouchableHighlight
      underlayColor={Colors.white}
      activeOpacity={0.9}
      onPress={() => console.log('DetailsScreen', item)}>
      <View style={styles.card}>
       
        <View style={{marginHorizontal: 20}}>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>{item.name}</Text>
          <Text style={{fontSize: 14, color: Colors.grey, marginTop: 2}}>
            {item.company}
          </Text>
        </View>
        <View style={{marginHorizontal: 20,marginTop:10}}>
          <Text style={{fontSize: 14, color: Colors.grey, marginTop: 2}}>
            {item.warehouse_name}
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.rgt}</Text>
          <View style={styles.addToCartBtn}>
            <Icon name="eye" size={20} color={Colors.white} />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  card: {
    height:160,
    width: Dimensions.get('screen').width / 2 - 20,
    marginHorizontal: 10,
    marginBottom: 20,
    paddingBottom: 20,
    marginTop: 10,
    borderRadius: 15,
    elevation: 3,
    borderWidth:1,
    borderColor:Colors.gray,
    backgroundColor: Colors.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Card;
