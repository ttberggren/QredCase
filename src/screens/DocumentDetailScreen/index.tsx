import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IDocumentDetailDataProps } from './types';
import DocumentDetail from 'containers/DocumentDetail';
import tw from 'utils/tw';

const DocumentDetailScreen: FC<IDocumentDetailDataProps> = ({ route }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={tw`flex flex-1 bg-documentBackground`}>
      <DocumentDetail data={data} />
    </SafeAreaView>
  );
};

export default DocumentDetailScreen;
