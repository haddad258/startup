import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const KpiScreen = () => {
  const kpiData = {
    totalHarvest: '5000 kg',               // Récolte totale
    totalRevenue: '12,000 Dinars',         // Revenu total
    totalCost: '7,500 Dinars',             // Coût total
    productivity: '80%',                     // Productivité
    landUtilization: '75%',                 // Utilisation des terres
    yieldPerHectare: '60 kg/ha',           // Rendement par hectare
    costPerKilogram: '1.5 Dinars/kg',      // Coût par kilogramme
    annualHarvests: '3',                    // Nombre de récoltes par an
    customerSatisfaction: '90%',            // Pourcentage de clients satisfaits
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.title}>KPI de Travail</Text>

<View style={styles.kpiContainer}>
  <FontAwesome5 name="chart-bar" size={24} color="#2196F3" />
  <View style={styles.kpiTextContainer}>
    <Text style={styles.kpiLabel}>Rendement par hectare</Text>
    <Text style={styles.kpiValue}>{kpiData.yieldPerHectare}</Text>
  </View>
</View>

<View style={styles.kpiContainer}>
  <FontAwesome5 name="money-check-alt" size={24} color="#FF9800" />
  <View style={styles.kpiTextContainer}>
    <Text style={styles.kpiLabel}>Coût par kilogramme</Text>
    <Text style={styles.kpiValue}>{kpiData.costPerKilogram}</Text>
  </View>
</View>

<View style={styles.kpiContainer}>
  <FontAwesome5 name="calendar-alt" size={24} color="#673AB7" />
  <View style={styles.kpiTextContainer}>
    <Text style={styles.kpiLabel}>Nombre de récoltes par an</Text>
    <Text style={styles.kpiValue}>{kpiData.annualHarvests}</Text>
  </View>
</View>

<View style={styles.kpiContainer}>
  <FontAwesome5 name="smile" size={24} color="#4CAF50" />
  <View style={styles.kpiTextContainer}>
    <Text style={styles.kpiLabel}>Clients satisfaits</Text>
    <Text style={styles.kpiValue}>{kpiData.customerSatisfaction}</Text>
  </View>
</View>

<View style={styles.kpiContainer}>
  <FontAwesome5 name="seedling" size={24} color="#4CAF50" />
  <View style={styles.kpiTextContainer}>
    <Text style={styles.kpiLabel}>Récolte totale</Text>
    <Text style={styles.kpiValue}>{kpiData.totalHarvest}</Text>
  </View>
</View>

<View style={styles.kpiContainer}>
  <FontAwesome5 name="money-bill-alt" size={24} color="#4CAF50" />
  <View style={styles.kpiTextContainer}>
    <Text style={styles.kpiLabel}>Revenu total</Text>
    <Text style={styles.kpiValue}>{kpiData.totalRevenue}</Text>
  </View>
</View>

<View style={styles.kpiContainer}>
  <FontAwesome5 name="wallet" size={24} color="#FF5722" />
  <View style={styles.kpiTextContainer}>
    <Text style={styles.kpiLabel}>Coût total</Text>
    <Text style={styles.kpiValue}>{kpiData.totalCost}</Text>
  </View>
</View>

<View style={styles.kpiContainer}>
  <FontAwesome5 name="chart-line" size={24} color="#FFC107" />
  <View style={styles.kpiTextContainer}>
    <Text style={styles.kpiLabel}>Productivité</Text>
    <Text style={styles.kpiValue}>{kpiData.productivity}</Text>
  </View>
</View>

<View style={styles.kpiContainer}>
  <FontAwesome5 name="tractor" size={24} color="#9C27B0" />
  <View style={styles.kpiTextContainer}>
    <Text style={styles.kpiLabel}>Utilisation des terres</Text>
    <Text style={styles.kpiValue}>{kpiData.landUtilization}</Text>
  </View>
</View>

      </ScrollView>
     
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
  kpiContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  kpiTextContainer: {
    marginLeft: 15,
  },
  kpiLabel: {
    fontSize: 16,
    color: '#444',
    fontWeight: 'bold',
  },
  kpiValue: {
    fontSize: 16,
    color: '#333',
  },
});

export default KpiScreen;
