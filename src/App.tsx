import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NavbarTop from './components/NavbarTop';
import NavbarBottom from './components/NavbarBottom';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Page', href: '/page' },
];

function App() {
  const { i18n } = useTranslation();

  const isUserDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useState(isUserDarkMode);

  const language = i18n.language;

  function toggleLanguage() {
    i18n.changeLanguage(language === 'fr' ? 'en' : 'fr');
  }

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div className={`min-h-screen flex flex-col font-sans bg-gray-200 text-slate-800 ${darkMode ? 'dark' : ''}`}>
      <NavbarTop navigation={navigation} toggleDarkMode={toggleDarkMode} toggleLanguage={toggleLanguage} />
      <Outlet />
      <NavbarBottom navigation={navigation} toggleDarkMode={toggleDarkMode} toggleLanguage={toggleLanguage} />
    </div>
  );
}

export default App;
