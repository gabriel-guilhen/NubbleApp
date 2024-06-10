import React from 'react';
import {TextInput, TextInputProps} from '../TextInput/TextInput';
import {Icon} from '../Icon/Icon';

type PasswordInputProps = TextInputProps;
export function PasswordInput(
  props: Omit<PasswordInputProps, 'RightComponent'>,
) {
  const [isSecureTextEntry, setIsSecureTextEntry] = React.useState(true);
  const toggleSecureTextEntry = () => setIsSecureTextEntry(prev => !prev);
  return (
    <TextInput
      boxProps={{mb: 's48'}}
      secureTextEntry={isSecureTextEntry}
      {...props}
      RightComponent={
        <Icon
          color="gray2"
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
          onPress={toggleSecureTextEntry}
        />
      }
    />
  );
}
