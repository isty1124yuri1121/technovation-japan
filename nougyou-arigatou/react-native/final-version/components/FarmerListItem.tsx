import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Farmer } from '../types';
import { Text, View } from './Themed';
import Images from '../assets/Images';

export default function FarmerListItem({ farmer }: { farmer: Farmer }) {
  return (
    <View>
      <Image style={styles.image} source={farmer.Image} />
      <Text style={styles.name}>{farmer.Name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    padding: 10,
    height: 80,
    width: 80,
  },
  name: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
