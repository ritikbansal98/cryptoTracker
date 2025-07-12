import React from 'react';
import { FlatList, View, Text, RefreshControl, ActivityIndicator } from 'react-native';
import { PriceData } from '../types/crypto';
import { COLORS } from '../constants/colors';
import PriceCard from './PriceCard';
import { styles } from './PriceList.styles';

interface PriceListProps {
  data: PriceData[];
  isLoading: boolean;
  onRefresh?: () => void;
  onItemPress: (symbol: string) => void;
  onEndReached?: () => void;
  isPaginating?: boolean;
}

const PriceList: React.FC<PriceListProps> = ({
  data,
  isLoading,
  onRefresh,
  onItemPress,
  onEndReached,
  isPaginating,
}) => {
  const renderItem = ({ item }: { item: PriceData }) => (
    <PriceCard
      data={item}
      onPress={() => onItemPress(item.symbol)}
    />
  );

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyTitle}>No Data Available</Text>
      <Text style={styles.emptySubtitle}>
        {isLoading ? 'Loading cryptocurrency data...' : 'Pull to refresh'}
      </Text>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Live Prices</Text>
      <Text style={styles.headerSubtitle}>
        {data.length} cryptocurrencies tracked
      </Text>
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Data provided by Binance</Text>
      {isPaginating && (
        <ActivityIndicator size="small" color={COLORS.PRIMARY} style={{ marginTop: 8 }} />
      )}
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.symbol}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={onRefresh}
          colors={[COLORS.PRIMARY]}
          tintColor={COLORS.PRIMARY}
        />
      }
      ListEmptyComponent={renderEmptyState}
      ListHeaderComponent={data.length > 0 ? renderHeader : null}
      ListFooterComponent={data.length > 0 ? renderFooter : null}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

export default PriceList; 