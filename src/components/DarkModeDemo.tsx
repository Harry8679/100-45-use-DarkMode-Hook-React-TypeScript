import BasicDarkModeDemo from './BasicDarkModeDemo';
import ThemeToggleDemo from './ThemeToggleDemo';
import SystemPreferenceDemo from './SystemPreferenceDemo';
import CustomThemesDemo from './CustomThemesDemo';
import ThemePreviewDemo from './ThemePreviewDemo';
import AdvancedThemeDemo from './AdvancedThemeDemo';
import SettingsPanelDemo from './SettingsPanelDemo';

const DarkModeDemo = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 transition-colors duration-300">
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
          {/* Code Examples */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              💻 Exemples d'utilisation
            </h2>

            <div className="space-y-6">
              {/* Basic Usage */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Utilisation basique :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`import { useDarkMode } from './hooks';

const { isDarkMode, toggleTheme } = useDarkMode();

return (
  <button onClick={toggleTheme}>
    {isDarkMode ? '☀️ Mode Clair' : '🌙 Mode Sombre'}
  </button>
);`}
                </pre>
              </div>

              {/* With Options */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Avec options :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const { isDarkMode, theme, setTheme } = useDarkMode({
  defaultTheme: 'system', // 'light' | 'dark' | 'system'
  storageKey: 'my-app-theme',
  classNameDark: 'dark',
  classNameLight: 'light',
});`}
                </pre>
              </div>

              {/* Theme Selection */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Sélection de thème :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const { theme, setTheme, systemPreference } = useDarkMode();

const themes = ['light', 'dark', 'system'];

return (
  <div>
    {themes.map((t) => (
      <button
        key={t}
        onClick={() => setTheme(t)}
        className={theme === t ? 'active' : ''}
      >
        {t}
      </button>
    ))}
    
    {theme === 'system' && (
      <p>Suit le système: {systemPreference}</p>
    )}
  </div>
);`}
                </pre>
              </div>

              {/* System Preference */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Détection système :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const { systemPreference } = useDarkMode();

// systemPreference change automatiquement 
// si l'utilisateur change le thème de son OS

useEffect(() => {
  console.log('Système préfère:', systemPreference);
}, [systemPreference]);`}
                </pre>
              </div>

              {/* Auto Switch */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Basculement automatique :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const { setTheme } = useDarkMode();

useEffect(() => {
  const checkTime = () => {
    const hour = new Date().getHours();
    
    // Mode sombre de 20h à 7h
    if (hour >= 20 || hour < 7) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  checkTime();
  const interval = setInterval(checkTime, 60000);
  return () => clearInterval(interval);
}, [setTheme]);`}
                </pre>
              </div>

              {/* Tailwind Integration */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Intégration Tailwind CSS :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`// tailwind.config.js
module.exports = {
  darkMode: 'class', // Important!
  // ...
}

// Dans vos composants
<div className="bg-white dark:bg-gray-800">
  <h1 className="text-gray-900 dark:text-white">
    Titre
  </h1>
  <p className="text-gray-600 dark:text-gray-400">
    Texte
  </p>
</div>`}
                </pre>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">🎯 Cas d'usage courants</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>🌐</span> Applications Web
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Dashboards</li>
                  <li>• Sites e-commerce</li>
                  <li>• Blogs</li>
                  <li>• Portfolios</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>📱</span> Apps Mobile
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Applications React Native</li>
                  <li>• PWA</li>
                  <li>• Apps hybrides</li>
                  <li>• Web views</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>💼</span> Outils Pros
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Éditeurs de code</li>
                  <li>• Outils de design</li>
                  <li>• CMS</li>
                  <li>• Admin panels</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>🎮</span> Divertissement
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Plateformes vidéo</li>
                  <li>• Lecteurs musique</li>
                  <li>• Apps lecture</li>
                  <li>• Streaming</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkModeDemo;