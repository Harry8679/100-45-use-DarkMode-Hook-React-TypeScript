import { useDarkMode } from '../hooks';

const ThemePreviewDemo = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Aperçu des Composants
      </h3>

      <div className="space-y-6">
        {/* Typography */}
        <div className="space-y-3">
          <h4 className="font-bold text-gray-800 dark:text-white">Typographie :</h4>
          <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg space-y-2">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
              Titre H1
            </h1>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              Titre H2
            </h2>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Titre H3
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Paragraphe de texte normal avec une bonne lisibilité dans les deux modes.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Texte secondaire plus petit et moins contrasté.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <h4 className="font-bold text-gray-800 dark:text-white">Boutons :</h4>
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors">
              Primaire
            </button>
            <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg font-semibold transition-colors">
              Secondaire
            </button>
            <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors">
              Succès
            </button>
            <button className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors">
              Danger
            </button>
          </div>
        </div>

        {/* Forms */}
        <div className="space-y-3">
          <h4 className="font-bold text-gray-800 dark:text-white">Formulaires :</h4>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Input text"
              className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none"
            />
            <textarea
              placeholder="Textarea"
              rows={3}
              className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none resize-none"
            />
            <select className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-3">
          <h4 className="font-bold text-gray-800 dark:text-white">Cartes :</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h5 className="font-bold text-gray-800 dark:text-white mb-2">
                Carte Gradient
              </h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Avec fond dégradé
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-md">
              <h5 className="font-bold text-gray-800 dark:text-white mb-2">
                Carte Simple
              </h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Avec ombre
              </p>
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="space-y-3">
          <h4 className="font-bold text-gray-800 dark:text-white">Alertes :</h4>
          <div className="space-y-2">
            <div className="p-4 bg-blue-100 dark:bg-blue-900/20 border border-blue-500 rounded-lg">
              <p className="text-sm text-blue-700 dark:text-blue-400">
                💡 Message d'information
              </p>
            </div>
            <div className="p-4 bg-green-100 dark:bg-green-900/20 border border-green-500 rounded-lg">
              <p className="text-sm text-green-700 dark:text-green-400">
                ✓ Message de succès
              </p>
            </div>
            <div className="p-4 bg-yellow-100 dark:bg-yellow-900/20 border border-yellow-500 rounded-lg">
              <p className="text-sm text-yellow-700 dark:text-yellow-400">
                ⚠️ Message d'avertissement
              </p>
            </div>
            <div className="p-4 bg-red-100 dark:bg-red-900/20 border border-red-500 rounded-lg">
              <p className="text-sm text-red-700 dark:text-red-400">
                ❌ Message d'erreur
              </p>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="space-y-3">
          <h4 className="font-bold text-gray-800 dark:text-white">Badges :</h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
              Primaire
            </span>
            <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
              Succès
            </span>
            <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full">
              Attention
            </span>
            <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
              Danger
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white text-xs font-bold rounded-full">
              Neutre
            </span>
          </div>
        </div>

        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-blue-700 dark:text-blue-400">
            💡 Mode actuel : <strong>{isDarkMode ? 'Sombre' : 'Clair'}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThemePreviewDemo;