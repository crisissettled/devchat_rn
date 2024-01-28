import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import store from '@app/store';
import RootStackScreen from '@screens/RootStackScreen';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </Provider>
  );
}
