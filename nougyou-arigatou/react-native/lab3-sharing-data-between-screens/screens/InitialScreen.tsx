/**
 * The first screen all users will see.
 */
import React from 'react';

import { View } from '../components/Themed';
import { TextButton } from '../components/ui/TextButton';

export default function InitialScreen({ navigation }) {
  // Changing Screens:
  //   When a user clicks the `Farmer` button, what screen should we go to?
  //   When a user clicks the `Consumer` button, what screen should we go to?
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
