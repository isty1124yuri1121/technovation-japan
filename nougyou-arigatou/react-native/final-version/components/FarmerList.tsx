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
  const farmers = useSelector((state) => state.farmer);
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <FlatList
          data={farmers}
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
