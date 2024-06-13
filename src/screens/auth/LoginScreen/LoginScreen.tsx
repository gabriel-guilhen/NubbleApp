import React from 'react';
import {Button} from '../../../components/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text} from '../../../components/Text/Text';
import {Screen} from '../../../components/Screen/Screen';
import {RootStackParamList} from '../../../routes/Routes';
import {Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import FormTextInput from '../../../components/Form/FormTextInput';
import FormPasswordInput from '../../../components/Form/FormPasswordInput';
import {zodResolver} from '@hookform/resolvers/zod';
import {LoginSchema, loginSchema} from './loginSchema';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, password}: LoginSchema) {
    // chamar a API de login
    Alert.alert(`Email: ${email}\n Password: ${password}`);
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen scrollable>
      <Text mb="s8" preset="headingLarge">
        Olá!
      </Text>
      <Text mb="s40" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />
      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's10'}}
      />

      <Text
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        bold
        fontSize={14}>
        Esqueci minha senha
      </Text>

      <Button
        disabled={!formState.isValid}
        title="Entrar"
        mt="s48"
        onPress={handleSubmit(submitForm)}
      />
      <Button
        title="Criar uma conta"
        onPress={navigateToSignUpScreen}
        preset="outline"
        mt="s12"
      />
    </Screen>
  );
}
