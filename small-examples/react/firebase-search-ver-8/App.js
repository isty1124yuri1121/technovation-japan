import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, View } from 'react-native';

import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const storyId = "YUXL04hoRxTKSBgxPgRS";
    const db = firebase.firestore();
    db.collection("stories")
      .doc(storyId)
      .collection('authors')
      .get()
      .then(snapshot => {
        const newAuthors = [];
        snapshot.forEach(querySnapshot => {
          const author = {
            ...querySnapshot.data(),
            id: querySnapshot.id
          };
          newAuthors.push(author);
        });
        setAuthors(newAuthors);
      }).catch(err => {
        console.error(err)
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <FlatList
        data={authors}
        keyExtractor={author => author.id}
        renderItem={({item}) => (
          <View>
            <Text>{item.Name}</Text>
          </View>
        )} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
