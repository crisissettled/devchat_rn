import {
  getGenericPassword,
  resetGenericPassword,
  setGenericPassword,
} from 'react-native-keychain';
import {RefreshTokenKey} from '@shared/constants';

export const saveCookieOfRefreshToken = async (response: Response) => {
  let refreshCookie = null;
  if (response !== null) {
    let cookieString = response.headers.get('Set-Cookie');
    if (cookieString) {
      let cookieItems = cookieString.split(';');
      for (let cookie of cookieItems) {
        if (cookie.indexOf(RefreshTokenKey) > -1) {
          refreshCookie = cookie;
          break;
        }
      }
      console.log(refreshCookie, 'saveCookieOfRefreshToken');

      if (refreshCookie !== null) {
        // Store the credentials
        await setGenericPassword(RefreshTokenKey, refreshCookie);
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
