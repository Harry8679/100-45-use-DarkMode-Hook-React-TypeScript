import BasicDarkModeDemo from './BasicDarkModeDemo';
import ThemeToggleDemo from './ThemeToggleDemo';
import SystemPreferenceDemo from './SystemPreferenceDemo';
import CustomThemesDemo from './CustomThemesDemo';
import ThemePreviewDemo from './ThemePreviewDemo';
import AdvancedThemeDemo from './AdvancedThemeDemo';
import SettingsPanelDemo from './SettingsPanelDemo';

const DarkModeDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            🌙 useDarkMode Hook
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
            Projet 45/100 • Dark Mode Management
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Hook avancé pour gérer le mode sombre avec persistance et détection système
          </p>
        </div>

        {/* Demos */}
        <div className="space-y-8">
          {/* Row 1 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <BasicDarkModeDemo />
            <ThemeToggleDemo />
          </div>

          {/* Row 2 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <SystemPreferenceDemo />
            <CustomThemesDemo />
          </div>

          {/* Row 3 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <ThemePreviewDemo />
            <AdvancedThemeDemo />
          </div>

          {/* Row 4 */}
          <SettingsPanelDemo />

          {/* Features */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              ✨ Fonctionnalités
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Toggle</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Basculement light/dark
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Persistence</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Sauvegarde localStorage
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">System</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Détection préférence OS
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Auto-Switch</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Basculement automatique
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Transitions</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Animations fluides
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Custom Themes</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Thèmes personnalisés
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">CSS Variables</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Variables dynamiques
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Type-Safe</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    100% TypeScript
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Code Examples - Continue dans le prochain message */}
        </div>
      </div>
    </div>
  );
};

export default DarkModeDemo;