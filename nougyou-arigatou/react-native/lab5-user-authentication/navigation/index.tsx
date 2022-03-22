/**
 * These components support navigating between different screens.
 *
 * To learn more about React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';

import LinkingConfiguration from './LinkingConfiguration';
import InitialScreen from '../screens/InitialScreen';
import LoginScreen from '../screens/LoginScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FarmerProfileScreen from '../screens/FarmerProfileScreen';
import FarmerListScreen from '../screens/FarmerListScreen';
import ThemeContext from '../theme/ThemeContext';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';

export default function Navigation({}) {
  // Sharing styles and themes:
  //   How do we make sure the app title bar uses the shared colors we want?
  //   We can access the shared context to get the colors and then send them to
  //   the NavigationContainer.  If the theme colors have the right names, this
  //   will work just right.
  const theme = useContext(ThemeContext);
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={{
        dark: false,
        colors: theme.colors,
      }}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Switching between screens:
 *   How do we switch between screens? First we have to list all possible
 *   screens here, otherwise the navigator won't know what screen to go to
 *   given a name.
 */
function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="Initial"
        component={InitialScreen}
        options={{ headerShown: true, title: 'Who Are You?' }} />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: true, title: 'Login' }} />
      <Stack.Screen
        name="Root"
        component={FarmerListScreen}
        options={{ headerShown: true, title: 'Farmers' }} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }} />
      <Stack.Screen
        name="Farmer Profile"
        component={FarmerProfileScreen}
        options={ ({ route }) => ({ headerShown: true, title: route.params.farmer }) } />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={ ({ route }) => ({ headerShown: true, title: route.params.name }) } />
    </Stack.Navigator>
  );
}
