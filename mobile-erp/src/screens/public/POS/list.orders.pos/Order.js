import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../../core/theme';

const OrderCard = ({order, navigation}) => {
  return (
   
      <View style={styles.cardContainer}>
        {/* Render the card image */}
        {/* Render all the card details here */}
        <View style={styles.cardDetailsContainer}>
          {/* Order ID and date */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontWeight: 'bold', color: Colors.dark, fontSize: 16}}>
              Order #{order?.name}
            </Text>
            <Text style={{fontSize: 12, color: Colors.grey}}>
              {order?.status}
            </Text>
          </View>

          {/* Render the customer name */}
          <Text style={{fontSize: 14, marginTop: 5, color: Colors.dark}}>
            {order?.customer}
          </Text>

          {/* Render the total amount */}
          <Text style={{fontSize: 12, marginTop: 5, color: Colors.primary}}>
            Total: {order?.grand_total}
          </Text>

          {/* Render status */}
          <View style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name={
                order?.status === 'Completed'
                  ? 'check-circle'
                  : order?.status === 'Pending'
                  ? 'clock-outline'
                  : 'alert-circle'
              }
              size={18}
              color={
                order?.status === 'Paid'
                  ? 'green'
                  : order?.status === 'Pending'
                  ? 'orange'
                  : 'red'
              }
            />
            <Text style={{fontSize: 12, color: Colors.grey, marginLeft: 5}}>
              {order?.status}
            </Text>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    flex: 1,
  },
  cardDetailsContainer: {
    height: 120,
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius:10,
    borderColor:Colors.primary,
    borderWidth:1,
    justifyContent: 'center',
  },
  cardImageContainer: {
    height: 150,
    width: 140,
    backgroundColor: Colors.background,
    borderRadius: 20,
  },
});

export default OrderCard;
