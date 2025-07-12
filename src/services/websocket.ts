import { WEBSOCKET } from '../constants';
import { PriceData } from '../types/crypto';

let ws: WebSocket | null = null;
let messageHandlers: ((data: PriceData) => void)[] = [];
let connectionHandlers: ((connected: boolean) => void)[] = [];
let isConnecting = false;

export function connectWebSocket(symbols: string[] = Object.values(WEBSOCKET.STREAMS)) {
  if (isConnecting || ws?.readyState === WebSocket.OPEN) return;
  isConnecting = true;
  const streams = symbols.join('/');
  const url = `${WEBSOCKET.BINANCE_URL}${streams}`;
  ws = new WebSocket(url);

  ws.onopen = () => {
    isConnecting = false;
    connectionHandlers.forEach((cb) => cb(true));
  };
  ws.onmessage = (event) => {
    try {
      const message = JSON.parse(event.data);
      const data = message.data;
      if (!data || !data.s) return;
      const price = parseFloat(data.c);
      const priceChange = parseFloat(data.p);
      const priceChangePercent = parseFloat(data.P);
      const volume = parseFloat(data.v);
      const high24h = parseFloat(data.h);
      const low24h = parseFloat(data.l);
      if (!isNaN(price) && !isNaN(priceChange)) {
        const priceData: PriceData = {
          symbol: data.s,
          price,
          priceChange,
          priceChangePercent,
          volume,
          high24h,
          low24h,
          lastUpdated: new Date(data.E ? data.E : Date.now()),
          isPositive: priceChange >= 0,
        };
        messageHandlers.forEach((cb) => cb(priceData));
      }
    } catch (e) {}
  };
  ws.onclose = () => {
    isConnecting = false;
    connectionHandlers.forEach((cb) => cb(false));
  };
  ws.onerror = () => {
    isConnecting = false;
    connectionHandlers.forEach((cb) => cb(false));
  };
}

export function disconnectWebSocket() {
  if (ws) ws.close();
  ws = null;
  isConnecting = false;
}

export function onWebSocketPriceUpdate(cb: (data: PriceData) => void) {
  messageHandlers.push(cb);
  return () => {
    messageHandlers = messageHandlers.filter((h) => h !== cb);
  };
}

export function onWebSocketConnectionChange(cb: (connected: boolean) => void) {
  connectionHandlers.push(cb);
  return () => {
    connectionHandlers = connectionHandlers.filter((h) => h !== cb);
  };
} 