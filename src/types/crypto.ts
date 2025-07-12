// Cryptocurrency data types
export interface CryptoPrice {
  symbol: string;
  price: string;
  priceChange: string;
  priceChangePercent: string;
  weightedAvgPrice: string;
  prevClosePrice: string;
  lastPrice: string;
  lastQty: string;
  bidPrice: string;
  bidQty: string;
  askPrice: string;
  askQty: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  quoteVolume: string;
  openTime: number;
  closeTime: number;
  firstId: number;
  lastId: number;
  count: number;
  timestamp: number;
}

// Simplified price data for UI
export interface PriceData {
  symbol: string;
  price: number;
  priceChange: number;
  priceChangePercent: number;
  volume: number;
  high24h: number;
  low24h: number;
  lastUpdated: Date;
  isPositive: boolean;
}

// WebSocket message types
export interface WebSocketMessage {
  stream: string;
  data: CryptoPrice;
}

// Chart data point
export interface ChartDataPoint {
  timestamp: number;
  price: number;
}

// App state types
export interface AppState {
  prices: PriceData[];
  isLoading: boolean;
  isConnected: boolean;
  error: string | null;
  selectedSymbol: string | null;
}

// Navigation types
export interface RootStackParamList {
  Home: undefined;
  Details: { symbol: string };
  Graph: { symbol: string };
} 