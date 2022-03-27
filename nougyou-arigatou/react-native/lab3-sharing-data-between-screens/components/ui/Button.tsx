/**
 * A shared UI button component.
 */
import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import ThemeContext from '../../theme/ThemeContext';

/**
 * Custom properties for our button that define how it will look.
 */
export type ButtonProps = TouchableOpacity['props'] & {
  // The text to display in the button.
  label: string
  // If true, the button has an outline.
  outline?: boolean
};

export function Button(props: ButtonProps) {
  const { style, outline, label, ...otherProps } = props;
  // Styling Our App Exercise:
  //   How do we access the global colors for visual elements? In React, we use
  //   contexts to access that global information.
  const theme = null;

  // Styling Our App Exercise:
  //   Depending on the component properties we want the button to have a
  //   different look and feel.  Buttons with `outline` should have colors
  //   inverted and a border while regular Buttons have a full background.  How
  //   do we use the shared theme information to make our button styles?
  const backgroundColor = outline
    ? 'black'
    : 'blue';
  const borderColor = outline
    ? 'blue'
    : 'black';
  const borderWidth = outline
    ? 2 : 0;
  const textColor = outline
    ? 'blue'
    : 'black';
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
