import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider }  from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { app } from './storage/firebase';
import { theme } from './theme';
import ThemeContext from './ThemeContext';
import store from "./Store";
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <Provider store={store}>
      <ThemeContext.Provider value={theme}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </ThemeContext.Provider>
    </Provider>
  );
}
