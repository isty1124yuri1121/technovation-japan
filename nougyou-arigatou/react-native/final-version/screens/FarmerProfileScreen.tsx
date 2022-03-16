import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, FlatList, Image, Platform, StyleSheet, TextInput } from 'react-native';
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
      <View style={styles.row}>
        <Image style={styles.image} source={farmer.Image} />
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <View style={styles.row}>
            <Text>Name: </Text>
            <TextInput
              placeholder="new name"
              onChangeText={text => setText({
                Name: text,
                ...farmer
              })}
              defaultValue={farmer.Name}
            />
          </View>

          <View style={styles.row}>
            <Text>Location: </Text>
            <Text>{farmer.Location}</Text>
          </View>
        </View>
      </View>

      <View style={styles.row}>
        <Button
          onPress={() => { dispatch(update(farmer.Username, farmer)) }}
          title="Update Details"
        />
      </View>

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  image: {
    padding: 10,
    height: 200,
    width: 200,
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
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
});
