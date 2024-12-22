import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../../core/theme';

const DeliveryNote = ({ item }) => (
  <TouchableOpacity onPress={() => console.log(item)} style={styles.eventBox}>
    <View style={styles.dateContainer}>
      <Text style={styles.eventDay}>{item.name}</Text>
      <Text style={styles.eventMonth}>{item.posting_date}</Text>
    </View>
    <View style={styles.eventContent}>
      <Text style={styles.eventTitle}>{item.posting_date}</Text>
      <View style={styles.eventDetails}>
        <Text style={styles.eventAmount}>to_warehouse: {item.to_warehouse}</Text>
        <Text style={styles.eventReturn}>Type: {item.stock_entry_type}</Text>
        <Text style={styles.eventTotal}>Net Total: {item.total_amount}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  eventBox: {
    backgroundColor: '#FFFFFF',
    marginVertical: 12,
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  dateContainer: {
    backgroundColor: Colors.primary,  // Use primary color for the date section
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  eventDay: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  eventMonth: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  eventContent: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.darkText,
    marginBottom: 10,
  },
  eventDetails: {
    marginTop: 5,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  eventAmount: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.info,
  },
  eventReturn: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
    marginTop: 5,
  },
  eventTotal: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.primary,
    marginTop: 5,
  },
});

export default DeliveryNote;
