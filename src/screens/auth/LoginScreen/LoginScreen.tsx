import {View, SafeAreaView} from 'react-native';
import React from 'react';
import {Icon} from '../../../components/Icon/Icon';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';

export function LoginScreen() {
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 24}}>
        <Text mb="s8" preset="headingLarge">
          Olá!
        </Text>
        <Text mb="s40" preset="paragraphLarge">
          Digite seu e-mail e senha para entrar
        </Text>
        <TextInput
          label="E-mail"
          placeholder="Digite seu e-mail"
          boxProps={{mb: 's20'}}
        />
        <TextInput
          label="Senha"
          placeholder="Digite sua senha"
          RightComponent={<Icon color="gray2" name="eyeOn" />}
          boxProps={{mb: 's10'}}
        />
        <Text color="primary" preset="paragraphSmall" bold fontSize={14}>
          Esqueci minha senha
        </Text>

        <Button title="Entrar" mt="s48" />
        <Button title="Criar uma conta" preset="outline" mt="s12" />
      </View>
    </SafeAreaView>
  );
}
