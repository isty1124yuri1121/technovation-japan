/**
 * This is the top level component for the entire application.
 */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { app } from './storage/firebase';
import { theme } from './theme/colors';
import ThemeContext from './theme/ThemeContext';

export default function App() {
  // The application uses some cached resources.  While those are loading,
  // don't do anything.
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
      <ThemeContext.Provider value={theme}>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar />
        </SafeAreaProvider>
      </ThemeContext.Provider>
  );
}
