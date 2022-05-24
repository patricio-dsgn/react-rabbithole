import React, { createContext, useState, useContext } from 'react';

const themeStyles = {
  magenta: {
    background: '#ff0077',
    textColor: '##ffffff'
  },
  verde: {
    background: '#00ff77',
    textColor: '##ffffff'
  }
}

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState('magenta');
  const toggleTheme = () => theme === 'magenta' ? setTheme('verde') : setTheme('magenta');
  const value = { theme: themeStyles[theme], toggleTheme, themeName: theme };
  return <ThemeContext.Provider value={value} {...props} />;
}

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider as default, useTheme };