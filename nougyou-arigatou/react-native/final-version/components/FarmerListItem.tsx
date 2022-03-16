import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Farmer } from '../types';
import { Text, View } from './Themed';
import Images from '../assets/Images';

const emojiMap = {
  'garlic': '🧄',
  'onion': '🧅',
  'rice': '🌾',
  'spinach': '🥬',
};

export default function FarmerListItem({ farmer }: { farmer: Farmer }) {
  const favorites = farmer.Favorites.split(',')
    .map( (fave) => emojiMap[fave] || fave )
    .join(' ');
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={farmer.Image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{farmer.Name}</Text>
        <View style={styles.row}>
          <Text style={styles.details}>{farmer.Location}</Text>
          <Text style={styles.details}>{favorites}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 4,
    marginTop: 4,
  },
  image: {
    padding: 10,
    height: 80,
    width: 80,
  },
  row: {
    flexDirection: 'row',
    paddingTop: 4,
  },
  name: {
    fontSize: 24,
  },
  details: {
    fontSize: 18,
    marginRight: 4,
  },
  textContainer: {
    padding: 4,
  }
});
