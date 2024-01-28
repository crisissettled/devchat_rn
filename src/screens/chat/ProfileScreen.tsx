import {View, Text, Button} from 'react-native';
import React from 'react';

export default function ProfileScreen() {
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button onPress={() => console.log('logout')} title="Sign out" />
    </View>
  );
}
