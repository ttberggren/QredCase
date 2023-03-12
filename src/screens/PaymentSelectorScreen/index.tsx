import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IPaymentSelectorScreenProps } from './types';
import tw from 'utils/tw';

import PaymentSelector from 'containers/PaymentSelector';

const PaymentSelectorScreen: FC<IPaymentSelectorScreenProps> = ({ route }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={tw`flex flex-1 bg-documentBackground`}>
      <PaymentSelector data={data} />
    </SafeAreaView>
  );
};

export default PaymentSelectorScreen;
