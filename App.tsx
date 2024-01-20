import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';
import CreatePostScreen from './screens/CreatePostScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{headerShown: false}}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Post" component={CreatePostScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
