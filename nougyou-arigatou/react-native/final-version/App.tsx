import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider }  from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { app } from './storage/firebase';
import store from "./storage/Store";
import { theme } from './theme/colors';
import ThemeContext from './theme/ThemeContext';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <Provider store={store}>
      <ThemeContext.Provider value={theme}>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar />
        </SafeAreaProvider>
      </ThemeContext.Provider>
    </Provider>
  );
}
