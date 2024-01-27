import {useEffect, useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

import {PropsChatTabs} from '@shared/types/navigationTypes';

function CreatePostScreen({navigation, route}: PropsChatTabs) {
  const [postText, setPostText] = useState('');
  const {userId} = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="back" onPress={() => navigation.navigate('SignIn')} />
      ),
    });
  }, []);

  return (
    <>
      <View>
        <Text style={{padding: 10, fontSize: 35, fontWeight: 'bold'}}>
          Hi {userId},
        </Text>
      </View>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{height: 200, padding: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <View style={{padding: 5}}>
        <Button
          title="Done"
          onPress={() => {
            // Pass and merge params back to home screen
            navigation.navigate({
              name: 'SignIn',
              params: {post: postText},
              merge: true,
            });
          }}
        />
      </View>
      <View style={{padding: 5}}>
        <Button
          title="Change Title"
          onPress={() => {
            const r = (Math.random() * 100).toFixed(2);
            navigation.setOptions({title: `New Create Post - ${r}`});
          }}
        />
      </View>
    </>
  );
}

export default CreatePostScreen;
