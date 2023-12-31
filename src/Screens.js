import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Screen1 from './screen1';
import Screen2 from './screen2';
import Screen3 from './screen3';
import Tabs from './Tabs';

const Stack = createNativeStackNavigator();

export default function Screens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="IndividualTabs"
        component={Tabs}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Contacts" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
    </Stack.Navigator>
  );
}
