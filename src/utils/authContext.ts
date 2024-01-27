import {createContext} from 'react';
import {PropsAuthContext} from '@shared/types/authTypes';

export const AuthContext = createContext<PropsAuthContext>({
  signIn() {},
  signOut() {},
  signUp() {},
});
