import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../storage/firebase';
import { Text, View } from '../components/Themed';
import { Button } from '../components/ui/Button';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const onUnmount = auth.onAuthStateChanged(user => {
      if (!user) {
        return;
      }

      const farmerName = user.providerData[0].displayName || '';
      navigation.navigate("Farmer Profile", { farmer: farmerName });
    });

    return onUnmount;
  });
  const handleSignin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
      })
      .catch(error => alert(error.message));
  };

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
      })
      .catch(error => alert(error.message));
  };
  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding">
      <View style={styles.inputSection}>
        <TextInput
          autoCapitalize='none'
          placeholder="Username"
          onChangeText={setEmail}
          value={email}
          style={styles.input}
        />
        <TextInput
          autoCapitalize='none'
          placeholder="password"
          onChangeText={setPassword}
          value={password}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonSection}>
        <Button 
          onPress={handleSignin}
          style={styles.button}
          label="Login"
        />

        <Button 
          outline
          onPress={handleSignup}
          style={styles.button}
          label="Register"
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputSection: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 5,
    borderWidth: 2,
  },
  buttonSection: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  button: {
    width: '100%',
    marginBottom: 5,
  },
});
