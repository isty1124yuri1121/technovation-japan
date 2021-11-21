/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FarmerListScreen from '../screens/FarmerListScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

const FarmerTheme = {
  dark: false,
  colors: {
    primary: 'rgb(76, 168, 186)',
    background: 'rgb(255, 255, 255)',
    card: 'rgb(122, 168, 76)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(76, 186, 94)',
  },
};

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={FarmerTheme}>
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
        name="Root"
        component={FarmerListScreen}
        options={{ headerShown: true, title: 'Farmers' }} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }} />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={ ({ route }) => ({ headerShown: true, title: route.params.name }) } />
    </Stack.Navigator>
  );
}
