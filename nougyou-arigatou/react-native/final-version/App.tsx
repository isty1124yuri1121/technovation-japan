/**
 * This is the top level component for the entire application.
 */
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
  // The application uses some cached resources.  While those are loading,
  // don't do anything.
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    /*
    Data Sharing Between Screens:
      How do we share data between screens? React uses an app level Provider
      to provide access to shared objects.  Here, we provide access to a
      React Redux data store.
    */
    <Provider store={store}>
      {/*
      Sharing styles and themes:
        How do we share color and style decisions across all components?  A
        React Provider will enable this sharing across any child component.
        Here, we share a simple dictionary of colors.
      */}
      <ThemeContext.Provider value={theme}>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar />
        </SafeAreaProvider>
      </ThemeContext.Provider>
    </Provider>
  );
}
