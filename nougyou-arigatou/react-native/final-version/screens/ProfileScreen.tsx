import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, FlatList, Image, Platform, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { append } from '../commentSlice';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ProfileScreen({ navigation, route }) {
  const [text, setText] = useState('');
  const farmer = useSelector((state) => state.farmer)
    .filter((farmer) => farmer.Username == route.params.farmer)[0];
  const comments = useSelector((state) => state.comment.comments)
    .filter(comment => comment.Username == farmer.Username);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={farmer.Image} />
      <FlatList
          data={comments}
          renderItem={({item}) => (
        <View>
          <Text>{item.Content}</Text>
        </View>
          )}
        />

      <TextInput
        placeholder="Add a comment"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Button
        onPress={() => { dispatch(append({
          Username: route.params.farmer.Username,
          Content: text,
          key: '004',
        })) }}
        title="Submit"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    padding: 10,
    height: 300,
    width: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
