import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../constants/colors';
import { APP } from '../constants';
import styles from './Header.styles';

interface HeaderProps {
  isConnected: boolean;
  lastUpdate?: Date;
}

const Header: React.FC<HeaderProps> = ({ isConnected, lastUpdate }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{APP.NAME}</Text>
          <Text style={styles.subtitle}>Real-time Crypto Prices</Text>
        </View>

        <View style={styles.statusContainer}>
          <View
            style={[
              styles.statusIndicator,
              isConnected ? styles.statusOnline : styles.statusOffline,
            ]}
          />
          <Text
            style={[
              styles.statusText,
              { color: isConnected ? COLORS.SUCCESS : COLORS.ERROR },
            ]}
          >
            {isConnected ? 'Live' : 'Offline'}
          </Text>
        </View>
      </View>

      {lastUpdate && (
        <View style={styles.updateContainer}>
          <Text style={styles.updateText}>
            Last update: {lastUpdate.toLocaleTimeString()}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Header;
