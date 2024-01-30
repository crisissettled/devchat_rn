import React from 'react';
import {View, Text, Button} from 'react-native';

import {useAppDispatch} from '@app/store';
import {doSignOut} from '@app/user/userSlice';

export default function ProfileScreen() {
  const dispatch = useAppDispatch();

  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button onPress={() => dispatch(doSignOut())} title="Sign out" />
    </View>
  );
}
