import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import ThemeContext from '../../theme/ThemeContext';

export type ButtonProps = TouchableOpacity['props'] & {
  label: string
  outline?: boolean
};

export function Button(props: ButtonProps) {
  const { style, outline, label, ...otherProps } = props;
  const theme = useContext(ThemeContext);

  const backgroundColor = outline
    ? theme.colors.primary
    : theme.colors.secondaryBackground;
  const borderColor = outline
    ? theme.colors.secondaryBackground
    : theme.colors.primary;
  const borderWidth = outline
    ? 2 : 0;
  const textColor = outline
    ? theme.colors.secondaryBackground
    : theme.colors.primary;
  const styles = StyleSheet.create({
    button: {
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: borderWidth,
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    text: {
      color: textColor,
      fontWeight: '700',
      fontSize: 16,
    },
  });

  return (
    <TouchableOpacity style={[styles.button, style]} {...otherProps}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}
