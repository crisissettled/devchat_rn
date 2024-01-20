import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const SettingsStack = createNativeStackNavigator();

function B() {
  return <View />;
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="B" component={B} />
    </SettingsStack.Navigator>
  );
}

export default SettingsStackScreen;
