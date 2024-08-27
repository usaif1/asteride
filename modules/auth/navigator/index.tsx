// dependencies
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import {Login} from '../../screens';
import {SafeAreaView} from 'react-native-safe-area-context';

export type AuthStackParamList = {
  login: undefined;
  'verify-otp': undefined;
  protected: undefined;
  splash: undefined;
  'complete-profile': undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator initialRouteName="login">
      <AuthStack.Screen
        name="login"
        component={Login}
        options={{title: 'Login'}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
