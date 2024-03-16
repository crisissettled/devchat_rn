import React from 'react';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '@screens/SplashScreen';
import SignInScreen from '@screens/SignInScreen';
import ChatTabsScreen from '@screens/ChatTabsScreen';
import SignUpScreen from '@screens/SignUpScreen';

import {RootState} from '@app/store';
import {RootStackParamList} from '@screens/types';
import {FetchStatus} from '@shared/types/enums';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackScreen() {
  const user = useSelector((state: RootState) => state.user);

  console.log(user, '<-----logged in user');
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {user.status === FetchStatus.PENDING ? (
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : user.token == null || user.token === '' ? (
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

      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          title: 'Sign Up',
        }}
      />
    </Stack.Navigator>
  );
}
