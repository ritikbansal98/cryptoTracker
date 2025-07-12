// Navigation constants
export const ROUTES = {
  HOME: 'Home',
  DETAILS: 'Details',
  GRAPH: 'Graph',
};

// Component paths
export const COMPONENTS = {
  PRICE_CARD: 'PriceCard',
  PRICE_LIST: 'PriceList',
  HEADER: 'Header',
  GRAPH_VIEW: 'GraphView',
};

// WebSocket constants
export const WEBSOCKET = {
  BINANCE_URL: 'wss://stream.binance.com:9443/stream?streams=',
  STREAMS: {
    BTC_USDT: 'btcusdt@ticker',
    ETH_USDT: 'ethusdt@ticker',
    BNB_USDT: 'bnbusdt@ticker',
    ADA_USDT: 'adausdt@ticker',
    SOL_USDT: 'solusdt@ticker',
  },
};

// API constants
export const API = {
  BINANCE_REST: 'https://api.binance.com/api/v3',
};

// App constants
export const APP = {
  NAME: 'Crypto Tracker',
  VERSION: '1.0.0',
  UPDATE_INTERVAL: 1000, // 1 second
}; 