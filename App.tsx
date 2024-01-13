import {Button, alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from './types/StackScreen';

import HomeScreen from './screens/HomeScreen';
import CreatePostScreen from './screens/CreatePostScreen';

import LogoTitle from './component/LogoTitle';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f2c1d0',
          },
          headerTintColor: '#e5771d',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            // title: 'My home',
            // headerStyle: {
            //   backgroundColor: '#baa',
            // },
            // headerTintColor: '#dfd',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },

            headerTitle: props => <LogoTitle />,
            headerRight: () => (
              <Button
                onPress={() => console.log('This is a Header button!')}
                title="Info"
                color="#0081F1"
              />
            ),
          }}
        />
        <Stack.Screen
          name="CreatePost"
          component={CreatePostScreen}
          options={({route}) => ({title: route.params.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
