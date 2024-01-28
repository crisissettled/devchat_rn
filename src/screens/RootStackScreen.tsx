import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '@screens/SplashScreen';
import SignInScreen from '@screens/SignIn';
import ChatTabsScreen from '@screens/ChatTabs';

import {RootState} from '@app/store';
import {RootStackParamList} from '@shared/types/navigationTypes';
import {FetchStatus} from '@shared/types/enums';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackScreen() {
  const user = useSelector((state: RootState) => state.user);

  console.log(user.status, 'user.status');
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {user.status === FetchStatus.PENDING ? (
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : user.token == null ? (
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: 'Sign in',
            // When logging out, a pop animation feels intuitive
            //animationTypeForReplace: state.isSignout ? 'pop' : 'push',
          }}
        />
      ) : (
        <Stack.Screen
          name="ChatTabs"
          options={{headerShown: false}}
          component={ChatTabsScreen}
        />
      )}
    </Stack.Navigator>
  );
}
