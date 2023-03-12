import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'utils/tw';
import Onboarding from '../../containers/Onboarding';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`flex flex-1 bg-documentBackground`}>
      <Onboarding />
    </SafeAreaView>
  );
};

export default HomeScreen;
