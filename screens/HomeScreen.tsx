import {useState, useEffect} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

import {PropsHome} from '../types/StackScreen';

function HomeScreen({navigation, route}: PropsHome) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (route.params?.post) {
      console.log(route.params?.post, 'post1');
    }
  }, [route.params?.post]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Count: {count}</Text>
      <Button
        title="Create post"
        onPress={() =>
          navigation.navigate('CreatePost', {
            userId: 'james',
            name: 'my create post',
          })
        }
      />
      <Text style={{margin: 10}}>Post: {route.params?.post}</Text>
    </View>
  );
}

export default HomeScreen;
