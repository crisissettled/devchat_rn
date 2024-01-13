import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Feed from './Feed';
import Messages from './Messages';

const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Home;
