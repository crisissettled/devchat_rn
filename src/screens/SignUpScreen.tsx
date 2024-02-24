import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useEffect, useState} from 'react';

const styles = StyleSheet.create({
  title: {
    margin: 10,
    marginTop: 80,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    marginHorizontal: 30,
    flex: 1,
  },
  input: {
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    height: 48,
  },
  signUpButtonCommon: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#8fbc8f',
  },
  signUpButton: {
    backgroundColor: '#8fbc8f',
  },
  signUpbuttonTextCommon: {
    textAlign: 'center',
    width: 260,
    padding: 15,
    fontSize: 20,
  },
  signUpButtonText: {
    color: '#fff',
  },

  alignItemsCenter: {alignItems: 'center'},
});

export default function SignUpScreen() {
  const [userId, setuserId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View>
        <TextInput
          placeholder="Your User Name"
          value={userId}
          onChangeText={setuserId}
          style={styles.input}
        />
        <TextInput
          placeholder="Your Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <View style={styles.alignItemsCenter}>
        <TouchableOpacity
          style={[styles.signUpButtonCommon, styles.signUpButton]}
          onPress={() => console.log('sign up')}>
          <Text
            style={[styles.signUpbuttonTextCommon, styles.signUpButtonText]}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
