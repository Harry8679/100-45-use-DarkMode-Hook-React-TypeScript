import { useState, useEffect } from 'react';
import { useDarkMode } from '../hooks';

const AdvancedThemeDemo = () => {
  const { theme, setTheme, isDarkMode } = useDarkMode();
  const [autoSwitch, setAutoSwitch] = useState(false);
  const [darkTime, setDarkTime] = useState('20:00');
  const [lightTime, setLightTime] = useState('07:00');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!autoSwitch) return;

    const checkTime = () => {
      const now = new Date();
      const currentMinutes = now.getHours() * 60 + now.getMinutes();
      
      const [darkHour, darkMin] = darkTime.split(':').map(Number);
      const darkMinutes = darkHour * 60 + darkMin;
      
      const [lightHour, lightMin] = lightTime.split(':').map(Number);
      const lightMinutes = lightHour * 60 + lightMin;

      if (currentMinutes >= darkMinutes || currentMinutes < lightMinutes) {
        if (theme !== 'dark') setTheme('dark');
      } else {
        if (theme !== 'light') setTheme('light');
      }
    };

    checkTime();
    const interval = setInterval(checkTime, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [autoSwitch, darkTime, lightTime, theme, setTheme]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Basculement Automatique
      </h3>

      <div className="space-y-6">
        {/* Current Time */}
        <div className="p-6 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl text-center">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Heure actuelle
          </div>
          <div className="text-5xl font-bold text-gray-800 dark:text-white font-mono">
            {currentTime}
          </div>
        </div>

        {/* Auto Switch Toggle */}
        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="font-bold text-gray-800 dark:text-white">
                Basculement automatique
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Change automatiquement selon l'heure
              </div>
            </div>
            <button
              onClick={() => setAutoSwitch(!autoSwitch)}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                autoSwitch ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  autoSwitch ? 'transform translate-x-6' : ''
                }`}
              />
            </button>
          </div>

          {autoSwitch && (
            <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg border border-blue-500">
              <p className="text-sm text-blue-700 dark:text-blue-400">
                ✓ Basculement automatique activé
              </p>
            </div>
          )}
        </div>

        {/* Time Settings */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              🌙 Passer en mode sombre à :
            </label>
            <input
              type="time"
              value={darkTime}
              onChange={(e) => setDarkTime(e.target.value)}
              disabled={!autoSwitch}
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white font-mono text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              ☀️ Passer en mode clair à :
            </label>
            <input
              type="time"
              value={lightTime}
              onChange={(e) => setLightTime(e.target.value)}
              disabled={!autoSwitch}
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white font-mono text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <h4 className="font-bold text-gray-800 dark:text-white mb-3">
            Timeline :
          </h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-2xl">
                ☀️
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-800 dark:text-white">
                  {lightTime} - {darkTime}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Mode clair actif
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-2xl">
                🌙
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-800 dark:text-white">
                  {darkTime} - {lightTime}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Mode sombre actif
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Status */}
        <div className={`p-4 rounded-lg border-2 ${
          isDarkMode
            ? 'bg-blue-100 dark:bg-blue-900/20 border-blue-500'
            : 'bg-yellow-100 dark:bg-yellow-900/20 border-yellow-500'
        }`}>
          <div className="flex items-center gap-3">
            <span className="text-3xl">{isDarkMode ? '🌙' : '☀️'}</span>
            <div>
              <div className="font-bold text-gray-800 dark:text-white">
                Mode actuel : {isDarkMode ? 'Sombre' : 'Clair'}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {autoSwitch
                  ? 'Basculement automatique actif'
                  : 'Basculement automatique désactivé'}
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
          <p className="text-sm text-purple-700 dark:text-purple-400">
            💡 Le thème changera automatiquement aux heures définies
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedThemeDemo;