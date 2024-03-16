import React, {useEffect, useState} from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {useAppDispatch} from '@app/store';
import {doSignOut} from '@app/user/userSlice';
import {getAsyncStorage, saveAsyncStorage} from '@utils/asyncStorage';
import {clearCookieOfRefreshToken} from '@utils/refreshTokenCookie';
import {
  UserPreferenceAsyncStorageKey,
  UserPreferenceKeys,
} from '@shared/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marginEle: {
    margin: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ff7f50',
    borderRadius: 15,
    padding: 10,
  },
});

export default function ProfileScreen() {
  const [useBiometrics, setUserBiometrics] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getCurrentPreference = async () => {
      let currentPreferenceFlatValue = await getAsyncStorage(
        UserPreferenceAsyncStorageKey,
      );
      if (typeof currentPreferenceFlatValue === 'string') {
        const currentPreferenceObj = JSON.parse(currentPreferenceFlatValue);
        if (currentPreferenceObj) {
          console.log(
            currentPreferenceObj[UserPreferenceKeys.useBiometrics],
            '<----use biometrics',
          );
          setUserBiometrics(
            () => currentPreferenceObj[UserPreferenceKeys.useBiometrics],
          );
        }
      }
    };
    getCurrentPreference();
  }, []);

  const handleUseBiometrics = async () => {
    let currentPreferenceFlatValue = await getAsyncStorage(
      UserPreferenceAsyncStorageKey,
    );
    let newPreferenceObj = {};
    if (typeof currentPreferenceFlatValue === 'string') {
      const currentPreferenceObj = JSON.parse(currentPreferenceFlatValue);
      if (currentPreferenceObj) {
        newPreferenceObj = Object.assign(
          newPreferenceObj,
          currentPreferenceObj,
        );
      }
    }
    newPreferenceObj = Object.assign(newPreferenceObj, {
      [UserPreferenceKeys.useBiometrics]: !useBiometrics,
    });
    const newPreferenceFlatValue = JSON.stringify(newPreferenceObj);
    await saveAsyncStorage({
      key: UserPreferenceAsyncStorageKey,
      value: newPreferenceFlatValue,
    });
    setUserBiometrics(!useBiometrics);
  };

  const handleSignOut = async () => {
    if (useBiometrics === false) {
      //clear refresh token(cookie) from security store
      await clearCookieOfRefreshToken();
    }
    dispatch(doSignOut());
  };

  return (
    <View style={styles.container}>
      <View style={styles.marginEle}>
        <BouncyCheckbox
          disableBuiltInState
          isChecked={useBiometrics}
          size={30}
          text="Use Biometrics"
          iconStyle={{borderColor: '#7fff00'}}
          innerIconStyle={{borderWidth: 2}}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
          onPress={() => {
            handleUseBiometrics();
          }}
        />
      </View>
      <View style={styles.marginEle}>
        <TouchableHighlight underlayColor="transparent" onPress={handleSignOut}>
          <View style={styles.button}>
            <Text>Sign out</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}
