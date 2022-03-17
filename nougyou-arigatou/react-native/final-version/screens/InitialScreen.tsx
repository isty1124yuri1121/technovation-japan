import React from 'react';

import { View } from '../components/Themed';
import { TextButton } from '../components/ui/TextButton';

export default function InitialScreen({ navigation }) {
  return (
    <View>
      <TextButton
        onPress={() => navigation.navigate("Login")}
        title="Farmer"
      />
      <TextButton
        onPress={() => navigation.navigate("Root")}
        title="Consumer"
      />
    </View>
  )
}
