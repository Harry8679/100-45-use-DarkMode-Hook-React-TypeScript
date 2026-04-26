import { useState, useEffect, useCallback } from 'react';

interface UseDarkModeOptions {
  defaultTheme?: 'light' | 'dark' | 'system';
  storageKey?: string;
  classNameDark?: string;
  classNameLight?: string;
}

interface UseDarkModeReturn {
  isDarkMode: boolean;
  theme: 'light' | 'dark' | 'system';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  systemPreference: 'light' | 'dark';
}

export const useDarkMode = (options: UseDarkModeOptions = {}): UseDarkModeReturn => {
  const {
    defaultTheme = 'system',
    storageKey = 'theme-preference',
    classNameDark = 'dark',
    classNameLight = 'light',
  } = options;

  // Detect system preference
  const getSystemPreference = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [systemPreference, setSystemPreference] = useState<'light' | 'dark'>(getSystemPreference);

  // Get initial theme from localStorage or default
  const getInitialTheme = (): 'light' | 'dark' | 'system' => {
    if (typeof window === 'undefined') return defaultTheme;
    
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored && (stored === 'light' || stored === 'dark' || stored === 'system')) {
        return stored;
      }
    } catch (error) {
      console.error('Error reading theme from localStorage:', error);
    }
    
    return defaultTheme;
  };

  const [theme, setThemeState] = useState<'light' | 'dark' | 'system'>(getInitialTheme);

  // Calculate actual dark mode state
  const isDarkMode = theme === 'system' ? systemPreference === 'dark' : theme === 'dark';

  // Apply theme to document
  const applyTheme = useCallback(
    (isDark: boolean) => {
      if (typeof window === 'undefined') return;

      const root = document.documentElement;
      
      if (isDark) {
        root.classList.remove(classNameLight);
        root.classList.add(classNameDark);
      } else {
        root.classList.remove(classNameDark);
        root.classList.add(classNameLight);
      }
    },
    [classNameDark, classNameLight]
  );

  // Set theme with persistence
  const setTheme = useCallback(
    (newTheme: 'light' | 'dark' | 'system') => {
      setThemeState(newTheme);
      
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch (error) {
        console.error('Error saving theme to localStorage:', error);
      }

      const isDark = newTheme === 'system' 
        ? systemPreference === 'dark' 
        : newTheme === 'dark';
      
      applyTheme(isDark);
    },
    [storageKey, systemPreference, applyTheme]
  );

  // Toggle between light and dark (skip system)
  const toggleTheme = useCallback(() => {
    if (theme === 'system') {
      setTheme(systemPreference === 'dark' ? 'light' : 'dark');
    } else {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }
  }, [theme, systemPreference, setTheme]);

  // Listen to system preference changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemPreference(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // Apply theme on mount and when dependencies change
  useEffect(() => {
    applyTheme(isDarkMode);
  }, [isDarkMode, applyTheme]);

  return {
    isDarkMode,
    theme,
    toggleTheme,
    setTheme,
    systemPreference,
  };
};