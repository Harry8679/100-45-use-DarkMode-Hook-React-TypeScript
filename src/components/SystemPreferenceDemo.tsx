import { useDarkMode } from '../hooks';

const SystemPreferenceDemo = () => {
  const { theme, systemPreference, isDarkMode } = useDarkMode();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Préférence Système
      </h3>

      <div className="space-y-6">
        {/* System Detection */}
        <div className="p-6 bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-3xl">
              💻
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Préférence détectée
              </div>
              <div className="text-2xl font-bold text-gray-800 dark:text-white">
                {systemPreference === 'dark' ? 'Mode Sombre' : 'Mode Clair'}
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Cette préférence est lue depuis les paramètres de votre système d'exploitation
          </div>
        </div>

        {/* Status Indicators */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Thème sélectionné
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">
                {theme === 'light' ? '☀️' : theme === 'dark' ? '🌙' : '💻'}
              </span>
              <span className="font-bold text-gray-800 dark:text-white capitalize">
                {theme}
              </span>
            </div>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Rendu actuel
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{isDarkMode ? '🌙' : '☀️'}</span>
              <span className="font-bold text-gray-800 dark:text-white">
                {isDarkMode ? 'Sombre' : 'Clair'}
              </span>
            </div>
          </div>
        </div>

        {/* Flow Diagram */}
        <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
          <h4 className="font-bold text-gray-800 dark:text-white mb-4">
            Logique de détection :
          </h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                theme === 'light' ? 'bg-yellow-500' : 'bg-gray-400'
              }`}>
                1
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-800 dark:text-white">
                  Thème = "light"
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  → Toujours afficher le mode clair
                </div>
              </div>
              {theme === 'light' && <span className="text-green-500 text-xl">✓</span>}
            </div>

            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                theme === 'dark' ? 'bg-blue-500' : 'bg-gray-400'
              }`}>
                2
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-800 dark:text-white">
                  Thème = "dark"
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  → Toujours afficher le mode sombre
                </div>
              </div>
              {theme === 'dark' && <span className="text-green-500 text-xl">✓</span>}
            </div>

            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                theme === 'system' ? 'bg-purple-500' : 'bg-gray-400'
              }`}>
                3
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-800 dark:text-white">
                  Thème = "system"
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  → Utiliser la préférence système ({systemPreference})
                </div>
              </div>
              {theme === 'system' && <span className="text-green-500 text-xl">✓</span>}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
          <div className="flex items-start gap-2">
            <span className="text-xl">💡</span>
            <div className="flex-1 text-sm text-purple-700 dark:text-purple-400">
              <strong>Tester la détection :</strong>
              <br />
              Changez le thème système de votre ordinateur (Paramètres → Apparence) et voyez le changement en temps réel si vous êtes en mode "Système" !
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemPreferenceDemo;