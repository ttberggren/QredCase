import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import MainStackScreens from 'stacks/MainStack';

const App = () => {
  return (
    <NavigationContainer>
      <MainStackScreens />
    </NavigationContainer>
  );
};

export default App;
