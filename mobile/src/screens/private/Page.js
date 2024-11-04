import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';

export default function VerticalBarGraphExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget annuel</Text>
      <VerticalBarGraph
        data={[20, 45, 28, 80, 99, 43]}
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        width={300}
        height={300}
        barRadius={5}
        barWidthPercentage={0.5}
        baseConfig={{
          hasXAxisBackgroundLines: true,
          xAxisLabelStyle: { rotation: 0, fontSize: 12, width: 60, yOffset: 4, xOffset: -10 },
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
