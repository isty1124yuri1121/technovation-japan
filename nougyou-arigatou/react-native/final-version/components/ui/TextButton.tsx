import React, { useContext } from 'react';
import { Button as DefaultButton } from 'react-native';

import ThemeContext from '../../theme/ThemeContext';

export type TextButtonProps = DefaultButton['props'];

export function TextButton(props: TextButtonProps) {
  const { style, ...otherProps } = props;
  const theme = useContext(ThemeContext);
  const color = theme.colors.linkText;

  return (
    <DefaultButton
      color={color}
      style={style}
      {...otherProps}
    />
  );
}
