import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { IDocumentDetailScreenItem } from './types';
import PrimaryButton from 'components/PrimaryButton';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DocumentDetail: FC<IDocumentDetailScreenItem> = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View className="flex justify-between flex-1">
      <View className="flex-row justify-around">
        <Text className="text-3xl font-bold">{data.data1}</Text>
        <FontAwesome name="pencil-square-o" size={36} color="#000" />
      </View>
      <View className="mx-16 mt-10">
        <Text className="text-xl ">Reciever: {data.data2}</Text>
        <Text className="text-xl ">Amount: {data.data3} kr</Text>
        <Text className="text-xl ">Due date: {data.data4}</Text>
      </View>
      <View className="self-center">
        <PrimaryButton
          label={'Next'}
          type={'filled'}
          color={'primary'}
          size={'large'}
          bordered={true}
          onPress={() => {
            navigation.navigate('PaymentSelectorScreen', { data: data });
          }}
        />
      </View>
    </View>
  );
};

export default DocumentDetail;
