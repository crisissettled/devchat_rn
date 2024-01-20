import {View, Text, StatusBar, Button, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {styles} from '../css/SharedCSS';

function CreatePostScreen({navigation}) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: '#6a51ae',
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Text style={{color: '#fff'}}>Light Screen - POST</Text>
      <Button
        title="Next screen"
        onPress={() => navigation.navigate('Home')}
        color="#0E00FF"
      />
    </View>
  );
}

export default CreatePostScreen;
