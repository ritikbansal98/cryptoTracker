// Color palette for the app
export const COLORS = {
  // Primary colors
  PRIMARY: '#1E3A8A',
  PRIMARY_DARK: '#1E40AF',
  PRIMARY_LIGHT: '#3B82F6',
  
  // Secondary colors
  SECONDARY: '#10B981',
  SECONDARY_DARK: '#059669',
  SECONDARY_LIGHT: '#34D399',
  
  // Background colors
  BACKGROUND: '#FFFFFF',
  BACKGROUND_DARK: '#0F172A',
  CARD_BACKGROUND: '#F8FAFC',
  CARD_BACKGROUND_DARK: '#1E293B',
  
  // Text colors
  TEXT_PRIMARY: '#1F2937',
  TEXT_SECONDARY: '#6B7280',
  TEXT_LIGHT: '#9CA3AF',
  TEXT_DARK: '#F9FAFB',
  
  // Status colors
  SUCCESS: '#10B981',
  ERROR: '#EF4444',
  WARNING: '#F59E0B',
  INFO: '#3B82F6',
  
  // Price change colors
  PRICE_UP: '#10B981',
  PRICE_DOWN: '#EF4444',
  PRICE_NEUTRAL: '#6B7280',
  
  // Border colors
  BORDER: '#E5E7EB',
  BORDER_DARK: '#374151',
  
  // Shadow colors
  SHADOW: 'rgba(0, 0, 0, 0.1)',
  SHADOW_DARK: 'rgba(0, 0, 0, 0.3)',
  
  // Transparent colors
  TRANSPARENT: 'transparent',
  OVERLAY: 'rgba(0, 0, 0, 0.5)',
};

// Theme colors
export const THEME = {
  light: {
    background: COLORS.BACKGROUND,
    cardBackground: COLORS.CARD_BACKGROUND,
    textPrimary: COLORS.TEXT_PRIMARY,
    textSecondary: COLORS.TEXT_SECONDARY,
    border: COLORS.BORDER,
  },
  dark: {
    background: COLORS.BACKGROUND_DARK,
    cardBackground: COLORS.CARD_BACKGROUND_DARK,
    textPrimary: COLORS.TEXT_DARK,
    textSecondary: COLORS.TEXT_LIGHT,
    border: COLORS.BORDER_DARK,
  },
}; 