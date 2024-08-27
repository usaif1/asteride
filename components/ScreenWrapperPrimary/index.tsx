import {StyleSheet, Text, View, ViewProps} from 'react-native';
import React from 'react';

type ScreenWrapperPrimaryProps = {
  children: React.ReactNode;
};

const ScreenWrapperPrimary: React.FC<ScreenWrapperPrimaryProps & ViewProps> = ({
  children,
}) => {
  return (
    <View style={{flex: 1, paddingHorizontal: 16, paddingTop: 10}}>
      {children}
    </View>
  );
};

export default ScreenWrapperPrimary;

const styles = StyleSheet.create({});
