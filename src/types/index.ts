// Types pour dark mode - AUCUN ANY

export type Theme = 'light' | 'dark' | 'system';

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  accent: string;
}

export interface CustomTheme {
  id: string;
  name: string;
  emoji: string;
  colors: {
    light: ThemeColors;
    dark: ThemeColors;
  };
}

export interface ThemeSettings {
  theme: Theme;
  customThemeId: string | null;
  transitions: boolean;
  autoSwitch: boolean;
  switchTime: {
    dark: string;
    light: string;
  };
}