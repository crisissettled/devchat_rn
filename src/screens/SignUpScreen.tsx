import {useEffect, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {RESULT_CODE_SUCCESS, baseUrl} from '@shared/constants';
import {PropsSignUp} from 'screens/types';

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

export default function SignUpScreen({navigation}: PropsSignUp) {
  const [userId, setuserId] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isTermsServiceSelected, setTermsServiceSelected] = useState(false);

  // const [isSuccess, setIsSuccess] = useState(false);
  // const [toSignInPage, setToSignInPage] = useState(false);

  // useEffect(() => {
  //   let timer: ReturnType<typeof setTimeout>;
  //   if (isSuccess === true)
  //     timer = setTimeout(() => setToSignInPage(true), 2000);

  //   return () => clearTimeout(timer);
  // }, [isSuccess]);

  // if (toSignInPage === true) {
  //   navigation.navigate('SignIn');
  //   return;
  // }

  const handleSubmit = async () => {
    if (userId === '' || password === '') {
      Alert.alert('Warning', 'Please enter User id and Password!');
      return;
    }

    if (password !== repeatPassword) {
      Alert.alert('Warning', 'Two passwords do NOT match!');
      return;
    }

    if (isTermsServiceSelected === false) {
      Alert.alert('Warning', 'Please agree the Terms of services!');
      return;
    }

    const response = await fetch(`${baseUrl}/api/User/SignUp`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({userId, password, name: userId}), // name is userId by default
    });

    if (response.ok) {
      const result = await response.json();
      if (result.code === RESULT_CODE_SUCCESS) {
        // setIsSuccess(true);
        Alert.alert(
          'success',
          'Sigup success, you will be redirected to Signin page',
          [
            {
              text: 'Ok',
              onPress: () => navigation.navigate('SignIn'),
            },
          ],
        );
      }
    } else {
      Alert.alert('Failed', 'Sigup failed, please try later!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View>
        <TextInput
          placeholder="Your User Id"
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
        <TextInput
          placeholder="Repeat Your Password"
          value={repeatPassword}
          onChangeText={setRepeatPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <View style={(styles.alignItemsCenter, {marginBottom: 15})}>
        <BouncyCheckbox
          isChecked={isTermsServiceSelected}
          size={30}
          text="I agree all statements in Terms of service"
          iconStyle={{borderColor: 'red'}}
          innerIconStyle={{borderWidth: 2}}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
          onPress={(isChecked: boolean) => {
            setTermsServiceSelected(isChecked);
          }}
        />
      </View>
      <View style={styles.alignItemsCenter}>
        <TouchableOpacity
          style={[styles.signUpButtonCommon, styles.signUpButton]}
          onPress={handleSubmit}>
          <Text
            style={[styles.signUpbuttonTextCommon, styles.signUpButtonText]}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
