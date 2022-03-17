import React, { useContext } from 'react';
import { Text as DefaultText, View as DefaultView } from 'react-native';

import ThemeContext from '../theme/ThemeContext';

export type TextProps = DefaultText['props'];
export type ViewProps = DefaultView['props'];

export function Text(props: TextProps) {
  const { style, ...otherProps } = props;
  const theme = useContext(ThemeContext);
  const color = theme.colors.primaryText;

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, ...otherProps } = props;
  const theme = useContext(ThemeContext);
  const backgroundColor = theme.colors.background;

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
