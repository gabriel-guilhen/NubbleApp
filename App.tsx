import React from 'react';
import {Text} from './src/components/Text/Text';
import {SafeAreaView} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      {/* <Text style={{fontFamily: 'Satoshi-Bold'}}>Coffstack</Text> */}
      <Text style={{fontFamily: 'Satoshi-MediumItalic'}}>Coffstack</Text>
    </SafeAreaView>
  );
}

export default App;
