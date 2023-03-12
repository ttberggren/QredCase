import React, { FC } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { IPrimaryButtonProps } from './types';
import Colors from 'utils/colors';

const PrimaryButton: FC<IPrimaryButtonProps> = ({
  label,
  onPress,
  size = 'large',
  bordered = false,
  type = 'filled',
  color = 'primary',
  textToUpperCase = false,
  textSize = 20,
}) => {
  const width = Dimensions.get('window').width;

  const large = width / 1.3;
  const small = width / 3;
  const buttonSize = size === 'large' ? large : small;
  const buttonBackgroundColor =
    color === 'primary' ? Colors.PRIMARY_COLOR : Colors.SECONDARY_COLOR;
  const buttonTextColor = type === 'filled' ? '#FFF' : '#6371c2';
  const toUpperCase = textToUpperCase === true ? 'uppercase' : null;
  const buttonBorderRadius = bordered ? 30 : 15;

  const containerCommonStyle = {
    backgroundColor: buttonBackgroundColor,
    paddingVertical: 10,
    width: buttonSize,
    borderRadius: buttonBorderRadius,
  };

  const textCommonStyle = {
    color: buttonTextColor,
    fontSize: textSize,
    textTransform: toUpperCase,
    textAlign: 'center',
  };

  const border = bordered
    ? {
        borderColor: '#e7e7e7',
        borderWidth: 2,
      }
    : null;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={[containerCommonStyle, border]}>
        <Text style={[textCommonStyle]}> {label} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
