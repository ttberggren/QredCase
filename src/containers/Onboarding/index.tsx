import React from 'react';
import { View, Text } from 'react-native';
import tw from 'utils/tw';
import PrimaryButton from 'components/Button/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

const Onboarding = () => {
  const navigation = useNavigation();
  return (
    <View className="items-center flex-1 justify-evenly">
      <View>
        <Text style={tw`text-lg font-bold `}>
          Welcome to our invoice reading service
        </Text>
      </View>

      <View className="items-center justify-end">
        <PrimaryButton
          label={'Start scanning!'}
          color={'primary'}
          type="filled"
          textSize={16}
          size={'large'}
          bordered={true}
          onPress={() => {
            navigation.navigate('DocumentPickerScreen');
          }}
        />
      </View>
    </View>
  );
};

export default Onboarding;
