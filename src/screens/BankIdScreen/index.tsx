import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BankId from 'containers/BankId';
import tw from 'utils/tw';

const BankIdScreen = () => {
  return (
    <SafeAreaView style={tw`flex flex-1 bg-documentBackground`}>
      <Text>BankIdScreen</Text>
      <BankId />
    </SafeAreaView>
  );
};

export default BankIdScreen;
