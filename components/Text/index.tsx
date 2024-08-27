// dependencies
import React from 'react';
import {Text as RNText, TextStyle, TextProps, StyleSheet} from 'react-native';

// types
import {TextColors, TextSizes, TextEnum, TextSizeEnum} from '../../styles';

enum LetterSpacing {
  'widest' = 1,
  'normal' = 0,
}

enum Appearance {
  opaque = 1,
  light = 0.6,
}

interface CustomTextProps extends TextProps {
  size?: TextSizes;
  weight?: TextStyle['fontWeight'];
  color?: TextColors;
  letterSpacing?: 'widest' | 'normal';
  style?: TextStyle;
  lines?: number;
  ending?: 'middle' | 'head' | 'tail' | 'clip';
  appearance?: 'opaque' | 'light';
  children: React.ReactNode;
}

const Text: React.FC<CustomTextProps> = props => {
  const styles = StyleSheet.create({
    textStyle: {
      fontSize: TextSizeEnum[props.size || 'base'],
      fontWeight: props.weight,
      color: TextEnum[props.color || 'textPrimary'],
      letterSpacing: LetterSpacing[props.letterSpacing || 'normal'],
      opacity: Appearance[props.appearance || 'opaque'],
      ...props.style,
    },
  });

  return (
    <RNText
      {...props}
      numberOfLines={props.lines}
      ellipsizeMode={props.ending}
      style={styles.textStyle as TextStyle}>
      {props.children}
    </RNText>
  );
};

export default Text;
