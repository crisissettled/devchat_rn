import {useEffect, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import RNBiometrics from 'react-native-simple-biometrics';

import {userSignIn} from '@app/user/userSlice';
import {useAppDispatch} from '@app/store';

const styles = StyleSheet.create({
  title: {
    margin: 10,
    marginTop: 80,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    marginLeft: 5,
    marginRight: 5,
    flex: 1,
  },
  input: {
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    height: 48,
  },
  signInButtonCommon: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#008b8b',
  },
  signInButton: {
    backgroundColor: '#008b8b',
  },
  signInBioButton: {
    backgroundColor: '#ffffff',
    marginTop: 10,
  },
  signInbuttonTextCommon: {
    textAlign: 'center',
    width: 230,
    padding: 15,
    fontSize: 20,
  },
  signInButtonText: {
    color: '#ffffff',
  },
  signInBioButtonText: {
    color: '#008b8b',
    textAlign: 'center',
  },
  alignItemsCenter: {alignItems: 'center'},
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
    <View style={styles.container}>
      <Text style={styles.title}>Please Sign In</Text>
      <View>
        <TextInput
          placeholder="Username"
          value={userId}
          onChangeText={setuserId}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <View style={styles.alignItemsCenter}>
        <TouchableOpacity
          style={[styles.signInButtonCommon, styles.signInButton]}
          onPress={() =>
            dispatch(userSignIn({userId, password, keepLoggedIn}))
          }>
          <Text
            style={[styles.signInbuttonTextCommon, styles.signInButtonText]}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.alignItemsCenter}>
        <TouchableOpacity
          style={[styles.signInButtonCommon, styles.signInBioButton]}
          onPress={() => biometricsAuth()}>
          <Text
            style={[styles.signInbuttonTextCommon, styles.signInBioButtonText]}>
            Biometrics
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignInScreen;
