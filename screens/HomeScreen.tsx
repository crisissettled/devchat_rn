import {View, Text, StatusBar, Button} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {styles} from '../css/SharedCSS';
import FocusAwareStatusBar from '../component/FocusAwareStatusBar';

function HomeScreen({navigation}) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: '#ecf0f1',
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Text>Dark Screen -HOME</Text>
      <Button title="Next screen" onPress={() => navigation.navigate('Post')} />
      <Text></Text>
      <View
        style={{
          flex: 0.2,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Button title="open menu" onPress={() => navigation.openDrawer()} />
        <Button title="close menu" onPress={() => navigation.closeDrawer()} />
        <Button title="toggle menu" onPress={() => navigation.toggleDrawer()} />
      </View>
    </View>
  );
}

export default HomeScreen;
