import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Icon} from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 20, marginBottom: 10}}>
          <Button title="teste" loading={true} />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Button title="teste" preset="outline" loading={false} />
        </View>
        <Icon name="eyeOn" size={70} color="carrotSecondary" />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
