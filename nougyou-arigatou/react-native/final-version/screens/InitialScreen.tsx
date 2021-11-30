import React from 'react';
import { Button } from 'react-native';

import { View } from '../components/Themed';

export default function InitialScreen({ navigation }) {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate("Login")}
        title="Farmer"
      />
      <Button
        onPress={() => navigation.navigate("Root")}
        title="Consumer"
      />
    </View>
  )
}
