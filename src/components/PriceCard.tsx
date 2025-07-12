import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { PriceData } from '../types/crypto';
import { COLORS } from '../constants/colors';
import {
  formatPrice,
  formatPriceChange,
  formatPriceChangePercent,
  formatSymbol,
  getSymbolName,
} from '../utils/formatters';
import { styles } from './PriceCard.styles';

interface PriceCardProps {
  data: PriceData;
  onPress?: () => void;
}

const PriceCard: React.FC<PriceCardProps> = ({ data, onPress }) => {
  const {
    symbol,
    price,
    priceChange,
    priceChangePercent,
    volume,
    lastUpdated,
    isPositive,
  } = data;

  const priceChangeColor = isPositive ? COLORS.PRICE_UP : COLORS.PRICE_DOWN;
  const priceChangeIcon = isPositive ? '↗' : '↘';

  return (
    <TouchableOpacity
      style={[styles.card, onPress && styles.cardPressable]}
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      <View style={styles.header}>
        <View style={styles.symbolContainer}>
          <Text style={styles.symbol}>{formatSymbol(symbol)}</Text>
          <Text style={styles.name}>{getSymbolName(symbol)}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${formatPrice(price)}</Text>
          <View style={styles.changeContainer}>
            <Text style={[styles.changeIcon, { color: priceChangeColor }]}>
              {priceChangeIcon}
            </Text>
            <Text style={[styles.priceChange, { color: priceChangeColor }]}>
              {formatPriceChange(priceChange)}
            </Text>
            <Text
              style={[styles.priceChangePercent, { color: priceChangeColor }]}
            >
              {formatPriceChangePercent(priceChangePercent)}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.volumeContainer}>
          <Text style={styles.volumeLabel}>Volume:</Text>
          <Text style={styles.volume}>{formatPrice(volume)}</Text>
        </View>
        <Text style={styles.timestamp}>{lastUpdated.toLocaleTimeString()}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PriceCard;
