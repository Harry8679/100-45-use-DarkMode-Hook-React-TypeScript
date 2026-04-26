import { useDarkMode } from '../hooks';
import type { Theme } from '../types';

const ThemeToggleDemo = () => {
  const { theme, setTheme, isDarkMode, systemPreference } = useDarkMode();

  const themes: { value: Theme; label: string; emoji: string; description: string }[] = [
    {
      value: 'light',
      label: 'Clair',
      emoji: '☀️',
      description: 'Toujours en mode clair',
    },
    {
      value: 'dark',
      label: 'Sombre',
      emoji: '🌙',
      description: 'Toujours en mode sombre',
    },
    {
      value: 'system',
      label: 'Système',
      emoji: '💻',
      description: `Suit le système (${systemPreference === 'dark' ? 'sombre' : 'clair'})`,
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Sélection de Thème
      </h3>

      <div className="space-y-6">
        {/* Current Status */}
        <div className="p-6 bg-linear-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Thème actuel
              </div>
              <div className="text-2xl font-bold text-gray-800 dark:text-white">
                {themes.find(t => t.value === theme)?.label}
              </div>
            </div>
            <div className="text-5xl">
              {isDarkMode ? '🌙' : '☀️'}
            </div>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Rendu: {isDarkMode ? 'Mode Sombre' : 'Mode Clair'}
          </div>
        </div>

        {/* Theme Options */}
        <div className="space-y-3">
          {themes.map((t) => (
            <button
              key={t.value}
              onClick={() => setTheme(t.value)}
              className={`w-full p-4 rounded-xl transition-all transform ${
                theme === t.value
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white scale-105 shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700/50 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">{t.emoji}</div>
                <div className="flex-1 text-left">
                  <div className="font-bold text-lg mb-1">{t.label}</div>
                  <div className={`text-sm ${
                    theme === t.value ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    {t.description}
                  </div>
                </div>
                {theme === t.value && (
                  <div className="text-2xl">✓</div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* System Preference Info */}
        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <div className="flex items-start gap-2">
            <span className="text-xl">💡</span>
            <div className="flex-1 text-sm text-blue-700 dark:text-blue-400">
              <strong>Préférence système détectée :</strong> {systemPreference === 'dark' ? 'Sombre' : 'Clair'}
              <br />
              Le mode "Système" s'adapte automatiquement aux changements de votre système.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggleDemo;