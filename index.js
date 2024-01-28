/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import store from '@app/store';

AppRegistry.registerComponent(appName, () => App);

function AppWrapper() {
  <Provider store={store}>
    <App />
  </Provider>;
}
