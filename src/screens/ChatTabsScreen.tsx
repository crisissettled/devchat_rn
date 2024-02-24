import {useEffect} from 'react';
import {Alert, BackHandler} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabParamList} from '@shared/types/navigationTypes';
import ChatScreen from '@screens/chat/ChatScreen';
import FriendsScreen from '@screens/chat/FriendsScreen';
import ProfileScreen from '@screens/chat/ProfileScreen';

const Tab = createBottomTabNavigator<TabParamList>();

function ChatTabsScreen() {
  useEffect(() => {
    const backAction = () => {
      // Prompt the user before leaving the screen
      Alert.alert('LOGOUT', 'are you going to log out?', [
        {text: 'Cancel', style: 'cancel', onPress: () => null},
        {
          text: 'Log out',
          style: 'destructive',
          onPress: () => BackHandler.exitApp(),
        },
      ]);

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Friends" component={FriendsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default ChatTabsScreen;
