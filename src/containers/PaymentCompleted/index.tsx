import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import PrimaryButton from 'components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

const PaymentCompleted = () => {
  const navigation = useNavigation();
  return (
    <View className="items-center justify-around flex-1">
      <Text className="text-3xl font-bold">🎉 Payment completed 🎉 </Text>
      <FontAwesome name="check-square" size={100} color="#2FD67A" />
      <PrimaryButton
        label={'Start again'}
        type={'filled'}
        color={'primary'}
        size={'large'}
        bordered={true}
        onPress={() => {
          // go back to first screen of the stack and reset the stack
          navigation.popToTop();
        }}
      />
    </View>
  );
};

export default PaymentCompleted;
