import {doSignIn} from '@app/user/userSlice';
import {ApiEndPoints} from '@shared/constants';
import {baseUrl} from '@shared/constants';

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
    response = await refreshToken();
    if (response.ok) {
      let result = await response.json();
      let newToken = result?.data?.token;
      dispatch(
        doSignIn({signedIn: true, token: newToken, userId: user.userId}),
      );

      //fetch-retry with new token
      headers.set('Authorization', `Bearer ${newToken}`);
      const requestRetry = new Request(url, requestOptions);

      response = await fetch(requestRetry);
      if (response.ok) return response;
    }
  }

  dispatch(doSignIn({signedIn: false, token: '', userId: ''}));
  return Promise.reject(response.status);
}

export async function refreshToken() {
  const requestOptions: RequestInit = {
    method: 'PUT',
    mode: 'same-origin', // no-cors, *cors, same-origin
    credentials: 'same-origin',
  };

  const request = new Request(
    ApiEndPoints.USER_REFRESH_SIGN_IN,
    requestOptions,
  );
  const response = await fetch(request);

  return response;
}
