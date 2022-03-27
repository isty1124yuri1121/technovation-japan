/**
 * A collection of UI components that use one approach for using a shared
 * theme.
 */
import React, { useContext } from 'react';
import { Text as DefaultText, View as DefaultView } from 'react-native';

import ThemeContext from '../theme/ThemeContext';

export type TextProps = DefaultText['props'];
export type ViewProps = DefaultView['props'];

export function Text(props: TextProps) {
  const { style, ...otherProps } = props;
  // Styling Our App Exercise:
  //   Look at `navigation/index.tsx` and see how we get the shared theme from
  //   the ThemeContext.  Do the same here.
  //   With the theme, pick a color value to use for this component instead of
  //   the hard coded color value.
  const color = '#000';

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, ...otherProps } = props;
  // Styling Our App Exercise:
  //   Look at `navigation/index.tsx` and see how we get the shared theme from
  //   the ThemeContext.  Do the same here.
  //   With the theme, pick a color value to use for this component instead of
  //   the hard coded color value.
  const backgroundColor = '#fff';

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
