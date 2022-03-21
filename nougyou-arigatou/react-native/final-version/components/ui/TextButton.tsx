/**
 * A shared UI text button component.
 */
import React, { useContext } from 'react';
import { Button as DefaultButton } from 'react-native';

import ThemeContext from '../../theme/ThemeContext';

export type TextButtonProps = DefaultButton['props'];

export function TextButton(props: TextButtonProps) {
  const { style, ...otherProps } = props;
  // Sharing styles and themes:
  //   How do we access the global colors for visual elements? In React, we use
  //   contexts to access that global information.
  const theme = useContext(ThemeContext);
  // Sharing styles and themes:
  //   When we have a color choice from the shared theme, what do we do with
  //   it?
  const color = theme.colors.linkText;

  return (
    <DefaultButton
      color={color}
      style={style}
      {...otherProps}
    />
  );
}
