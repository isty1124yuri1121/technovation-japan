/**
 * A profile screen for a logged in farmer.
 */
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { FlatList, Image, Platform, StyleSheet, TextInput, TouchableOpacity  } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

import farmers from '../storage/farmers';
import { Text, View } from '../components/Themed';
import { Button } from '../components/ui/Button';
import { TextButton } from '../components/ui/TextButton';

export default function FarmerProfileScreen({ navigation, route }) {
  // Making Screens Interactive:
  //   We've created a state variable for you.  You can update this when users
  //   make changes with `setFarmer`.
  const [farmer, setFarmer] = useState({
    Name: '',
    Image: { uri: '' },
    Username: '',
    Location: '', 
    Favorites: '',
    Email: '',
  });
  const [comments, setComments] = useState([]);
  const [isNewFarmer, setIsNewFarmer] = useState(true);

  useEffect( () => {
    if (!route.params.farmer) {
      return;
    }
    const foundFarmer = farmers.filter(
      ({Username}) => Username == route.params.farmer);
    if (foundFarmer.length > 0) {
      setIsNewFarmer(false);
      setFarmer(foundFarmer[0]);
    }
  }, []);

  const updateDetails = async() => {
    console.log(farmer);
  }

  return (
    <View style={styles.container}>

      <View style={styles.detailsContainer}>
        <View>
          {farmer.Image.uri !== ''
            ? <Image style={styles.image} source={farmer.Image} />
            : <View style={styles.image} />
          }
        </View>

        <View style={styles.detailsContent}>
          <View style={styles.detailInput}>
            <Text>Username: </Text>
            <TextInput
              autoCapitalize='none'
              placeholder="new username"
              onChangeText={text => {
                // Making Screens Interactive Exercise:
                //   When a user types in the input box, how do we update only
                //   their username?  Right now we don't make any real changes.
                setFarmer({
                  ...farmer,
                });
              }}
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
      </View>

      <View style={styles.commentsContainer}>
        <Text>Comments:</Text>
        <FlatList
            keyExtractor={item => item.key}
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
