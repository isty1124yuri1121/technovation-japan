/**
 * A shared component for displaying a list of farmers.
 */
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import farmers from '../storage/farmers';
import FarmerListItem from './FarmerListItem';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import Images from '../assets/Images';
import { Farmer } from '../types';

export default function FarmerList({ }) {
  // Access the shared navigation object so we can change screens.  List items
  // will use this to navigate to individual farmer profiles.
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        {/*
        Making Screens Interactive Exercise:
          Right now we're manually displaying each farmer in a list.  This
          won't work when new farmers are added.  Instead, change this to use a
          FlatList to make it dynamic.

          React Native provides a FlatList component to display all items in an array.  This requires a few important fields:
           - data: The list of items to display
           - keyExtractor: In a list, a visual element is repeated for each
             value in the array.  They need to each have unique names.  This
             method tells the FlatList how to extract the unique key value for
             each array item.
           - renderItem: This template tells FlatList how to render each array
             item.
        */}
        <TouchableOpacity
          onPress={() => navigation.navigate(
            "Profile", { farmer: farmers[0].Username, name: farmers[0].Name })}>
          <FarmerListItem farmer={farmers[0]} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(
            "Profile", { farmer: farmers[1].Username, name: farmers[1].Name })}>
          <FarmerListItem farmer={farmers[1]} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(
            "Profile", { farmer: farmers[2].Username, name: farmers[2].Name })}>
          <FarmerListItem farmer={farmers[2]} />
        </TouchableOpacity>
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
