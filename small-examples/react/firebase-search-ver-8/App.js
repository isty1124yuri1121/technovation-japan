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

  // Our useEffect will make some await calls so it needs to be async.
  useEffect(async () => {
    const storyId = "YUXL04hoRxTKSBgxPgRS";
    const db = firebase.firestore();
    // Get the list of stories we're following.
    const followingResult = await db.collection("following")
      .doc(storyId)
      .collection('userFollowing')
      .get();

    // Extract the list of story ids that we're following.
    const followingIds = []
    followingResult.forEach(following => {
      followingIds.push(following.id);
    });

    // Extract the authors of the stories I follow.
    const newAuthors = []
    for await (const followingId of followingIds) {
      // First, get each story I follow and the authors for that story.
      const authorResults = await db.collection("stories")
        .doc(followingId)
        .collection('authors')
        .get();
      // Add the authors to my author list.
      authorResults.forEach(author => {
        newAuthors.push({
          ...author.data(),
          id: author.id,
        });
      });
    }
    // Set the authors state variable when we're all done.
    setAuthors(newAuthors);
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
