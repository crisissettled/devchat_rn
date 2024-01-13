import {View, Text, Button} from 'react-native';

function Feed({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Feed Screen</Text>
      <Button
        onPress={() => navigation.navigate('Messages')}
        title="Go to Messages"
      />
    </View>
  );
}

export default Feed;
