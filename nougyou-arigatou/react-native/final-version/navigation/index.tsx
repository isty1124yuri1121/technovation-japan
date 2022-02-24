/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { ColorSchemeName } from 'react-native';

import ThemeContext from '../ThemeContext';
import InitialScreen from '../screens/InitialScreen';
import LoginScreen from '../screens/LoginScreen';
import NewFarmerScreen from '../screens/NewFarmerScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FarmerProfileScreen from '../screens/FarmerProfileScreen';
import FarmerListScreen from '../screens/FarmerListScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
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
        name="New Farmer"
        component={NewFarmerScreen}
        options={{ headerShown: true, title: 'Signup' }} />
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
        options={ ({ route }) => ({ headerShown: true, title: route.params.name }) } />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={ ({ route }) => ({ headerShown: true, title: route.params.name }) } />
    </Stack.Navigator>
  );
}
