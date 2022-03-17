import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, FlatList, Image, Platform, StyleSheet, TextInput } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { useNavigation } from '@react-navigation/native';

import { append } from '../storage/commentSlice';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ProfileScreen({ navigation, route }) {
  const [text, setText] = useState('');
  const farmer = useSelector((state) => state.farmer)
    .filter((farmer) => farmer.Username == route.params.farmer)[0];
  const comments = useSelector((state) => state.comment)
    .filter(comment => comment.Username == farmer.Username);
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

      <View style={styles.submitContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Add a comment"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        <Button
          onPress={() => { dispatch(append({
            Username: farmer.Username,
            Content: text,
            key: uuidv4(),
          })) }}
          title="Submit"
        />
      </View>

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
