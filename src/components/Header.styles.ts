import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
    paddingTop: moderateVerticalScale(50), // Safe area for status bar
    paddingBottom: moderateVerticalScale(16),
    paddingHorizontal: moderateScale(16),
    shadowColor: COLORS.SHADOW,
    shadowOffset: {
      width: 0,
      height: moderateVerticalScale(2),
    },
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(4),
    elevation: 4,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    color: COLORS.BACKGROUND,
    marginBottom: moderateVerticalScale(2),
  },
  subtitle: {
    fontSize: moderateScale(14),
    color: COLORS.BACKGROUND,
    opacity: 0.8,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIndicator: {
    width: moderateScale(8),
    height: moderateScale(8),
    borderRadius: moderateScale(4),
    marginRight: moderateScale(6),
  },
  statusOnline: {
    backgroundColor: COLORS.SUCCESS,
  },
  statusOffline: {
    backgroundColor: COLORS.ERROR,
  },
  statusText: {
    fontSize: moderateScale(12),
    fontWeight: '600',
  },
  updateContainer: {
    marginTop: moderateVerticalScale(8),
    alignItems: 'center',
  },
  updateText: {
    fontSize: moderateScale(11),
    color: COLORS.BACKGROUND,
    opacity: 0.7,
  },
});

export default styles; 