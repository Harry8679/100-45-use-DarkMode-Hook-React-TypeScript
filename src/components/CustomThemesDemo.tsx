import { useState } from 'react';
import { useDarkMode } from '../hooks';
import type { CustomTheme } from '../types';

const CustomThemesDemo = () => {
  const { isDarkMode } = useDarkMode();
  const [selectedTheme, setSelectedTheme] = useState<string>('default');

  const customThemes: CustomTheme[] = [
    {
      id: 'default',
      name: 'Défaut',
      emoji: '🎨',
      colors: {
        light: {
          primary: '#3B82F6',
          secondary: '#8B5CF6',
          background: '#FFFFFF',
          surface: '#F3F4F6',
          text: '#1F2937',
          textSecondary: '#6B7280',
          border: '#E5E7EB',
          accent: '#10B981',
        },
        dark: {
          primary: '#60A5FA',
          secondary: '#A78BFA',
          background: '#111827',
          surface: '#1F2937',
          text: '#F9FAFB',
          textSecondary: '#D1D5DB',
          border: '#374151',
          accent: '#34D399',
        },
      },
    },
    {
      id: 'ocean',
      name: 'Océan',
      emoji: '🌊',
      colors: {
        light: {
          primary: '#0EA5E9',
          secondary: '#06B6D4',
          background: '#F0F9FF',
          surface: '#E0F2FE',
          text: '#0C4A6E',
          textSecondary: '#075985',
          border: '#BAE6FD',
          accent: '#0284C7',
        },
        dark: {
          primary: '#38BDF8',
          secondary: '#22D3EE',
          background: '#082F49',
          surface: '#0C4A6E',
          text: '#F0F9FF',
          textSecondary: '#7DD3FC',
          border: '#075985',
          accent: '#0EA5E9',
        },
      },
    },
    {
      id: 'sunset',
      name: 'Coucher de Soleil',
      emoji: '🌅',
      colors: {
        light: {
          primary: '#F97316',
          secondary: '#FB923C',
          background: '#FFF7ED',
          surface: '#FFEDD5',
          text: '#7C2D12',
          textSecondary: '#9A3412',
          border: '#FED7AA',
          accent: '#EA580C',
        },
        dark: {
          primary: '#FB923C',
          secondary: '#FDBA74',
          background: '#431407',
          surface: '#7C2D12',
          text: '#FFF7ED',
          textSecondary: '#FED7AA',
          border: '#9A3412',
          accent: '#F97316',
        },
      },
    },
    {
      id: 'forest',
      name: 'Forêt',
      emoji: '🌲',
      colors: {
        light: {
          primary: '#22C55E',
          secondary: '#4ADE80',
          background: '#F0FDF4',
          surface: '#DCFCE7',
          text: '#14532D',
          textSecondary: '#166534',
          border: '#BBF7D0',
          accent: '#16A34A',
        },
        dark: {
          primary: '#4ADE80',
          secondary: '#86EFAC',
          background: '#052E16',
          surface: '#14532D',
          text: '#F0FDF4',
          textSecondary: '#BBF7D0',
          border: '#166534',
          accent: '#22C55E',
        },
      },
    },
    {
      id: 'purple',
      name: 'Violet',
      emoji: '💜',
      colors: {
        light: {
          primary: '#A855F7',
          secondary: '#C084FC',
          background: '#FAF5FF',
          surface: '#F3E8FF',
          text: '#4C1D95',
          textSecondary: '#6B21A8',
          border: '#E9D5FF',
          accent: '#9333EA',
        },
        dark: {
          primary: '#C084FC',
          secondary: '#D8B4FE',
          background: '#2E1065',
          surface: '#4C1D95',
          text: '#FAF5FF',
          textSecondary: '#E9D5FF',
          border: '#6B21A8',
          accent: '#A855F7',
        },
      },
    },
    {
      id: 'rose',
      name: 'Rose',
      emoji: '🌹',
      colors: {
        light: {
          primary: '#F43F5E',
          secondary: '#FB7185',
          background: '#FFF1F2',
          surface: '#FFE4E6',
          text: '#881337',
          textSecondary: '#9F1239',
          border: '#FECDD3',
          accent: '#E11D48',
        },
        dark: {
          primary: '#FB7185',
          secondary: '#FDA4AF',
          background: '#4C0519',
          surface: '#881337',
          text: '#FFF1F2',
          textSecondary: '#FECDD3',
          border: '#9F1239',
          accent: '#F43F5E',
        },
      },
    },
  ];

  const currentTheme = customThemes.find(t => t.id === selectedTheme) || customThemes[0];
  const currentColors = isDarkMode ? currentTheme.colors.dark : currentTheme.colors.light;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Thèmes Personnalisés
      </h3>

      <div className="space-y-6">
        {/* Theme Selector */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Choisir un thème :
          </label>
          <div className="grid grid-cols-3 gap-3">
            {customThemes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setSelectedTheme(theme.id)}
                className={`p-3 rounded-lg transition-all transform ${
                  selectedTheme === theme.id
                    ? 'bg-blue-500 text-white scale-105 shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <div className="text-2xl mb-1">{theme.emoji}</div>
                <div className="text-xs font-semibold">{theme.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Theme Preview */}
        <div
          className="p-6 rounded-xl border-2 transition-colors"
          style={{
            backgroundColor: currentColors.background,
            borderColor: currentColors.border,
          }}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="text-4xl">{currentTheme.emoji}</div>
              <div>
                <h4
                  className="text-2xl font-bold"
                  style={{ color: currentColors.text }}
                >
                  {currentTheme.name}
                </h4>
                <p style={{ color: currentColors.textSecondary }}>
                  Aperçu du thème en mode {isDarkMode ? 'sombre' : 'clair'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div
                className="p-4 rounded-lg"
                style={{ backgroundColor: currentColors.surface }}
              >
                <div
                  className="font-semibold mb-2"
                  style={{ color: currentColors.text }}
                >
                  Surface
                </div>
                <div
                  className="text-sm"
                  style={{ color: currentColors.textSecondary }}
                >
                  Cartes et conteneurs
                </div>
              </div>

              <div
                className="p-4 rounded-lg"
                style={{ backgroundColor: currentColors.primary }}
              >
                <div className="font-semibold text-white mb-2">
                  Primaire
                </div>
                <div className="text-sm text-white/90">
                  Boutons et actions
                </div>
              </div>

              <div
                className="p-4 rounded-lg"
                style={{ backgroundColor: currentColors.secondary }}
              >
                <div className="font-semibold text-white mb-2">
                  Secondaire
                </div>
                <div className="text-sm text-white/90">
                  Accents secondaires
                </div>
              </div>

              <div
                className="p-4 rounded-lg"
                style={{ backgroundColor: currentColors.accent }}
              >
                <div className="font-semibold text-white mb-2">
                  Accent
                </div>
                <div className="text-sm text-white/90">
                  Highlights
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div>
          <h4 className="font-bold text-gray-800 dark:text-white mb-3">
            Palette de couleurs :
          </h4>
          <div className="grid grid-cols-4 gap-2">
            {Object.entries(currentColors).map(([name, color]) => (
              <div key={name} className="space-y-1">
                <div
                  className="h-16 rounded-lg border-2 border-gray-200 dark:border-gray-600"
                  style={{ backgroundColor: color }}
                />
                <div className="text-xs text-center">
                  <div className="font-semibold text-gray-800 dark:text-white capitalize">
                    {name}
                  </div>
                  <div className="font-mono text-gray-600 dark:text-gray-400">
                    {color}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
          <p className="text-sm text-purple-700 dark:text-purple-400">
            🎨 Chaque thème s'adapte automatiquement au mode clair/sombre
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomThemesDemo;