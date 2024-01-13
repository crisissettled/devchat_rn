import {useEffect} from 'react';
import {View, Text, Button, Alert} from 'react-native';

function Messages({navigation}) {
  useEffect(() => {
    const unsubscribe = navigation.getParent().addListener('tabPress', e => {
      // Do something
      Alert.alert('Tab pressed!');
    });

    return unsubscribe;
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Messages Screen</Text>
      <Button onPress={() => navigation.navigate('Feed')} title="Go to Feed" />
    </View>
  );
}

export default Messages;
