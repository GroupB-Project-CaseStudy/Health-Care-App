import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AppStack from '../AppStack';

const Stack = createStackNavigator();

const CharttingStack = () => {
  return (
    <Stack.Navigator initialRouteName="Chartting" mode="modal" headerMode="none">
      <Stack.Screen name="Chartting">
        {() => (
          <AppStack initialRouteName="Chartting" initialParams={undefined} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default CharttingStack;
