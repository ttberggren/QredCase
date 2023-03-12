import React, { FC, useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import PrimaryButton from 'components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { IPaymentSelectorScreenItem } from './types';
import tw from 'utils/tw';

const PaymentSelector: FC<IPaymentSelectorScreenItem> = ({ data }) => {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState<string>('');

  // for production this would be fetched from an API
  // and the values would be single words
  const options = [
    {
      label: 'Pay now',
      value: 'instant',
    },
    {
      label: 'Pay in 30 days',
      value: '30 days',
    },
    {
      label: 'Split in 12 months',
      value: '12 months',
    },
  ];

  // navigate to the next screen ONLY if the user has selected an option
  function handlePress() {
    if (selectedValue === '') {
      Alert.alert('Please select a payment option');
      return;
    }
    navigation.navigate('BankIdScreen', { selected: selectedValue });
  }

  return (
    <View className="justify-between flex-1">
      <View className="flex-row justify-around">
        <Text className="text-3xl font-bold">When do you want to pay?</Text>
      </View>

      {options.map(option => (
        <TouchableOpacity
          key={option.value}
          className="flex-row items-center ml-4"
          onPress={() => {
            // if the user clicks on the same option twice, deselect it
            if (selectedValue === option.value) {
              setSelectedValue('');
            } else {
              setSelectedValue(option.value);
            }
          }}
        >
          <View className="items-center justify-center mr-4 border-2 border-black rounded-sm w-14 h-14">
            {selectedValue === option.value && (
              <View style={tw`w-14 h-14 bg-primary`} />
            )}
          </View>
          <View className="flex-col">
            <Text className="text-lg font-bold ">{option.label}</Text>
            {option.value === 'instant' && (
              <Text className="text-base">{data.data3} kr</Text>
            )}
            {option.value === '30 days' && (
              <Text className="text-base">{data.data3 + 150} kr</Text> // small extra fee
            )}
            {option.value === '12 months' && (
              <Text className="text-base">{data.data3 / 12} kr</Text> // should be added fees as well in final version
            )}
          </View>
        </TouchableOpacity>
      ))}

      <View className="items-center">
        <PrimaryButton
          label={'Next'}
          type={'filled'}
          color={'primary'}
          size={'large'}
          bordered={true}
          onPress={() => {
            handlePress();
          }}
        />
      </View>
    </View>
  );
};

export default PaymentSelector;
