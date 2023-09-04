import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div className={`min-h-screen flex flex-col font-sans ${darkMode ? 'dark' : ''}`}>
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Outlet />
    </div>
  );
}

export default App;
