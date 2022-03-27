/**
 * A screen for displaying a farmer's profile to a consumer.
 */
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, Image, Platform, StyleSheet, TextInput } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { useNavigation } from '@react-navigation/native';

import { append } from '../storage/commentSlice';
import EditScreenInfo from '../components/EditScreenInfo';
import { TextButton } from '../components/ui/TextButton';
import { Text, View } from '../components/Themed';

export default function ProfileScreen({ navigation, route }) {
  const [text, setText] = useState('');
  const farmer = useSelector((state) => state.farmer)
    .filter((farmer) => farmer.Username == route.params.farmer)[0];
  // Sharing Data Between Screens Exercise.
  //   We've figured out which farmer to show for you.  Can you do the same to
  //   get all comments for that farmer?
  const comments = [];
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Image style={styles.image} source={farmer.Image} />
        <View style={styles.detailsContent}>

          <View>
            <Text>Name: </Text>
            <Text style={styles.detailItem}>{farmer.Name}</Text>
          </View>

          <View>
            <Text>Location: </Text>
            <Text style={styles.detailItem}>{farmer.Location}</Text>
          </View>

          <View>
            <Text>Favorites: </Text>
            <Text style={styles.detailItem}>{farmer.Favorites}</Text>
          </View>
        </View>
      </View>

      {/*
        Making screens interactive:
          How do we get a new comment from a consumer?
          What should we do with the comment?
      */}
      <View style={styles.submitContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Add a comment"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        <TextButton
          onPress={() => { 
            // Sharing Data Between Screens Exercise.
            //   When a user tries to save a comment, what do we do with it? 
            //   What happens if you call dispatch(append(newComment))
            const newComment = {
              Username: farmer.Username,
              Content: text,
              key: uuidv4(),
            };
            console.log(newComment);
          }}
          title="Submit"
        />
      </View>

      {/*
        Making Interactive Screens:
          When we have a list of comments, how do we put them all on the
          screen? What React Native components can we use to make this easy?
      */}
      <View style={styles.commentContainer}>
        <FlatList
            data={comments}
            keyExtractor={item => item.Key}
            renderItem={({item}) => (
          <View>
            <Text>{item.Content}</Text>
          </View>
            )}
          />
      </View>

     </View>
  );
}

// Styling Our App:
//   - How do we style each of the UI components in the app?
//   - Should we try using any global themes?
const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 8,
  },
  detailsContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  detailsContent: {
    paddingLeft: 4,
    width: '50%',
  },
  detailItem: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 5,
    borderWidth: 2,
  },
  image: {
    padding: 10,
    height: 150,
    width: 150,
  },
  submitContainer: {
    marginTop: 8,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commentInput: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 5,
    borderWidth: 2,
  },
  commentContainer: {
    marginTop: 8,
    width: '100%',
    height: '60%',
  }
});
