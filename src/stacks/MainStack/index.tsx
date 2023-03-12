import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from 'screens/HomeScreen';
import DocumentPickerScreen from 'screens/DocumentPickerScreen';
import DocumentDetailScreen from 'screens/DocumentDetailScreen';
import PaymentSelectorScreen from 'screens/PaymentSelectorScreen';
import BankIdScreen from 'screens/BankIdScreen';
import Logo from 'components/Logo';
import tw from 'utils/tw';

const Stack = createNativeStackNavigator();

const MainStackScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: props => <Logo {...props} />,
        headerTintColor: '#2FD67A', // should be dynamically changed from the theme
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="DocumentPickerScreen"
        component={DocumentPickerScreen}
      />
      <Stack.Screen
        name="DocumentDetailScreen"
        component={DocumentDetailScreen}
      />
      <Stack.Screen
        name="PaymentSelectorScreen"
        component={PaymentSelectorScreen}
      />
      <Stack.Screen name="BankIdScreen" component={BankIdScreen} />
    </Stack.Navigator>
  );
};

export default MainStackScreens;
