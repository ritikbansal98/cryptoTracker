import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.CARD_BACKGROUND,
    borderRadius: moderateScale(12),
    padding: moderateScale(16),
    marginHorizontal: moderateScale(16),
    marginVertical: moderateVerticalScale(6),
    shadowColor: COLORS.SHADOW,
    shadowOffset: {
      width: 0,
      height: moderateVerticalScale(2),
    },
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(4),
    elevation: 3,
  },
  cardPressable: {
    shadowOpacity: 0.15,
    shadowRadius: moderateScale(6),
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: moderateVerticalScale(12),
  },
  symbolContainer: {
    flex: 1,
  },
  symbol: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
    marginBottom: moderateVerticalScale(2),
  },
  name: {
    fontSize: moderateScale(14),
    color: COLORS.TEXT_SECONDARY,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
    marginBottom: moderateVerticalScale(4),
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeIcon: {
    fontSize: moderateScale(12),
    marginRight: moderateScale(4),
  },
  priceChange: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    marginRight: moderateScale(6),
  },
  priceChangePercent: {
    fontSize: moderateScale(12),
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: moderateVerticalScale(8),
    borderTopWidth: 1,
    borderTopColor: COLORS.BORDER,
  },
  volumeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  volumeLabel: {
    fontSize: moderateScale(12),
    color: COLORS.TEXT_SECONDARY,
    marginRight: moderateScale(4),
  },
  volume: {
    fontSize: moderateScale(12),
    fontWeight: '600',
    color: COLORS.TEXT_PRIMARY,
  },
  timestamp: {
    fontSize: moderateScale(11),
    color: COLORS.TEXT_LIGHT,
  },
}); 