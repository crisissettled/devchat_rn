export type AuthStateProps = {
  isLoading: boolean;
  isSignout: boolean;
  userToken?: string | null;
};

export type AuthActionProps = {
  token?: string | null;
  type: 'RESTORE_TOKEN' | 'SIGN_IN' | 'SIGN_OUT';
};

export type AuthContextProps = {
  signIn: ({username, password}: SignInParams) => void;
  signOut: () => void;
  signUp: () => void;
};

export interface SignInParams {
  username: string;
  password: string;
}
