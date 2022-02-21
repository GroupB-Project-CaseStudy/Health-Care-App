import React, { FC } from 'react';
import { ColorValue, StyleSheet } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import { IconProps as BaseIconProps } from 'react-native-vector-icons/Icon';
import * as config from './config.json';
const BaseIcon = createIconSetFromFontello(config);

export type IconName =
  | 'ambulance'
  | 'diagnose'
  | 'nav-menu'
  | 'heart-plus'
  | 'badge'
  | 'heart-beat'
  | 'pill'
  | 'heart'
  | 'checkup'
  | 'heart-fill'
  | 'search'
  | 'cancel'
  | 'close-filled'
  | 'left-arrow'
  | 'shot';

export interface IconProps extends Omit<BaseIconProps, 'color'> {
  name: IconName;
  color?: ColorValue;
}

const Icon: FC<IconProps> = ({ style, size = 24, color, ...otherProps }) => (
  <BaseIcon
    style={StyleSheet.compose({ lineHeight: size, textAlign: 'center' }, style)}
    size={size}
    color={color as string}
    {...otherProps}
  />
);

export default Icon;
