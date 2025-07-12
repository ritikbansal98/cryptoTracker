import { StyleSheet } from 'react-native';
import { COLORS, THEME } from '../constants/colors';

// Global styles
export const globalStyles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  
  // Card styles
  card: {
    backgroundColor: COLORS.CARD_BACKGROUND,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: COLORS.SHADOW,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  // Text styles
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
    marginBottom: 8,
  },
  
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.TEXT_PRIMARY,
    marginBottom: 4,
  },
  
  bodyText: {
    fontSize: 16,
    color: COLORS.TEXT_PRIMARY,
    lineHeight: 24,
  },
  
  caption: {
    fontSize: 14,
    color: COLORS.TEXT_SECONDARY,
    lineHeight: 20,
  },
  
  // Button styles
  button: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  buttonText: {
    color: COLORS.BACKGROUND,
    fontSize: 16,
    fontWeight: '600',
  },
  
  // Input styles
  input: {
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: COLORS.TEXT_PRIMARY,
    backgroundColor: COLORS.BACKGROUND,
  },
  
  // Row and column layouts
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  rowSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  column: {
    flexDirection: 'column',
  },
  
  // Spacing utilities
  marginTop: {
    marginTop: 16,
  },
  
  marginBottom: {
    marginBottom: 16,
  },
  
  padding: {
    padding: 16,
  },
  
  paddingHorizontal: {
    paddingHorizontal: 16,
  },
  
  paddingVertical: {
    paddingVertical: 16,
  },
  
  // Flex utilities
  flex1: {
    flex: 1,
  },
  
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Status indicators
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  
  statusOnline: {
    backgroundColor: COLORS.SUCCESS,
  },
  
  statusOffline: {
    backgroundColor: COLORS.ERROR,
  },
});

// Theme-aware styles
export const createThemeStyles = (isDark: boolean) => {
  const theme = isDark ? THEME.dark : THEME.light;
  
  return StyleSheet.create({
    container: {
      ...globalStyles.container,
      backgroundColor: theme.background,
    },
    
    card: {
      ...globalStyles.card,
      backgroundColor: theme.cardBackground,
    },
    
    title: {
      ...globalStyles.title,
      color: theme.textPrimary,
    },
    
    subtitle: {
      ...globalStyles.subtitle,
      color: theme.textPrimary,
    },
    
    bodyText: {
      ...globalStyles.bodyText,
      color: theme.textPrimary,
    },
    
    caption: {
      ...globalStyles.caption,
      color: theme.textSecondary,
    },
    
    input: {
      ...globalStyles.input,
      borderColor: theme.border,
      backgroundColor: theme.background,
      color: theme.textPrimary,
    },
  });
}; 