import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, FlatList, Image, Platform, StyleSheet, TextInput, TouchableOpacity  } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { useNavigation } from '@react-navigation/native';

import { update } from '../farmerSlice';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function FarmerProfileScreen({ navigation, route }) {
  const farmer = useSelector((state) => state.farmer)
    .filter((farmer) => farmer.Username == route.params.farmer)[0];
  const [text, setText] = useState(farmer);
  const comments = useSelector((state) => state.comment)
    .filter(comment => comment.Username == farmer.Username);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>

      <View style={styles.detailsContainer}>
        <Image style={styles.image} source={farmer.Image} />

        <View style={styles.detailsContent}>
          <View style={styles.detailInput}>
            <Text>Name: </Text>
            <TextInput
              placeholder="new name"
              onChangeText={text => setText({
                Name: text,
                ...farmer
              })}
              style={styles.input}
              defaultValue={farmer.Name}
            />
          </View>

          <View style={styles.detailInput}>
            <Text>Location: </Text>
            <TextInput
              placeholder="new location"
              onChangeText={text => setText({
                Location: text,
                ...farmer
              })}
              style={styles.input}
              defaultValue={farmer.Location}
            />
          </View>

        </View>
      </View>

      <View style={styles.actionContainer}>
        <Button
          onPress={() => { dispatch(update(farmer.Username, farmer)) }}
          title="Update Details"
        />
        <TouchableOpacity
          style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.commentsContainer}>
        <Text>Comments:</Text>
        <FlatList
            keyExtractor={item => item.Key}
            data={comments}
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
    padding: 4,
  },
  detailsContainer: {
    width: '100%',
    padding: 8,
    flexDirection: 'row',
  },
  image: {
    padding: 10,
    height: 150,
    width: 150,
  },
  detailsContent: {
    paddingLeft: 4,
    width: '50%',
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 5,
    borderWidth: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  commentsContainer: {
    height: '40%',
    width: '100%',
    padding: 8,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  button: {
    backgroundColor: '#0782f9',
    color: '#000',
    width: '50%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    margin: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
