import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Colors } from '../../../core/theme';

const CreditCardInfoScreen = () => {

  const[cards, setCards]  = useState([
    { id: 1, number: '**** **** **** 1234', holder:'Hanen Douzi', expiration:'12/24', logo: 'https://img.icons8.com/color/70/000000/visa.png' },
    { id: 2, number: '**** **** **** 5678', holder:'Hanen Douzi', expiration:'12/24',logo: 'https://img.icons8.com/color/70/000000/mastercard.png' },
    { id: 3, number: 'D17 Poste', holder:'Hanen Douzi', expiration:'', logo:'https://i.ibb.co/CVX0VsF/poste.jpg' },
  ]);

  return (
    <ScrollView
  >
    <View style={styles.container}>
      <Text style={styles.title}>Card Info</Text>
     
        {cards.map((card) => (
          <View key={card.id} style={styles.cardContainer}>
            <Image source={{ uri: card.logo }} style={styles.logo} />
            <Text style={styles.cardNumber}>{card.number}</Text>
            <View style={styles.cardInfoContainer}>
              <View style={styles.cardInfoItem}>
                <Text style={styles.cardInfoLabel}>Card Holder</Text>
                <Text style={styles.cardInfoValue}>{card.holder}</Text>
              </View>
              <View style={styles.cardInfoItem}>
                <Text style={styles.cardInfoLabel}>Expiration</Text>
                <Text style={styles.cardInfoValue}>{card.expiration}</Text>
              </View>
            </View>
          </View>
        ))}
      <TouchableOpacity style={styles.paymentButton}>
        <Text style={styles.buttonText}>Effectuer le paiement de l'abonnement</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>

  );
};


const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:Colors.error,
  },
  cardContainer: {
    marginHorizontal:10,
    marginTop:10,
    width: 300,
    height: 180,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 6,
    borderBottomColor: '#ccc',
  },
  cardNumber: {
    fontSize: 18,
    letterSpacing: 4,
    marginBottom: 10,
  },
  cardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardInfoItem: {
    flex: 1,
  },
  cardInfoLabel: {
    fontSize: 12,
    color: 'gray',
  },
  cardInfoValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  carouselContainer: {
    marginVertical: 40,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
  paymentButton: {
    backgroundColor: Colors.primary,
    margin:10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CreditCardInfoScreen;
