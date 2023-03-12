import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BankId from 'containers/BankId';
import tw from 'utils/tw';
import { IBankIdScreenProps } from './types';

const BankIdScreen: FC<IBankIdScreenProps> = ({ route }) => {
  const { selected } = route.params;
  return (
    <SafeAreaView style={tw`flex flex-1 bg-documentBackground`}>
      <BankId selected={selected} />
    </SafeAreaView>
  );
};

export default BankIdScreen;
