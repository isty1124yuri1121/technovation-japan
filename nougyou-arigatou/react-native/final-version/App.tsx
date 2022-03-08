import Airtable from 'airtable'
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

async function readInitialState() {
  let farmers: Array<Farmer> = [];

  let base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY})
    .base('appwPdl5QXUtRh8Rz');
  await base('Table 1').select({}).eachPage(
  async function page(records, fetchNextPage) {
    records.map(record => {
      return {
        Name: record.get('Name'),
        Image: '',
        Username: record.get('Username'),
        Location: record.get('Location'),
        Favorites: record.get('Favorites').split(',')
      };
    })
    .forEach(m => farmers.push(m));
    fetchNextPage();
  })
  .then(r => {console.log(r)});
  return farmers;
}

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
