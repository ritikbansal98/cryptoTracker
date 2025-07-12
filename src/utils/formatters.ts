// Number formatting utilities
export const formatPrice = (price: number | string): string => {
  const numPrice = typeof price === 'string' ? parseFloat(price) : price;
  
  if (numPrice >= 1) {
    return numPrice.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  } else {
    return numPrice.toLocaleString('en-US', {
      minimumFractionDigits: 6,
      maximumFractionDigits: 8,
    });
  }
};

export const formatPriceChange = (change: number | string): string => {
  const numChange = typeof change === 'string' ? parseFloat(change) : change;
  const sign = numChange >= 0 ? '+' : '';
  return `${sign}${formatPrice(numChange)}`;
};

export const formatPriceChangePercent = (percent: number | string): string => {
  const numPercent = typeof percent === 'string' ? parseFloat(percent) : percent;
  const sign = numPercent >= 0 ? '+' : '';
  return `${sign}${numPercent.toFixed(2)}%`;
};

export const formatVolume = (volume: number | string): string => {
  const numVolume = typeof volume === 'string' ? parseFloat(volume) : volume;
  
  if (numVolume >= 1e9) {
    return `${(numVolume / 1e9).toFixed(2)}B`;
  } else if (numVolume >= 1e6) {
    return `${(numVolume / 1e6).toFixed(2)}M`;
  } else if (numVolume >= 1e3) {
    return `${(numVolume / 1e3).toFixed(2)}K`;
  } else {
    return numVolume.toLocaleString('en-US');
  }
};

// Date formatting utilities
export const formatTimestamp = (timestamp: number | Date): string => {
  const date = typeof timestamp === 'number' ? new Date(timestamp) : timestamp;
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

export const formatDate = (timestamp: number | Date): string => {
  const date = typeof timestamp === 'number' ? new Date(timestamp) : timestamp;
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

// Symbol formatting utilities
export const formatSymbol = (symbol: string): string => {
  // Convert BTCUSDT to BTC/USDT
  if (symbol.endsWith('USDT')) {
    return symbol.replace('USDT', '/USDT');
  }
  if (symbol.endsWith('BTC')) {
    return symbol.replace('BTC', '/BTC');
  }
  if (symbol.endsWith('ETH')) {
    return symbol.replace('ETH', '/ETH');
  }
  return symbol;
};

export const getSymbolName = (symbol: string): string => {
  const symbolMap: { [key: string]: string } = {
    BTCUSDT: 'Bitcoin',
    ETHUSDT: 'Ethereum',
    BNBUSDT: 'Binance Coin',
    ADAUSDT: 'Cardano',
    SOLUSDT: 'Solana',
    DOTUSDT: 'Polkadot',
    LINKUSDT: 'Chainlink',
    LTCUSDT: 'Litecoin',
    XRPUSDT: 'Ripple',
    DOGEUSDT: 'Dogecoin',
  };
  
  return symbolMap[symbol] || symbol;
};

// Color utilities
export const getPriceChangeColor = (change: number): string => {
  if (change > 0) return '#10B981'; // Green
  if (change < 0) return '#EF4444'; // Red
  return '#6B7280'; // Gray
};

// Validation utilities
export const isValidPrice = (price: string | number): boolean => {
  const numPrice = typeof price === 'string' ? parseFloat(price) : price;
  return !isNaN(numPrice) && numPrice > 0;
};

export const isValidSymbol = (symbol: string): boolean => {
  return /^[A-Z0-9]+$/.test(symbol) && symbol.length >= 3;
}; 