import { cssInterop } from 'nativewind';
import { TextInput as RNTextInput, type TextInputProps } from 'react-native';
import type React from 'react';
import { forwardRef } from 'react';

cssInterop(RNTextInput, {
  className: {
    target: 'style',
  },
});

export type TextInputRef = React.ComponentRef<typeof RNTextInput>;

export const TextInput = forwardRef<TextInputRef, TextInputProps>((props, ref) => {
  return <RNTextInput {...props} ref={ref} />;
});

TextInput.displayName = 'TextInput';
