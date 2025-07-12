import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';
import PriceGraph from '../components/PriceGraph';
import {
  onWebSocketPriceUpdate,
} from '../services/websocket';
import { COLORS } from '../constants/colors';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const MAX_POINTS = 10;
const MIN_POINTS = 5;

type GraphScreenRouteProp = RouteProp<RootStackParamList, 'Graph'>;

const GraphScreen: React.FC = () => {
  const route = useRoute<GraphScreenRouteProp>();
  const symbol = route.params.symbol;
  const [priceHistory, setPriceHistory] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [latest, setLatest] = useState<any>(null);
  const historyRef = useRef<number[]>([]);
  const labelRef = useRef<string[]>([]);

  useEffect(() => {
    const unsub = onWebSocketPriceUpdate((data) => {
      if (data.symbol === symbol) {
        historyRef.current = [...historyRef.current, data.price].slice(-MAX_POINTS);
        labelRef.current = [...labelRef.current, new Date().toLocaleTimeString()].slice(-MAX_POINTS);
        setPriceHistory([...historyRef.current]);
        setLabels([...labelRef.current]);
        setLatest(data);
      }
    });
    return () => unsub();
  }, [symbol]);

  const validPrices = priceHistory.filter((n) => typeof n === 'number' && isFinite(n) && !isNaN(n) && n > 0);
  const chartPrices = validPrices.slice(-MIN_POINTS);
  const chartLabels = labels.slice(-MIN_POINTS);
  const currentPrice = latest?.price ?? (validPrices.length > 0 ? validPrices[validPrices.length - 1] : 0);
  const high24h = latest?.high24h;
  const low24h = latest?.low24h;
  const priceChange = latest?.priceChange;
  const priceChangePercent = latest?.priceChangePercent;
  const isPositive = latest?.isPositive;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'light-content' : 'light-content'}
        backgroundColor={COLORS.PRIMARY}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{symbol} Price Graph</Text>
        <View style={styles.summaryCard}>
          <Text style={styles.label}>Current Price</Text>
          <Text style={[styles.price, { color: isPositive ? COLORS.PRICE_UP : COLORS.PRICE_DOWN }]}>${currentPrice?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 8 })}</Text>
          <View style={styles.row}>
            <Text style={styles.label}>24h High: </Text>
            <Text style={styles.value}>{high24h ? `$${high24h.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 8 })}` : '-'}</Text>
            <Text style={[styles.label, { marginLeft: moderateScale(16) }]}>24h Low: </Text>
            <Text style={styles.value}>{low24h ? `$${low24h.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 8 })}` : '-'}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Change: </Text>
            <Text style={{ color: isPositive ? COLORS.PRICE_UP : COLORS.PRICE_DOWN, fontWeight: 'bold' }}>{priceChange ? `${priceChange > 0 ? '+' : ''}${priceChange.toFixed(2)}` : '-'}</Text>
            <Text style={{ color: isPositive ? COLORS.PRICE_UP : COLORS.PRICE_DOWN, marginLeft: moderateScale(8), fontWeight: 'bold' }}>{priceChangePercent ? `(${priceChangePercent > 0 ? '+' : ''}${priceChangePercent.toFixed(2)}%)` : ''}</Text>
          </View>
        </View>
        {chartPrices.length < MIN_POINTS ? (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Waiting for live data...</Text>
          </View>
        ) : (
          <>
            <PriceGraph data={chartPrices} labels={chartLabels} />
            <Text style={styles.axisLabel}>
              X-axis: Time (last {MIN_POINTS} updates) | Y-axis: Price (USD)
            </Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
    padding: moderateScale(8),
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
    marginBottom: moderateVerticalScale(8),
    textAlign: 'center',
  },
  summaryCard: {
    backgroundColor: '#fff',
    borderRadius: moderateScale(16),
    padding: moderateScale(16),
    marginHorizontal: moderateScale(8),
    marginBottom: moderateVerticalScale(8),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: moderateVerticalScale(2) },
    shadowOpacity: 0.08,
    shadowRadius: moderateScale(8),
    elevation: 2,
  },
  price: {
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    marginBottom: moderateVerticalScale(8),
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateVerticalScale(4),
    justifyContent: 'center',
  },
  label: {
    fontSize: moderateScale(14),
    color: COLORS.TEXT_SECONDARY,
  },
  value: {
    fontSize: moderateScale(14),
    color: COLORS.TEXT_PRIMARY,
    fontWeight: '600',
  },
  placeholder: {
    backgroundColor: '#fff',
    borderRadius: moderateScale(16),
    padding: moderateScale(32),
    marginHorizontal: moderateScale(8),
    marginVertical: moderateVerticalScale(8),
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: moderateVerticalScale(220),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: moderateVerticalScale(2) },
    shadowOpacity: 0.08,
    shadowRadius: moderateScale(8),
    elevation: 3,
  },
  placeholderText: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  axisLabel: {
    textAlign: 'center',
    color: COLORS.TEXT_SECONDARY,
    fontSize: moderateScale(12),
    marginTop: moderateVerticalScale(4),
    marginBottom: moderateVerticalScale(8),
  },
});

export default GraphScreen; 