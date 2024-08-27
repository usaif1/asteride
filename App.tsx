// dependencies
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
// import Toast from 'react-native-toast-message';

// navigators
import {AuthNavigator} from './navigators';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default App;
