import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

// Light theme colors
const lightTheme = {
  isDarkMode: false,
  colors: {
    primary: '#075eec',
    background: '#f7f9fc',
    card: '#ffffff',
    text: '#1a1a1a',
    textSecondary: '#646464',
    border: '#e0e0e0',
    notification: '#ff3b30',
  },
};

// Dark theme colors
const darkTheme = {
  isDarkMode: true,
  colors: {
    primary: '#075eec',
    background: '#121212',
    card: '#1e1e1e',
    text: '#f2f2f2',
    textSecondary: '#a0a0a0',
    border: '#2c2c2c',
    notification: '#ff453a',
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const deviceTheme = useColorScheme();
  const [theme, setTheme] = useState(deviceTheme === 'dark' ? darkTheme : lightTheme);

  // When device theme changes, update our theme
  useEffect(() => {
    setTheme(deviceTheme === 'dark' ? darkTheme : lightTheme);
  }, [deviceTheme]);

  const toggleTheme = () => {
    setTheme(prevTheme => 
      prevTheme.isDarkMode ? lightTheme : darkTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
