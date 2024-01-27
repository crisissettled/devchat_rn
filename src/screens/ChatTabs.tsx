import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabParamList} from '@shared/types/navigationTypes';
import ChatScreen from '@screens/chat/ChatScreen';
import FriendsScreen from '@screens/chat/FriendsScreen';
import ProfileScreen from '@screens/chat/ProfileScreen';

const Tab = createBottomTabNavigator<TabParamList>();

function ChatTabsScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Friends" component={FriendsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default ChatTabsScreen;
