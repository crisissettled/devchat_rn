import {useEffect, useState} from 'react';
import {Text, TextInput, View, Button, StyleSheet} from 'react-native';

import RNBiometrics from 'react-native-simple-biometrics';

import {userSignIn} from '@app/user/userSlice';
import {useAppDispatch} from '@app/store';

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

function SignInScreen() {
  const [userId, setuserId] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setkeepLoggedIn] = useState(true);
  const dispatch = useAppDispatch();

  const biometricsAuth = async () => {
    // Check if biometric authentication is available
    const can = await RNBiometrics.canAuthenticate();
    console.log('biometrics canable', can);
    if (can) {
      try {
        const authorized = await RNBiometrics.requestBioAuth(
          'Sign on DevChat',
          'Boimetrics',
        );

        console.log('authorized-->', authorized);
        if (authorized) {
          dispatch(userSignIn({userId, password, keepLoggedIn}));
        }
        // Code to execute when authenticated
      } catch (error) {
        // Code to handle authentication failure
        console.log(error, 'error');
      }
    }
  };

  useEffect(() => {
    //biometricsAuth();
  }, []);

  return (
    <View>
      <Text
        style={{
          margin: 10,
          marginTop: 80,
          fontSize: 40,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Please Sign In
      </Text>
      <TextInput
        placeholder="Username"
        value={userId}
        onChangeText={setuserId}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Sign in"
        onPress={() => dispatch(userSignIn({userId, password, keepLoggedIn}))}
      />

      <Button title="Biometrics" onPress={() => biometricsAuth()} />
    </View>
  );
}

export default SignInScreen;
