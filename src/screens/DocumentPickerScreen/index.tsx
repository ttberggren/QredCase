import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'utils/tw';
import ImageSelector from '../../containers/ImageSelector';

const DocumentPickerScreen = () => {
  return (
    <SafeAreaView style={tw`flex flex-1 bg-documentBackground`}>
      <View className="items-center flex-1 justify-evenly">
        <ImageSelector />
      </View>
    </SafeAreaView>
  );
};

export default DocumentPickerScreen;
