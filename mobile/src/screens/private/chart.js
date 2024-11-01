import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LineGraph from '@chartiful/react-native-line-graph';
import { Colors } from '../../core/theme';

export default function LineGraphExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Graphique en Ligne</Text>
      <LineGraph
        data={[20, 45, 28, 80, 99, 43,80, 99, 43]}
        width={300}
        height={300}
        isBezier
        hasShadow
        baseConfig={{
          hasXAxisBackgroundLines: true,
          hasYAxisBackgroundLines: true,
          xAxisLabelStyle: { rotation: 0, fontSize: 12, width: 60, yOffset: 4, }
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
    padding: 16,
    backgroundColor:Colors.gray
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  graph: {
    marginVertical: 8,
    backgroundColor:Colors.white
  }
});
