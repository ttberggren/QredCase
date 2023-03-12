import React from 'react';
import { Image } from 'react-native';
import tw from 'utils/tw';

const Logo = () => {
  return (
    <Image
      source={{
        uri: 'https://assets-global.website-files.com/6152c3f8ecb71d43ae546fec/6152c3f8ecb71d2c69547231_logo_qred_default_primary_svg%201%20(1).webp',
      }}
      style={tw`w-10 h-10`}
    />
  );
};

export default Logo;
