import {useState, createContext, useContext} from 'react';
import {AuthContextProps} from '../types/auth';

export const AuthContext = createContext<AuthContextProps>({
  signIn() {},
  signOut() {},
  signUp() {},
});
