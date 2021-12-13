import Airtable from 'airtable'
import { StatusBar } from 'expo-status-bar';
import { initializeApp } from 'firebase/app';
import React from 'react';
import { Provider }  from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

initializeApp(firebaseConfig);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    </Provider>
  );
}
