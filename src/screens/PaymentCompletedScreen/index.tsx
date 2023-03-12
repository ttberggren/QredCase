import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PaymentCompleted from 'containers/PaymentCompleted';
import tw from 'utils/tw';

const PaymentCompletedScreen = () => {
  return (
    <SafeAreaView style={tw`flex flex-1 bg-documentBackground`}>
      <PaymentCompleted />
    </SafeAreaView>
  );
};

export default PaymentCompletedScreen;
