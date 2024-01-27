import {useEffect, useReducer, useMemo} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '@screens/SplashScreen';
import SignInScreen from '@screens/SignIn';
import ChatTabsScreen from '@screens/ChatTabs';

import {AuthContext} from '@utils/authContext';

import {PropsAuthState, PropsAuthAction} from '@shared/types/authTypes';
import {RootStackParamList} from '@shared/types/navigationTypes';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const initState = {
    isLoading: false,
    isSignout: false,
    userToken: null,
  };

  const [state, dispatch] = useReducer(
    (prevState: PropsAuthState, action: PropsAuthAction) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
          };
        case 'SIGN_IN':
          return {
            isLoading: action.isLoading,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    initState,
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken = null;

      try {
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }
      dispatch({type: 'RESTORE_TOKEN', token: userToken, isLoading: false});
    };

    bootstrapAsync();
  }, []);

  console.log(state, 'state--->');

  const authContext = useMemo(
    () => ({
      signIn: async () => {
        dispatch({
          type: 'SIGN_IN',
          isLoading: true,
        });

        fetch('https://zcvf.io/devchat//api/User/SignIn', {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: 'james',
            password: 'aaa',
            keepLoggedIn: true,
          }),
        })
          .then(response => response.json())
          .then(result => {
            setTimeout(() => {
              dispatch({
                type: 'SIGN_IN',
                token: result?.data?.token,
                isLoading: false,
              });
            }, 1000);
          });
      },
      signOut: () => dispatch({type: 'SIGN_OUT', isLoading: false}),
      signUp: async () => {
        dispatch({
          type: 'SIGN_IN',
          token: 'dummy-auth-token',
          isLoading: false,
        });
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {state.isLoading ? (
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{
                title: 'Sign in',
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
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
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
