import React, { FC, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PrimaryButton from 'components/Button/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { IPaymentSelectorScreenItem } from './types';
import tw from 'utils/tw';

const PaymentSelector: FC<IPaymentSelectorScreenItem> = ({ data }) => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState('cash');

  const options = [
    {
      label: 'Pay now',
      value: 'instant',
    },
    {
      label: 'Pay in 30 days',
      value: 'month',
    },
    {
      label: 'Split in 12 months',
      value: 'year',
    },
  ];

  return (
    <View className="justify-between flex-1">
      <View className="flex-row justify-around">
        <Text className="text-3xl font-bold">When do you want to pay?</Text>
      </View>

      {options.map(option => (
        <TouchableOpacity
          key={option.value}
          className="flex-row items-center ml-4"
          onPress={() => setSelected(option.value)}
        >
          <View className="items-center justify-center mr-4 border-2 border-black rounded-sm w-14 h-14">
            {selected === option.value && (
              <View style={tw`bg-blue-200 w-14 h-14 bg-primary `} />
            )}
          </View>
          <View className="flex-col">
            <Text className="text-lg font-bold ">{option.label}</Text>
            {option.value === 'instant' && (
              <Text className="text-base">{data.data3} kr</Text>
            )}
            {option.value === 'month' && (
              <Text className="text-base">{data.data3 + 150} kr</Text> // small extra fee
            )}
            {option.value === 'year' && (
              <Text className="text-base">{data.data3 / 12} kr</Text> // should be added fees as well
            )}
          </View>
        </TouchableOpacity>
      ))}

      <View className="items-center">
        <PrimaryButton
          label={'Next'}
          type={'filled'}
          textSize={16}
          color={'primary'}
          size={'large'}
          bordered={true}
          onPress={() => {
            navigation.navigate('BankIdScreen');
          }}
        />
      </View>
    </View>
  );
};

export default PaymentSelector;
