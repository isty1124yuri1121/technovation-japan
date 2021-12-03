import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Image, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

import { append } from '../farmerSlice';
import { Text, View } from '../components/Themed';

export default function FarmerProfileScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const [farmer, setFarmer] = useState({
    Name: '',
    Image: '',
    Username: '',
    Location: '', 
    Favorites: [ ],
  });

  const onImagePress = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    });

    console.log(result);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <View style={styles.row}>
            <Text>Username: </Text>
            <TextInput
              placeholder="new username"
              onChangeText={text => setFarmer({
                ...farmer,
                Username: text
              })}
              defaultValue=''
            />
          </View>

          <View style={styles.row}>
            <Text>Name: </Text>
            <TextInput
              placeholder="new name"
              onChangeText={text => setFarmer({
                ...farmer,
                Name: text
              })}
              defaultValue={farmer.Name}
            />
          </View>

          <View style={styles.row}>
            <Text>Location: </Text>
            <TextInput
              placeholder="new location"
              onChangeText={text => setFarmer({
                ...farmer,
                Location: text
              })}
              defaultValue={farmer.Location}
            />
          </View>

          <View style={styles.row}>
            <Text>Favorites: </Text>
            <TextInput
              placeholder="new favorites"
              onChangeText={text => setFarmer({
                ...farmer,
                Favorites: text.split(',').map(t => t.trim())
              })}
              defaultValue={farmer.Favorites}
            />
          </View>
          <View style={styles.row}>
            <Button
              onPress={onImagePress}
              title="Pick a photo"
            />
          </View>

        </View>
      </View>

      <View style={styles.row}>
        <Button
          onPress={() => { 
            dispatch(append(farmer));
            navigation.navigate("Farmer Profile", { farmer: farmer.Username });
          }}
          title="Save"
        />
      </View>
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
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
});

