import React from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

interface PriceGraphProps {
  data: number[]; 
  labels?: string[]; 
}

const screenWidth = Dimensions.get('window').width;

const PriceGraph: React.FC<PriceGraphProps> = ({ data, labels }) => (
  <View style={styles.card}>
    <LineChart
      data={{
        labels: labels || [],
        datasets: [{ data }],
      }}
      width={screenWidth - 48}
      height={220}
      yAxisLabel="$"
      chartConfig={{
        backgroundColor: '#fff',
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(30, 58, 138, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(107, 114, 128, ${opacity})`,
        style: { borderRadius: 16 },
        propsForDots: { r: '4', strokeWidth: '2', stroke: '#10B981' },
        propsForBackgroundLines: { stroke: '#E5E7EB' },
      }}
      bezier
      style={{ marginVertical: 8, borderRadius: 16 }}
    />
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 8,
    marginHorizontal: 8,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
});

export default PriceGraph; 