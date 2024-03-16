import {doSignIn} from '@app/user/userSlice';
import {ApiEndPoints} from '@shared/constants';
import {baseUrl} from '@shared/constants';
import {
  getCookieOfRefreshToken,
  saveCookieOfRefreshToken,
} from '@utils/refreshTokenCookie';

export async function httpFetch(
  endpoint: string,
  method: string,
  thunkAPI: any,
  data: any = null,
) {
  const user = thunkAPI.getState().user;
  const dispatch = thunkAPI.dispatch;
  const token = user.token;

  const url = `${baseUrl}${endpoint}`;

  const headers = new Headers({
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: `Bearer ${token}`,
  });

  const requestOptions: RequestInit = {
    method: method ?? 'POST',
    headers: headers,
    mode: 'same-origin', // no-cors, *cors, same-origin
    credentials: 'same-origin',
  };

  if (data != null) requestOptions['body'] = JSON.stringify(data);
  const requestFirst = new Request(url, requestOptions);

  let response = await fetch(requestFirst);
  if (response.ok) return response;

  if (response.status === 401 && url !== ApiEndPoints.USER_SIGN_IN) {
    const result = await refreshToken();
    if (result !== null) {
      dispatch(
        doSignIn({signedIn: true, token: result.newToken, userId: user.userId}),
      );

      //fetch-retry with new token
      headers.set('Authorization', `Bearer ${result.newToken}`);
      const requestRetry = new Request(url, requestOptions);

      response = await fetch(requestRetry);
      if (response.ok) return response;
    }
  }

  dispatch(doSignIn({signedIn: false, token: '', userId: ''}));
  return Promise.reject(response.status);
}

interface RefreshToken {
  newToken: string;
  userId: string;
}

export async function refreshToken(): Promise<RefreshToken | null> {
  const cookieValue = await getCookieOfRefreshToken();
  const refreshTokenUrl = `${baseUrl}${ApiEndPoints.USER_REFRESH_SIGN_IN}`;
  const response = await fetch(refreshTokenUrl, {
    method: 'PUT',
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
      Cookie: cookieValue,
    },
  });

  if (response.ok) {
    await saveCookieOfRefreshToken(response);
    let result = await response.json();
    let newToken = result?.data?.token;
    let userId = result?.data?.userId;
    return {newToken, userId};
  }

  return null;
}
