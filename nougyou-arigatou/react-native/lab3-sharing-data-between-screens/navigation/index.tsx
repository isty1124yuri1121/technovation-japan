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
  const theme = useContext(ThemeContext);
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={{
        dark: false,
        colors: {
          card: 'rgb(122, 168, 76)',
          text: 'rgb(255, 255, 255)',
        },
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
