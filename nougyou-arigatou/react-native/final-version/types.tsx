/**
 * We define types used throughout the application.
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

/**
 * A Typescript interface for a farmer object.
 */
export type Farmer = {
  // The name of the farmer.
  Name: string,
  // The URL of the farmer's profile picture.
  Image: string,
  // The location of the farmer.
  Location: string,
  // The farmer's favorite products.
  Favorites: string,
  // The farmer's username.
  Username: string,
};

/**
 * A typescript interface for comments.
 */
export type Comment = {
  // A unique string value for the comment.
  uuid: string,
  // The farmer's Username.
  Farmer: string,
  // The comment text.
  Content: string,
};

/**
 * The types below are for doing navigation.
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
