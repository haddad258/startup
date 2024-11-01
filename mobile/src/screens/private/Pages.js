import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HorizontalBarGraph from '@chartiful/react-native-horizontal-bar-graph';

export default function HorizontalBarGraphExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Graphique en Barres Horizontales</Text>
      <HorizontalBarGraph
        data={[20, 45, 28, 80, 99, 43]}
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        width={300}
        height={300}
        barRadius={5}
        barColor="#ffa726"
        baseConfig={{
          hasYAxisBackgroundLines: true,
          yAxisLabelStyle: { fontSize: 12, prefix: 'TND' }
        }}
        style={styles.graph}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  graph: {
    marginVertical: 8
  }
});
