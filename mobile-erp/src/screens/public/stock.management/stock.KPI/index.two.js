import React from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const windowWidth = Dimensions.get("window").width;

const ChartExamples = () => {
  return (
    <ScrollView style={styles.container}>
      
      {/* 📈 Line Chart */}
      <Text style={styles.title}>Évolution Mensuelle des Ventes</Text>
      <LineChart
        data={{
          labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
          datasets: [
            {
              data: [50, 90, 70, 110, 130, 80],
              color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`, // Rouge
            },
          ],
        }}
        width={windowWidth - 40}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={styles.graph}
      />

      {/* 📊 Bar Chart */}
      <Text style={styles.title}>Chiffre d'Affaires par Mois</Text>
      <BarChart
        data={{
          labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
          datasets: [
            {
              data: [3000, 5000, 7000, 10000, 12000, 15000],
            },
          ],
        }}
        width={windowWidth - 40}
        height={220}
        yAxisLabel="€"
        chartConfig={chartConfig}
        style={styles.graph}
        fromZero
      />

      {/* 🍰 Pie Chart */}
      <Text style={styles.title}>Répartition des Produits Vendus</Text>
      <PieChart
        data={[
          { name: "Produit A", population: 40, color: "#4CB9E7", legendFontColor: "#3c3c3d" },
          { name: "Produit B", population: 30, color: "#3559E0", legendFontColor: "#3c3c3d" },
          { name: "Produit C", population: 20, color: "#FFECD6", legendFontColor: "#3c3c3d" },
          { name: "Produit D", population: 10, color: "#ED1C24", legendFontColor: "#3c3c3d" },
        ]}
        width={windowWidth - 40}
        height={220}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />

      {/* 🚀 Progress Chart */}
      <Text style={styles.title}>Progression des Objectifs</Text>
      <ProgressChart
        data={{
          labels: ["Ventes", "CA", "Clients"],
          data: [0.7, 0.5, 0.9],
        }}
        width={windowWidth - 40}
        height={220}
        chartConfig={chartConfig}
        style={styles.graph}
      />

      {/* 📅 Contribution Graph */}
      <Text style={styles.title}>Activité Commerciale</Text>
      <ContributionGraph
        values={[
          { date: "2024-01-02", count: 1 },
          { date: "2024-01-03", count: 2 },
          { date: "2024-01-04", count: 3 },
          { date: "2024-01-05", count: 4 },
          { date: "2024-01-06", count: 5 },
        ]}
        endDate={new Date("2024-01-31")}
        numDays={31}
        width={windowWidth - 40}
        height={220}
        chartConfig={chartConfig}
      />

      {/* 📦 Stacked Bar Chart */}
      <Text style={styles.title}>Ventes par Catégorie</Text>
      <StackedBarChart
        data={{
          labels: ["Jan", "Fév", "Mar", "Avr", "Mai"],
          legend: ["Électronique", "Vêtements", "Accessoires"],
          data: [
            [5000, 3000, 2000],
            [7000, 5000, 3000],
            [8000, 6000, 4000],
            [9000, 7000, 5000],
            [10000, 8000, 6000],
          ],
          barColors: ["#4CB9E7", "#ED1C24", "#FFECD6"],
        }}
        width={windowWidth - 40}
        height={220}
        chartConfig={chartConfig}
        style={styles.graph}
      />
      
    </ScrollView>
  );
};

const chartConfig = {
  backgroundGradientFrom: "#fff",
  backgroundGradientTo: "#fff",
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#4CB9E7",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3c3c3d",
    marginBottom: 10,
    textAlign: "center",
  },
  graph: {
    marginVertical: 10,
    borderRadius: 10,
  },
});

export default ChartExamples;
