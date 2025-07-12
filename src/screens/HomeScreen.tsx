import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';
import Header from '../components/Header';
import PriceList from '../components/PriceList';
import {
  connectWebSocket,
  disconnectWebSocket,
  onWebSocketPriceUpdate,
  onWebSocketConnectionChange,
} from '../services/websocket';
import { PriceData } from '../types/crypto';
import { COLORS } from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

const PAGE_SIZE = 5;
const TRACKED_SYMBOLS = [
  'btcusdt@ticker',
  'ethusdt@ticker',
  'bnbusdt@ticker',
  'adausdt@ticker',
  'solusdt@ticker',
  'dotusdt@ticker',
  'linkusdt@ticker',
  'ltcusdt@ticker',
  'xrpusdt@ticker',
  'dogeusdt@ticker',
  'maticusdt@ticker',
  'avaxusdt@ticker',
  'shibusdt@ticker',
  'trxusdt@ticker',
  'uniusdt@ticker',
  'atomusdt@ticker',
  'etcusdt@ticker',
  'xlmusdt@ticker',
  'vetusdt@ticker',
  'filusdt@ticker',
];

const HomeScreen: React.FC = () => {
  const [prices, setPrices] = useState<PriceData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date | undefined>(undefined);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isPaginating, setIsPaginating] = useState(false);
  const pricesRef = useRef<{ [symbol: string]: PriceData }>({});
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    setIsLoading(true);
    connectWebSocket(TRACKED_SYMBOLS);
    const unsubPrice = onWebSocketPriceUpdate((data) => {
      pricesRef.current[data.symbol] = data;
      setPrices(Object.values(pricesRef.current));
      setLastUpdate(new Date());
      setIsLoading(false);
    });
    const unsubConn = onWebSocketConnectionChange(setIsConnected);
    return () => {
      unsubPrice();
      unsubConn();
      disconnectWebSocket();
    };
  }, []);

  const handleRefresh = () => {
    setIsLoading(true);
    setPrices([]);
    pricesRef.current = {};
    setVisibleCount(PAGE_SIZE);
    disconnectWebSocket();
    setTimeout(() => {
      connectWebSocket(TRACKED_SYMBOLS);
    }, 500);
  };

  const handleItemPress = (symbol: string) => {
    navigation.navigate('Graph', { symbol });
  };

  const handleLoadMore = () => {
    if (visibleCount < prices.length) {
      setIsPaginating(true);
      setTimeout(() => {
        setVisibleCount((prev) => prev + PAGE_SIZE);
        setIsPaginating(false);
      }, 500);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'light-content' : 'light-content'}
        backgroundColor={COLORS.PRIMARY}
      />
      <View style={styles.container}>
        <Header isConnected={isConnected} lastUpdate={lastUpdate} />
        <PriceList
          data={prices.slice(0, visibleCount)}
          isLoading={isLoading}
          onRefresh={handleRefresh}
          onItemPress={handleItemPress}
          onEndReached={handleLoadMore}
          isPaginating={isPaginating}
        />
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
  },
});

export default HomeScreen;
