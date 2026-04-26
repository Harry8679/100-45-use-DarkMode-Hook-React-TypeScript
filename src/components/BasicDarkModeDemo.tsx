import { useDarkMode } from '../hooks';

const BasicDarkModeDemo = () => {
  const { isDarkMode, toggleTheme } = useDarkMode();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Dark Mode Basique
      </h3>

      <div className="space-y-6">
        {/* Current Mode Display */}
        <div className="p-8 bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl text-center">
          <div className="text-6xl mb-4">
            {isDarkMode ? '🌙' : '☀️'}
          </div>
          <h4 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            {isDarkMode ? 'Mode Sombre' : 'Mode Clair'}
          </h4>
          <p className="text-gray-600 dark:text-gray-400">
            Thème actuellement actif
          </p>
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggleTheme}
          className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
        >
          <span className="flex items-center justify-center gap-3">
            <span className="text-2xl">{isDarkMode ? '☀️' : '🌙'}</span>
            <span>Basculer en {isDarkMode ? 'Mode Clair' : 'Mode Sombre'}</span>
          </span>
        </button>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg text-center transition-all ${
            !isDarkMode ? 'bg-yellow-100 dark:bg-yellow-900/20 border-2 border-yellow-500 scale-105' : 'bg-gray-100 dark:bg-gray-700/50'
          }`}>
            <div className="text-3xl mb-2">☀️</div>
            <div className="font-semibold text-gray-800 dark:text-white">
              Clair
            </div>
            {!isDarkMode && (
              <div className="text-xs text-yellow-700 dark:text-yellow-400 mt-1">
                ✓ Actif
              </div>
            )}
          </div>

          <div className={`p-4 rounded-lg text-center transition-all ${
            isDarkMode ? 'bg-blue-100 dark:bg-blue-900/20 border-2 border-blue-500 scale-105' : 'bg-gray-100 dark:bg-gray-700/50'
          }`}>
            <div className="text-3xl mb-2">🌙</div>
            <div className="font-semibold text-gray-800 dark:text-white">
              Sombre
            </div>
            {isDarkMode && (
              <div className="text-xs text-blue-700 dark:text-blue-400 mt-1">
                ✓ Actif
              </div>
            )}
          </div>
        </div>

        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-blue-700 dark:text-blue-400">
            💡 Le thème s'applique automatiquement à toute l'application
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicDarkModeDemo;