import { getTheme, saveTheme, setTheme } from '@/lib/setTheme';
import { Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(getTheme());

  const toggleTheme = () => {
    const updatedTheme = !isDarkMode;

    setIsDarkMode(updatedTheme);
    saveTheme(updatedTheme);
    
    setTheme(isDarkMode);
  };

  useEffect(() => {
    setTheme(isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="overflow-hidden">
      <button
        onClick={toggleTheme}
        className={`mt-5 text-custom-textLight transition-transform duration-500 dark:text-custom-textDark ${
          isDarkMode ? 'translate-y-4' : 'translate-y-0'
        }`}
      >
        <Sun className="h-5 w-5" />
      </button>
      <hr className="dark:border-custom-accent-dark border-t-2 border-custom-accent" />
    </div>
  );
}

export default DarkModeButton;
