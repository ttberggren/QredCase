import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ImageSelectorComponent from 'components/ImageSelectorComponent';
import callGoogleVisionAsync from 'utils/GoogleCloudVision';
import PrimaryButton from '../../components/Button/PrimaryButton';
import { mockDataFunction } from '../../api';
import { useNavigation } from '@react-navigation/native';

const ImageSelector = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [text, setText] = useState(
    'After you have selected an image, you can choose whether you want to continue with it or redo it',
  );
  const [data, setData] = useState<{
    data1: string;
    data2: string;
    data3: number;
    data4: string;
  } | null>();

  const pickImage = async () => {
    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      mediaType: 'photo',
      base64: true,
    };

    let result = await ImagePicker.launchImageLibraryAsync(options);
    if (result.uri) {
      setImage(result.uri);

      // wont return anything now since the API key has been deactiavted
      if (result.assets !== null) {
        // try to send to google cloud vision
        const responseData = await callGoogleVisionAsync(
          result.assets[0].base64,
        );
        // set text to response from google cloud vision
        setText(responseData.text);
      }
    }
  };

  useEffect(() => {
    async function fetchData() {
      const response = await mockDataFunction();
      setData(response);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <ImageSelectorComponent text={text} image={image} pickImage={pickImage} />
      <View className="flex-row">
        {image && (
          <>
            <PrimaryButton
              label={'Looks good!'}
              type={'filled'}
              textSize={16}
              color={'primary'}
              size={'small'}
              bordered={true}
              onPress={() => {
                navigation.navigate('DocumentDetailScreen', { data: data });
              }}
            />
            <PrimaryButton
              label={'Retake photo'}
              type={'filled'}
              color={'secondary'}
              textSize={16}
              size={'small'}
              bordered={true}
              onPress={() => {
                setImage(null);
              }}
            />
          </>
        )}
      </View>
    </>
  );
};
export default ImageSelector;
