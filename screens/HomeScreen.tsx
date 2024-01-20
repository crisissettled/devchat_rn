import {View, Text, StatusBar, Button} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {styles} from '../css/SharedCSS';

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
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Text>Dark Screen -HOME</Text>
      <Button title="Next screen" onPress={() => navigation.navigate('Post')} />
    </View>
  );
}

export default HomeScreen;
