/**
 * A shared component for displaying a list of farmers.
 */
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FarmerListItem from './FarmerListItem';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import Images from '../assets/Images';
import { Farmer } from '../types';

export default function FarmerList({ }) {
  // Access the global React Redux data store and get the list of farmers.
  const farmers = useSelector((state) => state.farmer);
  // Access the shared navigation object so we can change screens.  List items
  // will use this to navigate to individual farmer profiles.
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        {/*
        Displaying Repeated Data:
          React Native provides a FlatList component to display all items in an array.  This requires a few important fields:
           - data: The list of items to display
           - keyExtractor: In a list, a visual element is repeated for each
             value in the array.  They need to each have unique names.  This
             method tells the FlatList how to extract the unique key value for
             each array item.
           - renderItem: This template tells FlatList how to render each array
             item.
        */}
        <FlatList
          data={farmers}
          numColumns={2}
          keyExtractor={(item) => item.Name}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(
                "Profile", { farmer: item.Username, name: item.Name })}>
              <FarmerListItem farmer={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 24 
  },
});
