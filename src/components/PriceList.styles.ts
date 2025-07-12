import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: moderateVerticalScale(8),
  },
  header: {
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateVerticalScale(12),
    backgroundColor: COLORS.BACKGROUND,
  },
  headerTitle: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
    marginBottom: moderateVerticalScale(4),
  },
  headerSubtitle: {
    fontSize: moderateScale(14),
    color: COLORS.TEXT_SECONDARY,
  },
  separator: {
    height: moderateVerticalScale(4),
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: moderateVerticalScale(60),
  },
  emptyTitle: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    color: COLORS.TEXT_PRIMARY,
    marginBottom: moderateVerticalScale(8),
  },
  emptySubtitle: {
    fontSize: moderateScale(14),
    color: COLORS.TEXT_SECONDARY,
    textAlign: 'center',
  },
  footer: {
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateVerticalScale(16),
    alignItems: 'center',
  },
  footerText: {
    fontSize: moderateScale(12),
    color: COLORS.TEXT_LIGHT,
  },
}); 