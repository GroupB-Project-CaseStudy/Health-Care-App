import React, { Fragment } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootParamsList } from '../types';
import Welcome from '../../screens/Welcome';
import SignUp from '../../screens/SignUp';
import SignIn from '../../screens/SignIn';
import DrawerStack from '../DrawerStack';
import useAuth from '../../services/useAuth';
import ForgotPassword from '../../screens/ForgotPassword';

const Stack = createStackNavigator<RootParamsList>();

const RootStack = () => {
  const { currentUser } = useAuth();
  const loggedIn = currentUser !== null;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!loggedIn ? (
        <Fragment>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Fragment>
      ) : (
        <Stack.Screen name="App" component={DrawerStack} />
      )}
    </Stack.Navigator>
  );
};

export default RootStack;
