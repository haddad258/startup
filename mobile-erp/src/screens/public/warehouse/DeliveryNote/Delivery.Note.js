import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../../core/theme';

const renderEvent = ({ item }) => (
  <TouchableOpacity  onPress={()=>console.log(item)} style={styles.eventBox}>
    <View style={styles.dateContainer}>
      <Text style={styles.eventDay}>{item.customer_name}</Text>
      <Text style={styles.eventMonth}>{item.posting_date}</Text>
      <Text style={styles.eventMonth}>{item.apply_discount_on}</Text>
    </View>
    <View style={styles.eventContent}>
      <Text style={styles.eventTime}>{item.return_against}</Text>
      <Text style={styles.userName}>{item.net_total}</Text>
      <Text style={styles.description}>
        {item.title}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  eventBox: {
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  dateContainer: {
    backgroundColor: Colors.info,
    borderRadius: 10,
    padding: 10,
  },
  eventDay: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  eventMonth: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  eventContent: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'space-between',
  },
  eventTime: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555555',
    marginTop: 5,
  },
  description: {
    fontSize: 13,
    color: '#777777',
    marginTop: 5,
  },
});

export default renderEvent;
