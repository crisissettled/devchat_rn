import {
  getGenericPassword,
  resetGenericPassword,
  setGenericPassword,
} from 'react-native-keychain';
import {refreshTokenKey} from '@shared/constants';

export const saveCookieOfRefreshToken = async (response: Response) => {
  let refreshToken = null;
  if (response !== null) {
    let cookieString = response.headers.get('Set-Cookie');
    if (cookieString) {
      let cookieItems = cookieString.split(';');
      for (let cookie of cookieItems) {
        if (cookie.indexOf(refreshTokenKey) > -1) {
          refreshToken = cookie;
          break;
        }
      }
      console.log(refreshToken, 'saveCookieOfRefreshToken');

      if (refreshToken !== null) {
        // Store the credentials
        await setGenericPassword(refreshTokenKey, refreshToken);
      }

      // console.log(cookieString, 'response-inspect cookieString');
      //   console.log(cookieItems, 'response-inspect cookie');
    }
  }
};

export const getCookieOfRefreshToken = async () => {
  let token = '';
  try {
    // Retrieve the credentials
    const credentials = await getGenericPassword();
    if (credentials) {
      //   console.log(
      //     'Credentials successfully loaded for user ' + credentials.username,
      //     credentials.password,
      //   );
      token = credentials.password;
    } else {
      console.log('No credentials stored');
    }
  } catch (error) {
    console.log("Keychain couldn't be accessed!", error);
  }

  await resetGenericPassword();

  return token;
};
