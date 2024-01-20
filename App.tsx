import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStackScreen from './screens/HomeScreen';
import SettingsStackScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{tabBarLabel: 'Home!'}}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{
            tabBarLabel: 'Settings!',
            headerRight: () => <Text>Hello</Text>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
