import { useState } from 'react';
import { useDarkMode } from '../hooks';

const SettingsPanelDemo = () => {
  const { theme, setTheme, isDarkMode, systemPreference } = useDarkMode();
  const [transitions, setTransitions] = useState(true);
  const [animations, setAnimations] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Panneau de Paramètres
      </h3>

      <div className="space-y-6">
        {/* Theme Selection */}
        <div className="space-y-3">
          <h4 className="font-bold text-gray-800 dark:text-white">Apparence :</h4>
          <div className="space-y-2">
            {[
              { value: 'light' as const, label: 'Clair', emoji: '☀️' },
              { value: 'dark' as const, label: 'Sombre', emoji: '🌙' },
              { value: 'system' as const, label: 'Système', emoji: '💻' },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setTheme(option.value)}
                className={`w-full p-4 rounded-lg transition-all text-left border-2 ${
                  theme === option.value
                    ? 'bg-blue-500 text-white border-blue-600'
                    : 'bg-gray-50 dark:bg-gray-700/50 text-gray-800 dark:text-white border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{option.emoji}</span>
                    <div>
                      <div className="font-semibold">{option.label}</div>
                      {option.value === 'system' && (
                        <div className={`text-sm ${
                          theme === option.value ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                        }`}>
                          Suit {systemPreference === 'dark' ? 'sombre' : 'clair'}
                        </div>
                      )}
                    </div>
                  </div>
                  {theme === option.value && (
                    <span className="text-2xl">✓</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Accessibility Settings */}
        <div className="space-y-3">
          <h4 className="font-bold text-gray-800 dark:text-white">Accessibilité :</h4>
          
          <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="font-semibold text-gray-800 dark:text-white">
                  Transitions fluides
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Animations lors du changement de thème
                </div>
              </div>
              <button
                onClick={() => setTransitions(!transitions)}
                className={`relative w-14 h-8 rounded-full transition-colors ${
                  transitions ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    transitions ? 'transform translate-x-6' : ''
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="font-semibold text-gray-800 dark:text-white">
                  Animations
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Activer les animations UI
                </div>
              </div>
              <button
                onClick={() => setAnimations(!animations)}
                className={`relative w-14 h-8 rounded-full transition-colors ${
                  animations ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    animations ? 'transform translate-x-6' : ''
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="font-semibold text-gray-800 dark:text-white">
                  Mouvement réduit
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Pour la sensibilité au mouvement
                </div>
              </div>
              <button
                onClick={() => setReducedMotion(!reducedMotion)}
                className={`relative w-14 h-8 rounded-full transition-colors ${
                  reducedMotion ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    reducedMotion ? 'transform translate-x-6' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Current Settings Summary */}
        <div className="p-6 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border-2 border-blue-300 dark:border-blue-700">
          <h4 className="font-bold text-gray-800 dark:text-white mb-4">
            Résumé des paramètres :
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Thème :</span>
              <span className="font-semibold text-gray-800 dark:text-white capitalize">
                {theme}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Mode actuel :</span>
              <span className="font-semibold text-gray-800 dark:text-white">
                {isDarkMode ? 'Sombre 🌙' : 'Clair ☀️'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Transitions :</span>
              <span className="font-semibold text-gray-800 dark:text-white">
                {transitions ? 'Activées ✓' : 'Désactivées ✗'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Animations :</span>
              <span className="font-semibold text-gray-800 dark:text-white">
                {animations ? 'Activées ✓' : 'Désactivées ✗'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Mouvement réduit :</span>
              <span className="font-semibold text-gray-800 dark:text-white">
                {reducedMotion ? 'Activé ✓' : 'Désactivé ✗'}
              </span>
            </div>
          </div>
        </div>

        {/* Save Settings */}
        <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-bold transition-all transform hover:scale-105">
          💾 Enregistrer les paramètres
        </button>

        <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
          <p className="text-sm text-green-700 dark:text-green-400">
            ✓ Les paramètres sont sauvegardés automatiquement dans le localStorage
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanelDemo;