import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const WorkSummaryScreen = () => {
  // Exemple de données de bilan
  const workData = [
    {
      id: '1',
      date: '2024-11-01',
      cropType: 'Projet A',
      quantity: '500 kg',
      cost: '1500 Dinars',
      revenue: '2500 Dinars',
      description: 'Récolte réussie avec des conditions optimales.',
    },
    {
      id: '2',
      date: '2024-10-25',
      cropType: 'Projet B',
      quantity: '300 kg',
      cost: '1000 Dinars',
      revenue: '1800 Dinars',
      description: 'Récolte de blé avec un rendement moyen.',
    },
    {
        id: '221',
        date: '2024-11-01',
        cropType: 'Projet C',
        quantity: '800 kg',
        cost: '2000 Dinars',
        revenue: '3000 Dinars',
        description: 'Récolte de légumes sous serre avec un rendement supérieur aux attentes.',
      },
      {
        id: '342',
        date: '2024-10-18',
        cropType: 'Projet D',
        quantity: '1200 kg',
        cost: '2500 Dinars',
        revenue: '4000 Dinars',
        description: 'Récolte de pommes de terre avec un coût élevé dû aux traitements anti-parasitaires.',
      },
      {
        id: '3',
        date: '2024-10-05',
        cropType: 'Projet E',
        quantity: '700 kg',
        cost: '1600 Dinars',
        revenue: '2700 Dinars',
        description: 'Récolte de tomates en plein champ avec une excellente qualité de production.',
      },
      {
        id: '4',
        date: '2024-09-20',
        cropType: 'Projet F',
        quantity: '500 kg',
        cost: '1200 Dinars',
        revenue: '2100 Dinars',
        description: 'Petite récolte d’herbes aromatiques avec un rendement satisfaisant pour le marché local.',
      },
  ];

  // Composant pour afficher chaque item du bilan
  const renderWorkItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.dateText}>Date: {item.date}</Text>
      <Text style={styles.cropText}>Type de culture: {item.cropType}</Text>
      <Text style={styles.quantityText}>Quantité récoltée: {item.quantity}</Text>
      <Text style={styles.costText}>Coût: {item.cost}</Text>
      <Text style={styles.revenueText}>Revenu: {item.revenue}</Text>
      <Text style={styles.descriptionText}>Description: {item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bilan de Travail</Text>
      <FlatList
        data={workData}
        renderItem={renderWorkItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  cropText: {
    fontSize: 16,
    color: '#444',
  },
  quantityText: {
    fontSize: 16,
    color: '#444',
  },
  costText: {
    fontSize: 16,
    color: '#d9534f', // Rouge pour les coûts
  },
  revenueText: {
    fontSize: 16,
    color: '#5cb85c', // Vert pour les revenus
  },
  descriptionText: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
});

export default WorkSummaryScreen;
