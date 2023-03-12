import React, { FC, useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { IBankIdItemProps } from './types';
import tw from 'utils/tw';
import PrimaryButton from 'components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

const BankId: FC<IBankIdItemProps> = ({ selected }) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);

  // handle press with a spinner and then navigate to the next screen
  const handlePress = () => {
    setLoading(true);
    // pretend to spin for 2 seconds to simulate the user signing in to BankID
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('PaymentCompletedScreen');
    }, 2000);
  };

  return (
    <View className="items-center justify-center">
      <Image
        className="w-full h-5/6"
        source={{ uri: 'https://tangoaml.com/media/wf1lazmw/bankid_logo.png' }}
      />
      <Text className="text-base">
        You have selected{' '}
        <Text style={tw`text-xl font-bold text-primary`}>{selected}</Text> as
        your payment, press the button below to start your sign in to BankID
      </Text>
      <View className="mt-4">
        <PrimaryButton
          label={
            loading ? (
              <ActivityIndicator color="#FFF" size="small" />
            ) : (
              'Authenticate'
            )
          }
          type={'filled'}
          textSize={20}
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

export default BankId;
