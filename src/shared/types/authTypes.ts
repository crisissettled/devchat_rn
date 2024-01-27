export type PropsAuthState = {
  isLoading: boolean;
  isSignout: boolean;
  userToken?: string | null;
};

export type PropsAuthAction = {
  token?: string | null;
  type: 'RESTORE_TOKEN' | 'SIGN_IN' | 'SIGN_OUT';
  isLoading: boolean;
};

export type PropsAuthContext = {
  signIn: ({username, password}: SignInParams) => void;
  signOut: () => void;
  signUp: () => void;
};

export interface SignInParams {
  username: string;
  password: string;
}
