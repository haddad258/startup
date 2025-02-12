import React from 'react';
import { View, Dimensions, StyleSheet, ScrollView, Text } from 'react-native';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';
import HorizontalBarGraph from '@chartiful/react-native-horizontal-bar-graph';
import LineGraph from '@chartiful/react-native-line-graph';

const App = () => {
  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Sales Performance */}
        <Text style={styles.title}>Sales Performance</Text>
        <VerticalBarGraph
          data={[50, 75, 100, 125, 90, 110, 130]}
          labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
          width={windowWidth - 90}
          height={250}
          barRadius={5}
          barWidthPercentage={0.65}
          barColor={'#007bff'}
          baseConfig={{
            hasXAxisBackgroundLines: false,
            xAxisLabelStyle: {
              position: 'left',
              prefix: '$'
            }
          }}
          style={styles.graph}
        />
        
        {/* Item Stock Status */}
        <Text style={styles.title}>Item Stock Status</Text>
        <HorizontalBarGraph
          data={[150, 120, 80, 200, 180, 130]}
          labels={['Product A', 'Product B', 'Product C', 'Product D', 'Product E', 'Product F']}
          width={windowWidth - 20}
          height={225}
          barRadius={7}
          barColor={'#17a2b8'}
          baseConfig={{
            hasYAxisBackgroundLines: false,
            xAxisLabelStyle: {
              rotation: 0,
              fontSize: 11,
              yOffset: 4,
              xOffset: -12
            },
            yAxisLabelStyle: {
              rotation: 30,
              fontSize: 13,
              prefix: '$',
              position: 'bottom',
              xOffset: 15,
              yOffset: -10,
              decimals: 2,
              height: 50
            }
          }}
          style={styles.graph}
        />

        {/* Article Trends */}
        <Text style={styles.title}>Article Trends</Text>
        <LineGraph
          data={[30, 50, 40, 80, 60]}
          labels={['Item A', 'Item B', 'Item G', 'Item M', 'May']}
          width={windowWidth - 90}
          height={200}
          lineColor="#6f42c1"
          dotColor="#ffc107"
          lineWidth={2}
          isBezier
          hasDots={true}
          baseConfig={{
            startAtZero: false,
            hasXAxisBackgroundLines: false,
            xAxisLabelStyle: {
              prefix: '$',
              offset: 0
            }
          }}
          style={styles.graph}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 10,
  },
  container: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  graph: {
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
});

export default App;
