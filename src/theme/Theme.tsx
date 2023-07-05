import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

const themes = {
  [ThemeType.light]: lightTheme,
  [ThemeType.dark]: darkTheme,
};

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: ThemeType.light,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [theme, setTheme] = useState(ThemeType.light);

  useEffect(() => {
    loadTheme();
  }, []);

  async function loadTheme() {
    const savedTheme = await AsyncStorage.getItem('@theme');
    if (savedTheme) {
      setTheme(savedTheme as ThemeType);
    }
  }

  function toggleTheme() {
    const newTheme = theme === ThemeType.light ? ThemeType.dark : ThemeType.light;

    AsyncStorage.setItem('@theme', newTheme);
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};
