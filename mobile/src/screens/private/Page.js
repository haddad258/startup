import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const KpiScreen = () => {
  // Exemple de données KPI
  const kpiData = {
    totalHarvest: '5000 kg',
    totalRevenue: '12,000 Dinars',
    totalCost: '7,500 Dinars',
    productivity: '80%',
    landUtilization: '75%',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KPI de Travail</Text>
      
      <View style={styles.kpiContainer}>
        <Text style={styles.kpiLabel}>Récolte totale :</Text>
        <Text style={styles.kpiValue}>{kpiData.totalHarvest}</Text>
      </View>

      <View style={styles.kpiContainer}>
        <Text style={styles.kpiLabel}>Revenu total :</Text>
        <Text style={styles.kpiValue}>{kpiData.totalRevenue}</Text>
      </View>

      <View style={styles.kpiContainer}>
        <Text style={styles.kpiLabel}>Coût total :</Text>
        <Text style={styles.kpiValue}>{kpiData.totalCost}</Text>
      </View>

      <View style={styles.kpiContainer}>
        <Text style={styles.kpiLabel}>Productivité :</Text>
        <Text style={styles.kpiValue}>{kpiData.productivity}</Text>
      </View>

      <View style={styles.kpiContainer}>
        <Text style={styles.kpiLabel}>Utilisation des terres :</Text>
        <Text style={styles.kpiValue}>{kpiData.landUtilization}</Text>
      </View>
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
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  kpiLabel: {
    fontSize: 16,
    color: '#444',
    fontWeight: 'bold',
  },
  kpiValue: {
    fontSize: 16,
    color: '#007bff',
  },
});

export default KpiScreen;
