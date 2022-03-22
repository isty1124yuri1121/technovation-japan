/**
 * User Authentication:
 *   We use firebase to authenticate users.  This has to include:
 *   - Registering a new user.
 *   - Letting a current user login.
 *   - When a logged in user opens the app, automatically skip the login screen.
 */
import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native';

// User Authentication Exercise:
//   What libraries should we import?
import { } from 'firebase/auth';
import { auth } from '../storage/firebase';

import { Text, View } from '../components/Themed';
import { Button } from '../components/ui/Button';

export default function LoginScreen({ navigation }) {
  // User Authentication Exercis :
  //   - What screen state do we need? What two values are important for both
  //   new users and users that want to login?  Create the right state
  //   variables with `useState`
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // User Authentication:
  //   useEffect lets us run some code only when component state changes.  To
  //   skip the login screen for signed in users, we want to do some checks
  //   only once when the component loads, for that we can use useEffect and
  //   ignore all the state.
  useEffect(() => {
    // User Authentication Exercise:
    //  What firebase method tells us if the user is already logged in?
    const onUnmount = auth.someMethod(user => {
      if (!user) {
        return;
      }

      // Changing Screens:
      //   When a user is logged in, how do we go to their farmer profile?
      const farmerName = user.providerData[0].displayName || '';
      navigation.navigate("Farmer Profile", { farmer: farmerName });
    });

    return onUnmount;
  });

  // Making Screens Interactive:
  //   - What should we do when a user clicks the login button?
  // User Authentication Exercise:
  //   - How do we login with the user's information?
  const handleSignin = () => {
  };

  // Making Screens Interactive:
  //   - What should we do when a user clicks the register button?
  // User Authentication Exercise:
  //   - How do we login with the user's information?
  const handleSignup = () => {
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
