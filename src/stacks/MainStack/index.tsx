import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from 'screens/HomeScreen';
import DocumentPickerScreen from 'screens/DocumentPickerScreen';
import DocumentDetailScreen from 'screens/DocumentDetailScreen';
import PaymentSelectorScreen from 'screens/PaymentSelectorScreen';
import BankIdScreen from 'screens/BankIdScreen';
import PaymentCompletedScreen from 'screens/PaymentCompletedScreen';
import Logo from 'components/Logo';
import tw from 'utils/tw';

const Stack = createNativeStackNavigator();

// gather all the screens in one stack, should be set up in <Stack.Group> for easier navigation and management
const MainStackScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: props => <Logo {...props} />,
        headerTintColor: '#2FD67A', // should be dynamically changed from the theme
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
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
      <Stack.Screen
        name="PaymentCompletedScreen"
        component={PaymentCompletedScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStackScreens;
