/**
 * A profile screen for a logged in farmer.
 */
import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar';
import { signOut, updateProfile } from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useState, useEffect } from 'react';
import { FlatList, Image, Platform, StyleSheet, TextInput, TouchableOpacity  } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { Text, View } from '../components/Themed';
import { Button } from '../components/ui/Button';
import { TextButton } from '../components/ui/TextButton';
import { append, update } from '../storage/farmerSlice';
import { auth } from '../storage/firebase';

export default function FarmerProfileScreen({ navigation, route }) {
  // User Authentication Exercise:
  //   How do we access the current logged in user?  What can firebase tell us
  //   about them?

  // What state information do we need?
  const [farmer, setFarmer] = useState({
    Name: '',
    Image: { uri: '' },
    Username: '',
    Location: '', 
    Favorites: '',
    Email: user.providerData[0].email,
  });
  const [comments, setComments] = useState([]);
  const [isNewFarmer, setIsNewFarmer] = useState(true);
  const dispatch = useDispatch();

  const stateFarmers = useSelector((state) => state.farmer);
  const stateComments = useSelector((state) => state.comment);
  useEffect( () => {
    if (!route.params.farmer) {
      return;
    }
    const foundFarmer = stateFarmers.filter(
      ({Username}) => Username == route.params.farmer);
    if (foundFarmer.length > 0) {
      setIsNewFarmer(false);
      setFarmer(foundFarmer[0]);
    }
    const foundComments = stateComments.filter(
      ({Username}) => Username == foundFarmer.Username);
    setComments(foundComments);
  }, [stateFarmers, stateComments]);

  // User Authentication Exercise:
  //   Sometimes a farmer wants to logout and pretend to be a consumer.  What
  //   firebase method lets us do that? And what should we do when they logout?
  const handleLogout = () => {
  };

  // Using Cloud Data:
  //   Saving images is actually pretty hard.  We've written this for you
  //   because the correct approach depends on the firebase version.  This
  //   works for 9.0.0.
  const onImagePress = async () => {
    // How do we get a new profile photo?
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });
    if (result.cancelled) {
      return;
    }

    try {
      const image = await fetch(result.uri);
      const bytes = await image.blob();
      const fileRef = ref(getStorage(), uuidv4());
      await uploadBytesResumable(fileRef, bytes);
      const farmerImageUrl = await getDownloadURL(fileRef);
      setFarmer({
        ...farmer,
        Image: { uri: farmerImageUrl },
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Sharing data across screens:
  //   When a farmer updates their profile information, or a new farmer creates
  //   their profile for the first time, what React Redux reducers should we
  //   use?
  const updateDetails = async() => {
    await updateProfile(user, {
      displayName: farmer.Username
    });
    if (isNewFarmer) {
      dispatch(append(farmer));
      setIsNewFarmer(false);
    } else {
      dispatch(update({
        username: farmer.Username,
        farmer: farmer}));
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.detailsContainer}>
        <View>
          {farmer.Image.uri !== ''
            ? <Image style={styles.image} source={farmer.Image} />
            : <View style={styles.image} />
          }
          <TextButton
            onPress={onImagePress}
            title="Pick a photo"
          />
        </View>

        <View style={styles.detailsContent}>
          <View style={styles.detailInput}>
            <Text>Username: </Text>
            <TextInput
              autoCapitalize='none'
              placeholder="new username"
              onChangeText={text => setFarmer({
                ...farmer,
                Username: text,
              })}
              style={styles.input}
              defaultValue={farmer.Username}
            />
          </View>

          <View style={styles.detailInput}>
            <Text>Name: </Text>
            <TextInput
              placeholder="new name"
              onChangeText={text => setFarmer({
                ...farmer,
                Name: text,
              })}
              style={styles.input}
              defaultValue={farmer.Name}
            />
          </View>

          <View style={styles.detailInput}>
            <Text>Location: </Text>
            <TextInput
              placeholder="new location"
              onChangeText={text => setFarmer({
                ...farmer,
                Location: text,
              })}
              style={styles.input}
              defaultValue={farmer.Location}
            />
          </View>

          <View style={styles.detailInput}>
            <Text>Favorites: </Text>
            <TextInput
              placeholder="new favorites"
              onChangeText={text => setFarmer({
                ...farmer,
                Favorites: text,
              })}
              style={styles.input}
              defaultValue={farmer.Favorites}
            />
          </View>

        </View>
      </View>

      <View style={styles.actionContainer}>
        <TextButton
          onPress={updateDetails}
          title={isNewFarmer ? "Save Details" : "Update Details"}
        />
        <Button
          onPress={handleLogout}
          style={styles.button}
          label="Logout"
        />
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
    width: '50%',
    margin: 8,
  },
});
