import {View, Text, Button} from 'react-native';
import React from 'react';

import {useContext} from 'react';
import {AuthContext} from '@utils/authContext';

export default function ProfileScreen() {
  const {signOut} = useContext(AuthContext);
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button onPress={() => signOut()} title="Sign out" />
    </View>
  );
}
