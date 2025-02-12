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
      {/* Sales Growth */}
      <Text style={styles.title}>Sales Growth</Text>
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: [50, 90, 70, 110, 130, 80],
              color: (opacity = 1) => `rgba(0, 163, 255, ${opacity})`,
            },
          ],
        }}
        width={windowWidth - 40}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={styles.graph}
      />

      {/* Revenue per Month */}
      <Text style={styles.title}>Revenue per Month</Text>
      <BarChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: [3000, 5000, 7000, 10000, 12000, 15000],
            },
          ],
        }}
        width={windowWidth - 40}
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
        style={styles.graph}
        fromZero
      />

      {/* Product Sales Distribution */}
      <Text style={styles.title}>Product Sales Distribution</Text>
      <PieChart
        data={[
          { name: "Product A", population: 40, color: "#1C7D7E", legendFontColor: "#333" },
          { name: "Product B", population: 30, color: "#EBB434", legendFontColor: "#333" },
          { name: "Product C", population: 20, color: "#457B9D", legendFontColor: "#333" },
          { name: "Product D", population: 10, color: "#E63946", legendFontColor: "#333" },
        ]}
        width={windowWidth - 40}
        height={220}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />

      {/* Goal Progress */}
      <Text style={styles.title}>Goal Progress</Text>
      <ProgressChart
        data={{
          labels: ["Sales", "Revenue", "Customers"],
          data: [0.7, 0.5, 0.9],
        }}
        width={windowWidth - 40}
        height={220}
        chartConfig={chartConfig}
        style={styles.graph}
      />

      {/* Sales Activity */}
      <Text style={styles.title}>Sales Activity</Text>
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

      {/* Sales by Category */}
      <Text style={styles.title}>Sales by Category</Text>
      <StackedBarChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May"],
          legend: ["Electronics", "Clothing", "Accessories"],
          data: [
            [5000, 3000, 2000],
            [7000, 5000, 3000],
            [8000, 6000, 4000],
            [9000, 7000, 5000],
            [10000, 8000, 6000],
          ],
          barColors: ["#1C7D7E", "#EBB434", "#E63946"],
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
  backgroundGradientFrom: "#f4f4f9",
  backgroundGradientTo: "#f4f4f9",
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(51, 51, 51, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(51, 51, 51, ${opacity})`,
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#1C7D7E",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f9",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  graph: {
    marginVertical: 10,
    borderRadius: 10,
  },
});

export default ChartExamples;
