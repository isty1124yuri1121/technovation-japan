import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Image, StyleSheet, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useNavigation } from '@react-navigation/native';

import { auth } from '../storage/firebase';
import { append } from '../farmerSlice';
import { Text, View } from '../components/Themed';

export default function NewFarmerScreen({ navigation, route }) {
  const user = auth.currentUser;
  const dispatch = useDispatch();
  const [farmer, setFarmer] = useState({
    Name: '',
    Image: '',
    Username: '',
    Location: '', 
    Favorites: '',
    Email: user.providerData[0].email,
  });

  const onImagePress = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    });
    if (result.cancelled) {
      return;
    }
    // Convert the image to a byte array.
    const image = await fetch(result.ur);
    const bytes = await image.blob();

    const ref = ref(getStorage(), uuidv4());
    await uploadBytes(ref, bytes);
    const farmerImageUrl = await getDownloadURL(ref);

    setFarmer({
      ...farmer,
      Image: farmerImageUrl 
    })
  };

  const saveProfile = async () => { 
    await updateProfile(user, {
      displayName: farmer.Username,
      photoURL: farmer.Image,
    });
    dispatch(append(farmer));
    navigation.navigate("Farmer Profile", { farmer: farmer.Username });
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <View style={styles.row}>
            <Text>Email: </Text>
            <Text>{user.providerData[0].email}</Text>
          </View>

          <View style={styles.row}>
            <Text>Username: </Text>
            <TextInput
              autoCapitalize='none'
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
                Favorites: text,
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
          onPress={saveProfile}
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

