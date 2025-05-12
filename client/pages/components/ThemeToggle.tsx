// components/ThemeToggle.tsx
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const initial = saved === 'dark';
    setIsDark(initial);
    document.documentElement.setAttribute('data-theme', initial ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-200 p-2 rounded-full shadow hover:scale-105 transition"
      
    >
      {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
    </button>
  );
}