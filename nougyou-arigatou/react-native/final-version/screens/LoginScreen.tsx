import React, { useState } from 'react';
import { Button, FlatList, Image, Platform, StyleSheet, TextInput } from 'react-native';

import { Text, View } from '../components/Themed';

export default function LoginScreen({ navigation }) {
  const [text, setText] = useState('');

  return (
    <View>
      <View style={styles.row}>
        <TextInput
          placeholder="Username"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        <Button
          onPress={() => navigation.navigate("Farmer Profile", { farmer: text })}
          title="Login"
        />
      </View>
      <View style={styles.row}>
        <Button
          onPress={() => navigation.navigate("New Farmer")}
          title="New Farmer"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
